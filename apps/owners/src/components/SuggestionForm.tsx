"use client";

import { useState, useEffect, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-primary-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-primary-900 dark:text-stone-100 placeholder-primary-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-shadow";

export default function SuggestionForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState("");

  // Record which page the visitor is on, and pick up the result of a no-JS submission
  useEffect(() => {
    const url = new URL(window.location.href);
    url.hash = "";
    url.searchParams.delete("suggested");
    url.searchParams.delete("suggestError");
    setPage(url.toString());

    const params = new URLSearchParams(window.location.search);
    if (params.get("suggested") === "1") {
      setStatus("success");
    }
    const error = params.get("suggestError");
    if (error) {
      setErrorMessage(error);
      setStatus("error");
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!(formData.get("message") as string)?.trim()) {
      setErrorMessage("Please tell us what to fix.");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/suggest", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMessage(data.error || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="suggest"
      className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 scroll-mt-24"
    >
      <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-2">
        ✏️ Spot an Error? Suggest a Correction
      </h3>
      <p className="text-sm text-primary-800 dark:text-stone-200 mb-6 max-w-3xl">
        This guide is only as good as its sources. If something here is wrong, out of date, or
        missing, quote the line, say what it should be, and cite the section if you have it.
        We&rsquo;ll check it against the documents.
      </p>

      {status === "success" ? (
        <div className="bg-primary-100 dark:bg-primary-950/50 border border-primary-300 dark:border-primary-700 rounded-xl p-6 text-center">
          <p className="text-lg font-bold text-primary-900 dark:text-stone-100 mb-1">Thanks</p>
          <p className="text-sm text-primary-800 dark:text-stone-200 mb-4">
            We&rsquo;ll check it against the documents and fix the page if you&rsquo;re right.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-sm text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 underline font-medium"
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          action="/api/suggest"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4 max-w-3xl"
        >
          {status === "error" && errorMessage && (
            <div
              role="alert"
              className="bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg p-4"
            >
              {errorMessage}
            </div>
          )}

          <input type="hidden" name="page" value={page} />

          {/* Honeypot: hidden from people, filled by bots */}
          <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="suggest-website">Website</label>
            <input type="text" id="suggest-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label
              htmlFor="suggest-quote"
              className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
            >
              The line that&rsquo;s wrong <span className="font-normal text-primary-600 dark:text-stone-400">(optional)</span>
            </label>
            <input
              type="text"
              id="suggest-quote"
              name="quote"
              maxLength={1000}
              placeholder="Paste the sentence here"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="suggest-message"
              className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
            >
              What should it say? <span className="text-red-600">*</span>
            </label>
            <textarea
              id="suggest-message"
              name="message"
              required
              rows={4}
              maxLength={4000}
              placeholder="What's wrong, what it should say, and the section it comes from if you know it"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="suggest-email"
              className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
            >
              Your email <span className="font-normal text-primary-600 dark:text-stone-400">(optional, if you&rsquo;d like a reply)</span>
            </label>
            <input
              type="email"
              id="suggest-email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="jane@example.com"
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto py-3 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            {status === "submitting" ? "Sending…" : "Send Correction"}
          </button>

          <p className="text-xs text-primary-600 dark:text-stone-400">
            Goes to community@oakhillsettlement.homes. We use your email only to reply about this
            suggestion.
          </p>
        </form>
      )}
    </section>
  );
}
