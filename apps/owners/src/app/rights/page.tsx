import { Metadata } from "next";
import Footer from "@/components/Footer";
import StumpLogo from "@/components/StumpLogo";
import RecallBanner from "@/components/RecallBanner";

export const metadata: Metadata = {
  title: "Know Your Rights - Oak Hill Settlement",
  description: "Homeowner rights, Board obligations, and Oregon law protections for Oak Hill Settlement residents",
};

export default function RightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black">
      {/* Header - Book cover style on mobile */}
      <header className="min-h-screen md:min-h-0 flex flex-col justify-between md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm md:sticky md:top-0 z-50">
        <RecallBanner variant="desktop" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
          <a href="/#stage" className="flex items-center gap-3 group">
            <StumpLogo className="w-12 h-12 md:w-10 md:h-10 text-primary-700 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors" />
            <div>
              <h1 className="text-3xl md:text-2xl font-bold text-primary-900 dark:text-stone-100 group-hover:text-primary-700 dark:group-hover:text-stone-300 transition-colors">
                <span className="block text-sm font-normal text-primary-700 dark:text-stone-300 group-hover:text-primary-600 dark:group-hover:text-stone-400 transition-colors">Homeowners of</span>
                Oak Hill Settlement
              </h1>
              <p className="text-sm text-primary-700 dark:text-stone-300">
                Forest Grove, Oregon • Homeowner Rights
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
                Home
              </a>
            </li>
            <li>
              <a
                href="/rights#stage"
                className="text-lg md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
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
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-primary-900 dark:text-white mb-4">
            🛡 Know Your Rights
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-primary-800 dark:text-stone-200">
                A comprehensive guide to your rights, Board obligations, and the limits Oregon
                law places on HOA authority in Oak Hill Settlement.
            </p>
          </div>
        </div>

        {/* Alert Box */}
        <div className="mb-12 bg-primary-600 dark:bg-primary-800 border-l-4 border-primary-800 dark:border-primary-500 rounded-lg p-6 max-w-[64ch] mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">
            ⚖️ Critical Historical Context
          </h3>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 max-w-none">
            In 2011, a federal court looked at Oak Hill Settlement's governing documents and found something important (See <em>Mendoza v. Columbia Collectors/ VF Law</em>, D. Or., 2011):
          </p>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 pl-4 border-l-2 border-primary-400 dark:border-stone-400 max-w-none">
            <strong>Our CC&Rs did not contain a valid fining system</strong>, and the HOA's attorney at the time (VF Law—the same firm used today) <strong>violated federal law</strong> when trying to collect those fines.
          </p>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 max-w-none">
            After that ruling, the Board created a 2012 "Fine & Enforcement Declaration."
          </p>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-3 max-w-none">
            However:
          </p>
          <ul className="list-disc list-inside text-primary-50 dark:text-stone-200 mb-4 space-y-2 pl-4">
            <li>Homeowners were never given a vote on this new fining system</li>
            <li>The declaration was not adopted as a proper CCR amendment</li>
            <li>The CC&Rs themselves have never been updated to include fine authority</li>
          </ul>
          <p className="text-primary-50 dark:text-stone-200 ml-0 font-semibold max-w-none">
            Because the membership never approved this change, the 2012&nbsp;Declaration may not be legally enforceable. 
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Governance Hierarchy */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              📘 Understanding Governance Hierarchy
            </h3>
            <ol className="space-y-3 list-decimal list-inside text-primary-800 dark:text-stone-200">
              <li className="font-semibold">
                CC&Rs Declaration{" "}
                <span className="text-sm font-normal">(Highest Authority)</span>
              </li>
              <li>Bylaws</li>
              <li>
                Board-created Declarations/Resolutions{" "}
                <span className="text-sm">(only if authorized by CC&Rs & ORS 94)</span>
              </li>
              <li>
                Architectural Standards{" "}
                <span className="text-sm">(guidelines, not necessarily binding)</span>
              </li>
            </ol>
            <p className="mt-4 text-primary-700 dark:text-stone-300 text-sm italic max-w-none text-center">
              Not everything published by the board has been (or will necessarily be) legally enforceable.
            </p>
          </section>

          {/* What Board Can/Cannot Do */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-6">
              Board Authority and Limitations
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-800 dark:text-primary-400 mb-3">
                  ✔️ The Board CAN:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Enforce specific, objective CC&R requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Maintain common areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Require ARC approval for specific projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Levy assessments per budget process
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">
                  ❌ The Board CANNOT:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Invent fines not in CC&Rs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Withhold appeal rights (ORS 94.630)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Require ARC approval for routine maintenance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Apply rules inconsistently
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ARC Timeline Rights */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              ⏱️ ARC Timeline Requirements (CC&R §6.5)
            </h3>
            <div className="space-y-4 text-primary-800 dark:text-stone-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center font-bold text-primary-700 dark:text-primary-300">
                  20
                </div>
                <div>
                  <p className="font-semibold">Working Days for Written Decision</p>
                  <p className="text-sm">
                    ARC must issue written decision within 20 working days of receiving
                    complete application
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  60
                </div>
                <div>
                  <p className="font-semibold">Automatic Approval</p>
                  <p className="text-sm">
                    If no written decision within 60 days = <strong>AUTOMATIC APPROVAL</strong>
                  </p>
                </div>
              </div>

              <p className="text-sm italic mt-4 text-primary-700 dark:text-stone-300">
                Routine maintenance (painting touch-ups, repairs) does NOT require ARC
                approval at all (CC&R §4.2).
              </p>
            </div>
          </section>

          {/* ARC Requests and Your Rights */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              ✅ Important: Submitting an ARC Request Doesn't Forfeit Your Rights
            </h3>
            <div className="space-y-4 text-primary-800 dark:text-stone-200">
              <p className="font-semibold text-lg">
                If you submit an ARC request out of caution or good faith:
              </p>
              
              <div className="bg-primary-50 dark:bg-primary-950/50 border-l-4 border-primary-600 dark:border-primary-400 p-4 rounded">
                <p className="font-semibold mb-2">You do NOT give up your rights by asking.</p>
                <p className="text-sm">
                  Submitting an ARC request for work that doesn't actually require approval 
                  under the CC&Rs is essentially just "CC'ing the board" on your project. 
                  The act of requesting permission does not create a requirement for permission 
                  where none exists in the governing documents.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl flex-shrink-0">⚖️</span>
                  <div>
                    <p className="font-semibold">The Board Must Rely on CC&Rs</p>
                    <p className="text-sm mt-1">
                      If the board disapproves your request, they can only <em>enforce</em> that 
                      disapproval if the CC&Rs actually require approval for your specific work. 
                      A board opinion does not override the CC&Rs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl flex-shrink-0">🛡️</span>
                  <div>
                    <p className="font-semibold">No Fines Without CC&R Authority</p>
                    <p className="text-sm mt-1">
                      The board cannot levy fines or take enforcement action against you 
                      for proceeding with work that the CC&Rs do not require approval for—even 
                      if you submitted (and they denied) an ARC request for it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl flex-shrink-0">📋</span>
                  <div>
                    <p className="font-semibold">When in Doubt, Document</p>
                    <p className="text-sm mt-1">
                      Submitting an ARC request can create a helpful paper trail. If the board 
                      denies your request, ask them to cite the specific CC&R section that 
                      requires approval. If no such section exists, you may proceed.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm italic bg-primary-50/50 dark:bg-stone-900/50 p-3 rounded border border-primary-200 dark:border-stone-700">
                <strong>Bottom line:</strong> Being cautious and courteous by submitting an ARC 
                request does not mean you've agreed to accept an improper denial. Your rights 
                under the CC&Rs remain intact.
              </p>
            </div>
          </section>

          {/* Board Recall Rights */}
          <section className="bg-primary-100 dark:bg-primary-950/30 border border-primary-300 dark:border-stone-700 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              🗳️ Board Recall Rights (ORS 94.640(7))
            </h3>
            <div className="space-y-3 text-primary-800 dark:text-stone-200">
              <p className="font-semibold text-lg">
                You have the power to remove Board members:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Only <strong>10% of owners</strong> needed to petition for removal vote</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>
                    Recall meeting has <strong>NO QUORUM REQUIREMENT</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Removed director's seat becomes immediately vacant</span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic">
                This check-and-balance exists precisely to prevent abuse of HOA authority.
              </p>
              <p className="mt-4 text-xs text-primary-700 dark:text-stone-400">
                Note: ORS 94 is Oregon state law and overrides any conflicting provisions in the CC&Rs or Bylaws.
              </p>
            </div>
          </section>

          {/* Procedurally Defective Notices */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              📬 Spotting Procedurally Defective Notices
            </h3>
            <p className="text-primary-800 dark:text-stone-200 mb-4">
              A notice may be defective if it:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Fails to mention your right to appeal (required by Bylaws §4.15(a)(iii))
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Cites incorrect or non-existent CC&R clauses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Describes property conditions inaccurately
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Requires ARC approval for routine maintenance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  References the 2012 "Fine & Enforcement Declaration" for fines{" "}
                  <span className="text-sm italic">(unvoted, potentially unenforceable)</span>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Contains requirements not found in governing documents (e.g., "licensed and
                  insured painters")
                </span>
              </li>
            </ul>
          </section>

          {/* Your Rights Summary */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-950 rounded-xl shadow-lg p-8 text-white border border-primary-700 dark:border-stone-700">
            <h3 className="text-3xl font-bold mb-4 dark:text-stone-100">
              🛡️ Your Rights Summary
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-primary-50 dark:text-stone-200">
              <div>
                <p className="font-semibold mb-2">You have the right to:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Timely, accurate enforcement</li>
                  <li>• Appeal any decision</li>
                  <li>• Be heard at hearings</li>
                  <li>• Access governing documents</li>
                  <li>• Challenge defective notices</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">You also have the right to:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Organize with neighbors</li>
                  <li>• Petition for Board recall</li>
                  <li>• Attend Board meetings</li>
                  <li>• Demand proper CCR citations</li>
                  <li>• Question VF Law's authority</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/documents"
              className="block bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-primary-400 dark:hover:border-stone-600 transition-all"
            >
              <h4 className="text-xl font-bold text-primary-900 dark:text-stone-100 mb-2">
                📄 Read the Documents
              </h4>
              <p className="text-primary-800 dark:text-stone-200 text-sm">
                Access CC&Rs, Bylaws, and all governing documents
              </p>
            </a>

            <a
              href="/chat"
              className="block bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-primary-400 dark:hover:border-stone-600 transition-all"
            >
              <h4 className="text-xl font-bold text-primary-900 dark:text-stone-100 mb-2">
                🤖 Ask the AI Assistant
              </h4>
              <p className="text-primary-800 dark:text-stone-200 text-sm">
                Get answers about your rights and Oregon HOA law
              </p>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

