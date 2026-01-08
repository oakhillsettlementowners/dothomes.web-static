import { Suspense } from "react";
import StumpLogo from "@/components/StumpLogo";
import PetitionForm from "./PetitionForm";

// Loading skeleton for the form while Suspense resolves
function FormSkeleton() {
  return (
    <div className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-6 sm:p-8 space-y-6 animate-pulse">
      <div className="h-12 bg-primary-100 dark:bg-stone-800 rounded-lg" />
      <div className="h-12 bg-primary-100 dark:bg-stone-800 rounded-lg" />
      <div className="h-12 bg-primary-100 dark:bg-stone-800 rounded-lg" />
      <div className="h-6 bg-primary-100 dark:bg-stone-800 rounded w-3/4" />
      <div className="h-6 bg-primary-100 dark:bg-stone-800 rounded w-3/4" />
      <div className="h-14 bg-primary-200 dark:bg-stone-700 rounded-lg" />
    </div>
  );
}

export default function PetitionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black">
      {/* Header - Book cover style on mobile */}
      <header className="min-h-[100svh] md:min-h-0 flex flex-col md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm md:sticky md:top-0 z-50">
        <div className="flex-1 md:flex-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
          <a href="/#stage" className="flex items-center gap-3 group">
            <StumpLogo className="w-12 h-12 md:w-10 md:h-10 text-primary-700 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors" />
            <div>
              <h1 className="text-3xl md:text-2xl font-bold text-primary-900 dark:text-stone-100 group-hover:text-primary-700 dark:group-hover:text-stone-300 transition-colors">
                <span className="block text-sm font-normal text-primary-700 dark:text-stone-300">Homeowners of</span>
                Oak Hill Settlement
              </h1>
              <p className="text-sm text-primary-700 dark:text-stone-300">
                Forest Grove, Oregon • Recall Petition
              </p>
            </div>
          </a>
        </div>
        <nav className="pl-[4.75rem] pr-4 sm:px-6 lg:px-8 pb-8 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="text-lg md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Recall Info
              </a>
            </li>
            <li>
              <a
                href="/petition#stage"
                className="text-lg md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
              >
                Sign Petition
              </a>
            </li>
            <li>
              <a
                href="https://owners.oakhillsettlement.homes/rights#stage"
                className="text-lg md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Your Rights
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="stage" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-primary-900 dark:text-white mb-3">
            Take Action in 30 Seconds
          </h2>
          <p className="text-lg text-primary-800 dark:text-stone-200">
            Sign the recall petition and authorize your proxy vote.
            <br />
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              Only 10% of homeowners needed to initiate a recall vote.
            </span>
          </p>
        </div>

        {/* Form - wrapped in Suspense for useSearchParams */}
        <Suspense fallback={<FormSkeleton />}>
          <PetitionForm />
        </Suspense>

        {/* Info Section */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-bold text-primary-900 dark:text-stone-100 mb-3">
            Why Sign?
          </h3>
          <ul className="text-sm text-primary-800 dark:text-stone-200 space-y-2 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Oregon law (ORS 94.640) gives homeowners the right to recall Board members</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Only 10% of owners needed to petition for a recall vote</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Recall meetings have no quorum requirement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span>Your vote helps restore accountability and document-based governance</span>
            </li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-primary-700 dark:text-stone-400">
          <p className="mb-2">
            <a
              href="https://owners.oakhillsettlement.homes/#stage"
              className="underline hover:text-primary-900 dark:hover:text-stone-200"
            >
              Visit the community hub
            </a>{" "}
            for documents, AI assistant, and your rights guide.
          </p>
          <p className="text-xs italic mt-8">
            Independent homeowner effort • Not affiliated with HOA Board or property management
          </p>
        </div>
      </main>
    </div>
  );
}
