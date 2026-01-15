import { Suspense } from "react";
import StumpLogo from "@/components/StumpLogo";
import ScrollIndicator from "@/components/ScrollIndicator";
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
      <header className="min-h-[100svh] md:min-h-0 flex flex-col md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm [@media(min-width:768px)_and_(min-height:500px)]:sticky [@media(min-width:768px)_and_(min-height:500px)]:top-0 z-50">
        <div className="md:flex-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
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
        <nav className="mt-auto md:mt-0 md:flex-none pl-8 md:pl-0 pr-4 sm:px-6 lg:px-8 pb-16 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                </svg>
                Recall Info
              </a>
            </li>
            <li>
              <a
                href="/petition#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                Sign Petition
              </a>
            </li>
            <li>
              <a
                href="https://owners.oakhillsettlement.homes/rights#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Your Rights
              </a>
            </li>
          </ul>
        </nav>
        <ScrollIndicator />
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
