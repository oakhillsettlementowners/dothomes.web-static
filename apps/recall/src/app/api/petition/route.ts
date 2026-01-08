import { NextRequest, NextResponse } from "next/server";

// Optional: Add RESEND_API_KEY to .env.local to enable email notifications
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFICATION_EMAIL = "recall@oakhillsettlement.homes";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    
    let name: string;
    let address: string;
    let email: string;
    let confirmHomeowner: boolean;
    let authorizeProxy: boolean;

    // Handle both form submissions (no JS) and JSON (with JS fetch)
    if (contentType.includes("application/json")) {
      const json = await request.json();
      name = json.name;
      address = json.address;
      email = json.email;
      confirmHomeowner = json["confirm-homeowner"];
      authorizeProxy = json["authorize-proxy"];
    } else {
      // application/x-www-form-urlencoded or multipart/form-data
      const formData = await request.formData();
      name = formData.get("name") as string;
      address = formData.get("address") as string;
      email = formData.get("email") as string;
      confirmHomeowner = formData.get("confirm-homeowner") === "on";
      authorizeProxy = formData.get("authorize-proxy") === "on";
    }

    // Validation
    if (!name || !address || !email) {
      return handleError(request, "Please fill in all required fields.", 400);
    }

    if (!confirmHomeowner || !authorizeProxy) {
      return handleError(request, "Please confirm both checkboxes to submit your proxy vote.", 400);
    }

    // Log the submission (always)
    const timestamp = new Date().toISOString();
    console.log(`[PROXY VOTE] ${timestamp}`);
    console.log(`  Name: ${name}`);
    console.log(`  Address: ${address}`);
    console.log(`  Email: ${email}`);
    console.log(`  Homeowner confirmed: ${confirmHomeowner}`);
    console.log(`  Proxy authorized: ${authorizeProxy}`);
    console.log("---");

    // Send email notification if Resend is configured
    if (RESEND_API_KEY) {
      try {
        await sendEmailNotification({ name, address, email, timestamp });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the submission if email fails - we have the log
      }
    }

    // Return success
    return handleSuccess(request);
  } catch (error) {
    console.error("Petition submission error:", error);
    return handleError(request, "An unexpected error occurred. Please try again.", 500);
  }
}

async function sendEmailNotification(data: {
  name: string;
  address: string;
  email: string;
  timestamp: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Oak Hill Recall <petition@recall.oakhillsettlement.homes>",
      to: [NOTIFICATION_EMAIL],
      subject: `New Proxy Vote: ${data.name}`,
      text: `
New proxy vote submission received:

Name: ${data.name}
Address: ${data.address}
Email: ${data.email}
Submitted: ${data.timestamp}

✓ Confirmed homeowner in Oak Hill Settlement
✓ Authorized proxy vote for recall election

---
This is an automated notification from the recall petition form.
      `.trim(),
      reply_to: data.email,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }
}

function handleSuccess(request: NextRequest) {
  const acceptsJson = request.headers.get("accept")?.includes("application/json");
  
  if (acceptsJson) {
    return NextResponse.json({ success: true, message: "Proxy vote submitted successfully." });
  }
  
  // Redirect to success page for non-JS form submissions
  return NextResponse.redirect(new URL("/petition?success=true#stage", request.url));
}

function handleError(request: NextRequest, message: string, status: number) {
  const acceptsJson = request.headers.get("accept")?.includes("application/json");
  
  if (acceptsJson) {
    return NextResponse.json({ success: false, error: message }, { status });
  }
  
  // Redirect back with error for non-JS form submissions
  const errorUrl = new URL("/petition", request.url);
  errorUrl.searchParams.set("error", message);
  errorUrl.hash = "stage";
  return NextResponse.redirect(errorUrl);
}

