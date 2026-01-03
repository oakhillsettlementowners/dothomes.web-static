import StumpLogo from '@/components/StumpLogo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black">
      {/* Header */}
      <header className="border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StumpLogo className="w-10 h-10 text-primary-700 dark:text-primary-400" />
              <div>
                <h1 className="text-2xl font-bold text-primary-900 dark:text-stone-100">
                  <span className="block text-sm font-normal text-primary-700 dark:text-stone-300">Homeowners of</span>
                  Oak Hill Settlement
                </h1>
                <p className="text-sm text-primary-700 dark:text-stone-300">
                  Forest Grove, Oregon • Homeowner Resources
                </p>
              </div>
            </div>
            <nav className="flex gap-6">
              <a
                href="#about"
                className="text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                About
              </a>
              <a
                href="#resources"
                className="text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                  <strong>Sign the petition</strong> - We need 10% of owners to initiate a 
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
                href="https://owners.oakhillsettlement.homes/rights"
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
            <h3 className="text-3xl font-bold mb-4 dark:text-stone-100">Sign the Recall Petition</h3>
            <p className="text-primary-50 dark:text-stone-200 mb-6 text-lg">
              Exercise your legal right under ORS 94.640(7). We need 10% of homeowners to 
              petition for a recall vote. Add your name to hold the Board accountable.
            </p>
            <a
              href="mailto:recall@oakhillsettlement.homes"
              className="inline-block bg-white dark:bg-primary-700 text-primary-700 dark:text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-900 hover:shadow-lg dark:hover:bg-primary-800 dark:hover:text-white focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-primary-400/50 focus:bg-white focus:text-primary-900 dark:focus:bg-primary-800 dark:focus:text-white transition-all shadow-md"
            >
              Join the Recall Campaign
            </a>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-16 text-center text-sm text-primary-700 dark:text-stone-400">
          <p className="mb-3">
            <a
              href="https://owners.oakhillsettlement.homes"
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

