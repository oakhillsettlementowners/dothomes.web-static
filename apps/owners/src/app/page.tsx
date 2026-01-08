import ARCAssistant from '@/components/ARCAssistant';
import Footer from '@/components/Footer';
import StumpLogo from '@/components/StumpLogo';
import RecallBanner from '@/components/RecallBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black">
      {/* Header - Book cover style on mobile */}
      <header className="min-h-screen md:min-h-0 flex flex-col justify-between md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm md:sticky md:top-0 z-50">
        <RecallBanner variant="desktop" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
          <div className="flex items-center gap-3">
            <StumpLogo className="w-12 h-12 md:w-10 md:h-10 text-primary-700 dark:text-primary-400" />
            <div>
              <h1 className="text-3xl md:text-2xl font-bold text-primary-900 dark:text-stone-100">
                <span className="block text-sm font-normal text-primary-700 dark:text-stone-300">Homeowners of</span>
                Oak Hill Settlement
              </h1>
              <p className="text-sm text-primary-700 dark:text-stone-300">
                Forest Grove, Oregon • Community Hub
              </p>
            </div>
          </div>
        </div>
        <nav className="pl-[4.75rem] pr-4 sm:px-6 lg:px-8 pb-8 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="text-lg md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/rights#stage"
                className="text-lg md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Your Rights
              </a>
            </li>
            <li>
              <a
                href="/documents#stage"
                className="text-lg md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Documents
              </a>
            </li>
            <li>
              <a
                href="/chat#stage"
                className="text-lg md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Ask AI
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="stage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-primary-900 dark:text-white mb-4">
            Oak Hill Settlement<br />Homeowner's Community Portal
          </h2>
          <p className="text-xl text-primary-800 dark:text-stone-200 max-w-3xl mx-auto">
            An independent community hub for Oak Hill Settlement homeowners in Forest&nbsp;Grove, Oregon.
            By homeowners, for homeowners.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <section
            id="about"
            className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-stone-600 focus-within:shadow-xl focus-within:border-primary-300 dark:focus-within:border-stone-600 transition-all"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              About This Hub
            </h3>
            <p className="text-primary-800 dark:text-stone-200 leading-relaxed mb-4">
              This is an independent, community-driven platform created by Oak Hill Settlement
              homeowners. We're not affiliated with the HOA Board of Directors or property
              management company.
            </p>
            <p className="text-primary-800 dark:text-stone-200 leading-relaxed">
              Our mission: empower homeowners with information, foster transparency, and
              strengthen our community through shared knowledge and open communication.
            </p>
          </section>

          <section
            id="community"
            className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-stone-600 focus-within:shadow-xl focus-within:border-primary-300 dark:focus-within:border-stone-600 transition-all"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              Community Resources
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a 
                  href="/rights"
                  className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium"
                >
                  Summary of your rights
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a 
                  href="/documents"
                  className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium"
                >
                  Independent document archive
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a 
                  href="/chat"
                  className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium"
                >
                  AI chat assistant trained on Oregon law and governing documents
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a 
                  href="https://nextdoor.com/neighborhood/oakhillfg--forest-grove--or/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium"
                >
                  Community discussion on Nextdoor
                </a>
              </li>
            </ul>
            <a
              href="https://nextdoor.com/neighborhood/oakhillfg--forest-grove--or/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            >
              Join Nextdoor Group →
            </a>
          </section>

          <section
            id="resources"
            className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-primary-300 dark:hover:border-stone-600 focus-within:shadow-xl focus-within:border-primary-300 dark:focus-within:border-stone-600 transition-all"
          >
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              Homeowner Resources
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a href="/rights" className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium">
                  Know Your Rights under ORS 94
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a href="/documents" className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium">
                  HOA Bylaws and CC&Rs
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a href="#arc-timeline-assistant" className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium">
                  ARC Timeline Assistant
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                <a href="/chat" className="text-primary-800 dark:text-stone-200 hover:text-primary-900 dark:hover:text-white underline font-medium">
                  Ask AI about HOA law & procedures
                </a>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              <a
                href="/rights"
                className="inline-block text-sm bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 border-2 border-primary-600 hover:border-primary-700 dark:border-primary-700 dark:hover:border-primary-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
              >
                Know Your Rights
              </a>
              <a
                href="/documents"
                className="inline-block text-sm bg-white dark:bg-stone-900 border-2 border-primary-600 dark:border-stone-600 hover:bg-primary-50 dark:hover:bg-stone-800 text-primary-700 dark:text-primary-300 font-semibold px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
              >
                View Documents
              </a>
            </div>
          </section>
        </div>

        {/* ARC Tools Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ARC Timeline Assistant */}
          <ARCAssistant />

          {/* ARC Resources */}
          <div className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              📋 ARC Resources
            </h3>
            <p className="text-primary-800 dark:text-stone-200 mb-6 text-sm">
              Tools and guidance for your Architectural Review Committee submission
            </p>

            <div className="space-y-4">
              {/* Download ARC Request Form */}
              <div className="bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-stone-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                  <span>📄</span>
                  <span>ARC Request Form</span>
                </h4>
                <p className="text-sm text-primary-800 dark:text-stone-200 mb-2">
                  Download the official ARC request form to submit your architectural review application.
                </p>
                <a
                  href="/documents/ARC/(Fillable%20Form)ARC%20Application%20Revised%20%20page%201.pdf"
                  download
                  aria-label="Download ARC Request PDF form"
                  className="text-sm text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Download ARC PDF Form</span>
                </a>
              </div>

              {/* Ask AI Assistant */}
              <div className="bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-stone-700 rounded-lg p-4">
                <h4 className="font-semibold text-primary-900 dark:text-stone-100 mb-2 flex items-center gap-2">
                  <span>🤖</span>
                  <span>Need Help?</span>
                </h4>
                <p className="text-sm text-primary-800 dark:text-stone-200 mb-3">
                  Ask our AI assistant about ARC requirements, CC&R guidelines, and submission procedures
                </p>
                <a
                  href="/chat"
                  className="inline-block w-full text-center bg-white dark:bg-stone-900 border-2 border-primary-600 dark:border-stone-600 hover:bg-primary-50 dark:hover:bg-stone-800 text-primary-700 dark:text-primary-300 font-semibold px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                >
                  Ask AI Assistant
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-950 rounded-xl shadow-lg p-8 text-white border border-primary-700 dark:border-stone-700"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 dark:text-stone-100">Join the Community</h3>
            <p className="text-primary-50 dark:text-stone-200 mb-6 text-lg">
              Connect with your neighbors, share information, and stay informed about what's happening in Oak Hill Settlement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://nextdoor.com/neighborhood/oakhillfg--forest-grove--or/"
                target="_oakhillnextdoor"
                rel="noopener noreferrer"
                className="inline-block bg-white dark:bg-primary-700 text-primary-700 dark:text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-900 hover:shadow-lg dark:hover:bg-primary-800 dark:hover:text-white focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-primary-400/50 focus:bg-white focus:text-primary-900 dark:focus:bg-primary-800 dark:focus:text-white transition-all shadow-md"
              >
                Join Oak Hill on Nextdoor
              </a>
            </div>
            
            <p className="text-primary-100 dark:text-stone-300 text-sm">
              Join neighbors on Nextdoor to discuss community issues, organize events, and stay connected.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

