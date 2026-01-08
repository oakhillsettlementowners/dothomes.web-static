"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function PetitionForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle success/error from no-JS form submission redirects
  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setStatus("success");
    }
    const error = searchParams.get("error");
    if (error) {
      setErrorMessage(error);
      setStatus("error");
    }
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const email = formData.get("email") as string;
    const confirmHomeowner = formData.get("confirm-homeowner");
    const authorizeProxy = formData.get("authorize-proxy");

    if (!name || !address || !email) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    if (!confirmHomeowner || !authorizeProxy) {
      setErrorMessage("Please confirm both checkboxes to submit your proxy vote.");
      setStatus("error");
      return;
    }

    // Submit to our API route
    try {
      const response = await fetch("/api/petition", {
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

  // Success State
  if (status === "success") {
    return (
      <div className="bg-primary-100 dark:bg-primary-950/50 border border-primary-300 dark:border-primary-700 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-2">
          Thank You!
        </h3>
        <p className="text-primary-800 dark:text-stone-200 mb-6">
          Your proxy vote has been submitted. We'll be in touch as the petition progresses.
        </p>
        <div className="space-y-3">
          <a
            href="https://owners.oakhillsettlement.homes/rights#stage"
            className="block text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 underline font-medium"
          >
            Learn more about your rights →
          </a>
          <a
            href="https://nextdoor.com/neighborhood/oakhillfg--forest-grove--or/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 underline font-medium"
          >
            Join the conversation on Nextdoor →
          </a>
        </div>
      </div>
    );
  }

  // Form
  return (
    <form
      action="/api/petition"
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-6 sm:p-8 space-y-6"
      autoComplete="on"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Error Message */}
      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg p-4"
        >
          {errorMessage}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
        >
          Full Legal Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          itemProp="name"
          placeholder="Jane Smith"
          className="w-full px-4 py-3 rounded-lg border border-primary-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-primary-900 dark:text-stone-100 placeholder-primary-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Address Field */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
        >
          Property Address in Oak Hill Settlement <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          autoComplete="street-address"
          itemProp="address"
          placeholder="1234 Oak Hill Dr, Forest Grove, OR 97116"
          className="w-full px-4 py-3 rounded-lg border border-primary-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-primary-900 dark:text-stone-100 placeholder-primary-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
        >
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          itemProp="email"
          inputMode="email"
          placeholder="jane@example.com"
          className="w-full px-4 py-3 rounded-lg border border-primary-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-primary-900 dark:text-stone-100 placeholder-primary-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Checkboxes */}
      <fieldset className="space-y-4">
        <legend className="sr-only">Confirmations</legend>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="confirm-homeowner"
            name="confirm-homeowner"
            required
            className="mt-1 w-5 h-5 rounded border-primary-300 dark:border-stone-600 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-stone-900"
          />
          <label
            htmlFor="confirm-homeowner"
            className="text-sm text-primary-800 dark:text-stone-200"
          >
            I confirm that I am a homeowner in Oak Hill Settlement HOA.{" "}
            <span className="text-red-600">*</span>
          </label>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="authorize-proxy"
            name="authorize-proxy"
            required
            className="mt-1 w-5 h-5 rounded border-primary-300 dark:border-stone-600 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-stone-900"
          />
          <label
            htmlFor="authorize-proxy"
            className="text-sm text-primary-800 dark:text-stone-200"
          >
            I authorize this proxy vote for the Oak Hill Settlement Board recall election
            under ORS 94.640(7). <span className="text-red-600">*</span>
          </label>
        </div>
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-bold text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </span>
        ) : (
          "Submit Proxy Vote"
        )}
      </button>

      {/* Notes */}
      <p className="text-xs text-primary-600 dark:text-stone-400 text-center">
        Own multiple lots? Please submit the form once&nbsp;per&nbsp;lot.
      </p>
      <p className="text-xs text-primary-600 dark:text-stone-400 text-center">
        Renting? You may ask your landlord to sign&nbsp;for&nbsp;you.
      </p>
      <p className="text-xs text-primary-600 dark:text-stone-400 text-center mt-2">
        By submitting, you agree that your information may be used to verify homeownership
        and record your proxy vote for the recall petition. Your information will not be
        shared outside of this recall effort.
      </p>
    </form>
  );
}

