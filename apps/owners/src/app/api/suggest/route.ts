import { NextRequest, NextResponse } from "next/server";

// Optional: add RESEND_API_KEY to .env.local to enable email delivery.
// Without it, submissions are only logged (same as the recall petition form).
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFICATION_EMAIL = process.env.SUGGESTION_EMAIL || "community@oakhillsettlement.homes";
const FROM_ADDRESS =
  process.env.SUGGESTION_FROM || "Oak Hill Owners <suggestions@owners.oakhillsettlement.homes>";

const MAX_MESSAGE = 4000;
const MAX_QUOTE = 1000;
const FIELDS = ["page", "quote", "message", "email", "website"] as const;

type Fields = Record<(typeof FIELDS)[number], string>;

// Format timestamp for display
function formatTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    const fields = {} as Fields;

    // Handle both form submissions (no JS) and JSON (with JS fetch)
    if (contentType.includes("application/json")) {
      const json = await request.json();
      for (const key of FIELDS) {
        fields[key] = typeof json[key] === "string" ? json[key] : "";
      }
    } else {
      // application/x-www-form-urlencoded or multipart/form-data
      const formData = await request.formData();
      for (const key of FIELDS) {
        const value = formData.get(key);
        fields[key] = typeof value === "string" ? value : "";
      }
    }

    const page = (fields.page || request.headers.get("referer") || "").trim().slice(0, 500);
    const quote = fields.quote.trim().slice(0, MAX_QUOTE);
    const message = fields.message.trim();
    const email = fields.email.trim().slice(0, 254);

    // Honeypot: visitors never see this field, so anything in it is a bot
    if (fields.website) {
      return handleSuccess(request, page);
    }

    // Validation
    if (!message) {
      return handleError(request, "Please tell us what to fix.", 400, page);
    }
    if (message.length > MAX_MESSAGE) {
      return handleError(request, `Please keep it under ${MAX_MESSAGE} characters.`, 400, page);
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return handleError(request, "That email address doesn't look right.", 400, page);
    }

    // Log the submission (always)
    const timestamp = new Date().toISOString();
    console.log(`[SUGGESTION] ${timestamp}`);
    console.log(`  Page: ${page}`);
    console.log(`  Email: ${email || "(none)"}`);
    console.log(`  Quote: ${quote || "(none)"}`);
    console.log(`  Message: ${message}`);
    console.log("---");

    // Send the email if Resend is configured
    if (RESEND_API_KEY) {
      try {
        await sendSuggestion({ page, quote, message, email, timestamp });
      } catch (emailError) {
        console.error("Failed to send suggestion email:", emailError);
        return handleError(
          request,
          `We couldn't send that just now. Please try again, or email ${NOTIFICATION_EMAIL}.`,
          500,
          page
        );
      }
    }

    return handleSuccess(request, page);
  } catch (error) {
    console.error("Suggestion submission error:", error);
    return handleError(request, "An unexpected error occurred. Please try again.", 500, "");
  }
}

async function sendSuggestion(data: {
  page: string;
  quote: string;
  message: string;
  email: string;
  timestamp: string;
}) {
  const formattedTimestamp = formatTimestamp(data.timestamp);
  const flagged = data.quote ? `TEXT THEY FLAGGED:\n${data.quote}\n\n` : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [NOTIFICATION_EMAIL],
      ...(data.email ? { reply_to: data.email } : {}),
      subject: `Suggested correction: ${data.page || "owners site"}`,
      text: `
SUGGESTED CORRECTION - owners.oakhillsettlement.homes

Page: ${data.page || "(not given)"}
Submitted: ${formattedTimestamp}
From: ${data.email || "(no email given)"}

${flagged}WHAT TO FIX:
${data.message}

---
Sent from the correction form on the Owner Guide. Check the claim against the governing documents before changing the site.
      `.trim(),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }
}

// The page the visitor came from, as a same-origin path we can redirect back to
function returnPath(request: NextRequest, page: string): string {
  try {
    const origin = new URL(request.url).origin;
    const url = new URL(page, request.url);
    if (url.origin === origin && url.pathname.startsWith("/")) {
      return url.pathname;
    }
  } catch {
    // fall through
  }
  return "/rights";
}

function handleSuccess(request: NextRequest, page: string) {
  const acceptsJson = request.headers.get("accept")?.includes("application/json");

  if (acceptsJson) {
    return NextResponse.json({ success: true, message: "Thanks, we'll check it." });
  }

  // Redirect back for non-JS form submissions
  const url = new URL(returnPath(request, page), request.url);
  url.searchParams.set("suggested", "1");
  url.hash = "suggest";
  return NextResponse.redirect(url);
}

function handleError(request: NextRequest, message: string, status: number, page: string) {
  const acceptsJson = request.headers.get("accept")?.includes("application/json");

  if (acceptsJson) {
    return NextResponse.json({ success: false, error: message }, { status });
  }

  // Redirect back with the error for non-JS form submissions
  const url = new URL(returnPath(request, page), request.url);
  url.searchParams.set("suggestError", message);
  url.hash = "suggest";
  return NextResponse.redirect(url);
}
