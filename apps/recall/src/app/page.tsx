import StumpLogo from '@/components/StumpLogo';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black">
      {/* Header - Book cover style on mobile */}
      <header className="min-h-[100svh] md:min-h-0 flex flex-col md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm [@media(min-width:768px)_and_(min-height:500px)]:sticky [@media(min-width:768px)_and_(min-height:500px)]:top-0 z-50">
        <div className="md:flex-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
          <div className="flex items-center gap-3">
            <StumpLogo className="w-12 h-12 md:w-10 md:h-10 text-primary-700 dark:text-primary-400" />
            <div>
              <h1 className="text-3xl md:text-2xl font-bold text-primary-900 dark:text-stone-100">
                <span className="block text-sm font-normal text-primary-700 dark:text-stone-300">Homeowners of</span>
                Oak Hill Settlement
              </h1>
              <p className="text-sm text-primary-700 dark:text-stone-300">
                Forest Grove, Oregon • Recall Campaign
              </p>
            </div>
          </div>
        </div>
        <nav className="mt-auto md:mt-0 md:flex-none pl-8 md:pl-0 pr-4 sm:px-6 lg:px-8 pb-16 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
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
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
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

      {/* Main Content */}
      <main id="stage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-primary-900 dark:text-white mb-4">
            Recall the Board
          </h2>
          <p className="text-xl text-primary-800 dark:text-stone-200 max-w-3xl mx-auto">
            Organizing Oak Hill Settlement homeowners to exercise our recall rights under ORS 94.640(7). 
            Only 10% of owners needed to initiate a recall vote.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section
            id="about"
            className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-stone-600 focus-within:shadow-xl focus-within:border-primary-300 dark:focus-within:border-stone-600 transition-all"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              Why We're Here
            </h3>
            <p className="text-primary-800 dark:text-stone-200 leading-relaxed mb-4">
              Oak Hill Settlement homeowners deserve accountability, transparency, and
              governance that respects Oregon law and our governing documents.
            </p>
            <p className="text-primary-800 dark:text-stone-200 leading-relaxed mb-4">
              Documented patterns of procedural defects, questionable enforcement, and
              overreach have made it clear: homeowners need to organize, educate ourselves,
              and hold leadership accountable.
            </p>
            <p className="text-primary-800 dark:text-stone-200 leading-relaxed">
              This campaign focuses on organizing the required 10% of homeowners to petition 
              for a recall vote under ORS 94.640(7)—exercising our legal right to hold 
              Board members accountable through democratic process.
            </p>
          </section>

          <section
            id="resources"
            className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-stone-600 focus-within:shadow-xl focus-within:border-primary-300 dark:focus-within:border-stone-600 transition-all"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              Take Action
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <span className="text-primary-800 dark:text-stone-200">
                  <a href="/petition#stage" className="font-bold underline hover:text-primary-900 dark:hover:text-white">Sign the petition</a> - We need 10% of owners to initiate a 
                  recall vote (ORS 94.640)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <span className="text-primary-800 dark:text-stone-200">
                  <strong>Challenge defective notices</strong> - Demand proper CC&R citations
                  and appeal rights
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <span className="text-primary-800 dark:text-stone-200">
                  <strong>Attend Board meetings</strong> - Make your voice heard and document
                  decisions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <span className="text-primary-800 dark:text-stone-200">
                  <strong>Connect with neighbors</strong> - Join our{" "}
                  <a 
                    href="https://nextdoor.com/neighborhood/oakhillfg--forest-grove--or/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-primary-900 dark:hover:text-white"
                  >
                    Nextdoor group
                  </a>{" "}
                  to organize
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-200 dark:border-stone-700">
              <a
                href="https://owners.oakhillsettlement.homes/rights#stage"
                className="text-sm text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 underline font-medium"
              >
                → Read the full Homeowner Rights Guide
              </a>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-950 rounded-xl shadow-lg p-8 text-white border border-primary-700 dark:border-stone-700"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 dark:text-stone-100">Take Action in 30 Seconds</h3>
            <p className="text-primary-50 dark:text-stone-200 mb-6 text-lg">
              Exercise your legal right under ORS 94.640(7). We need 10% of homeowners to 
              petition for a recall vote. Add your name to hold the Board accountable.
            </p>
            <a
              href="/petition#stage"
              className="inline-block bg-white dark:bg-primary-700 text-primary-700 dark:text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-900 hover:shadow-lg dark:hover:bg-primary-800 dark:hover:text-white focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-primary-400/50 focus:bg-white focus:text-primary-900 dark:focus:bg-primary-800 dark:focus:text-white transition-all shadow-md"
            >
              Sign the Petition →
            </a>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-16 text-center text-sm text-primary-700 dark:text-stone-400">
          <p className="mb-3">
            <a
              href="https://owners.oakhillsettlement.homes/#stage"
              className="underline hover:text-primary-900 dark:hover:text-stone-200 font-medium"
            >
              Visit the main community hub
            </a>{" "}
            for documents, AI assistant, and homeowner rights resources including the full recall process guide.
          </p>
          <p className="text-xs italic">
            Independent community websites • Not affiliated with HOA Board or property management
          </p>
        </div>
      </main>
    </div>
  );
}

