import { Metadata } from "next";
import Footer from "@/components/Footer";
import StumpLogo from "@/components/StumpLogo";
import RecallBanner from "@/components/RecallBanner";
import ScrollIndicator from "@/components/ScrollIndicator";
import { SHOW_CHAT, SHOW_RECALL_BANNER } from "@/lib/features";

export const metadata: Metadata = {
  title: "Know Your Rights - Oak Hill Settlement",
  description: "Homeowner rights, Board obligations, and Oregon law protections for Oak Hill Settlement residents",
};

export default function RightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black">
      {/* Header - Book cover style on mobile */}
      <header className={`${SHOW_RECALL_BANNER ? 'min-h-[calc(100svh-41px)]' : 'min-h-[100svh]'} md:min-h-0 flex flex-col md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm [@media(min-width:768px)_and_(min-height:500px)]:sticky [@media(min-width:768px)_and_(min-height:500px)]:top-0 z-50`}>
        <RecallBanner variant="desktop" />
        <div className="md:flex-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
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
        <nav className="mt-auto md:mt-0 md:flex-none pl-8 md:pl-0 pr-4 sm:px-6 lg:px-8 pb-16 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a
                href="/rights#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Your Rights
              </a>
            </li>
            <li>
              <a
                href="/documents#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                Documents
              </a>
            </li>
            {SHOW_CHAT && (
              <li>
                <a
                  href="/chat#stage"
                  className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                >
                  <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  Ask AI
                </a>
              </li>
            )}
          </ul>
        </nav>
        <ScrollIndicator />
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
            <p className="mt-4 border-l-4 border-primary-300 dark:border-stone-600 pl-3 text-sm text-primary-700 dark:text-stone-300">
                This site is run by homeowners, for homeowners. It's general information, not
                legal advice. For advice about your situation, talk to an attorney.
            </p>
          </div>
        </div>

        {/* Alert Box */}
        <div className="mb-12 bg-primary-600 dark:bg-primary-800 border-l-4 border-primary-800 dark:border-primary-500 rounded-lg p-6 max-w-[64ch] mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">
            ⚖️ Critical Historical Context
          </h3>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 max-w-none">
            VF Law, the firm the HOA uses today, has been collecting from Oak Hill homeowners since at least 2009, and one of those homeowners took it to federal court (See <em>Porras v. Vial Fotheringham LLP</em>, No. 3:13-cv-00699-BR, D. Or., May 2015):
          </p>
          <ul className="list-disc list-inside text-primary-50 dark:text-stone-200 mb-4 space-y-2 pl-4">
            <li>In December 2010, VF Law sued an Oak Hill homeowner in Washington County Circuit Court over unpaid assessments. The homeowner didn't respond and lost by default in May 2011, but the court still cut VF Law's requested attorney fees from $1,281.48 to $750.</li>
            <li>The homeowner then sued VF Law in federal court under the Fair Debt Collection Practices Act (FDCPA).</li>
            <li>The federal court held that <strong>HOA assessments and the fees and costs VF Law adds to them are "debts" under the FDCPA</strong>, so federal debt-collection rules apply when VF Law collects from Oak Hill owners.</li>
            <li>The court also noted there was <strong>no evidence homeowners were ever given notice</strong> of the HOA's 2009 Collection Resolution.</li>
          </ul>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 max-w-none">
            In 2012 the Board adopted a new Collection Resolution and a Rules Enforcement and Fine Structure Resolution (#2012-001). Both are on the <a href="/documents" className="underline">Documents</a> page.
          </p>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-3 max-w-none">
            What that means for fines today:
          </p>
          <ul className="list-disc list-inside text-primary-50 dark:text-stone-200 mb-4 space-y-2 pl-4">
            <li>CC&R §4.25 allows fines only after reasonable notice and a reasonable opportunity for a hearing</li>
            <li>Under ORS 94.630(1)(n), a fine must be based on a schedule or resolution that was <strong>delivered to each lot</strong>. You can ask the HOA to show it was delivered to yours.</li>
            <li>Owners can overrule a Board rule with 75% of the votes at a properly noticed meeting (Bylaws §4.7(l))</li>
          </ul>
          <p className="text-primary-50 dark:text-stone-200 ml-0 font-semibold max-w-none">
            The court did not rule on whether Oak Hill can fine owners for rule violations. Its lesson is that the HOA and VF Law must follow the rules on notice and procedure, and that federal law applies when they collect.
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
                      Fine you without procedurally effective written notice and a chance to be
                      heard, or under a fine schedule that wasn't delivered to your lot (ORS
                      94.630(1)(n); CC&R §4.25)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Fine you without a hearing (ORS 94.630(1)(n); Bylaws §4.15), or refuse a
                      Board appeal of an ARC decision (CC&R §6.8)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Require ARC approval for like-for-like repairs, or for repainting in your
                      current color or a pre-approved color (CC&R §4.2; 2014 Architectural
                      Standard, items 9–10). Other color changes need approval (§4.3(e)).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Use its discretion arbitrarily or in bad faith (<em>Santoro v. Eagle Crest</em>,
                      2022). Treating similar projects differently can be evidence of that.
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
                Routine maintenance (repairs, touch-ups, repainting in your current color) does NOT
                require ARC approval (CC&R §4.2). Neither does repainting in one of the
                Sherwin-Williams colors pre-approved by the 2014 Architectural Standard, as long as
                the garage door matches the house. Other color changes need approval (CC&R §4.3(e)).
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
              🗳️ Board Recall Rights (ORS 94.640(6), Bylaws §4.6)
            </h3>
            <div className="space-y-3 text-primary-800 dark:text-stone-200">
              <p className="font-semibold text-lg">
                You have the power to remove Board members:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span><strong>30% of owners (59 lots)</strong> can require the Board to call a special meeting (Bylaws §3.4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>If the Board doesn't send notice within 30 days, an owner who signed the request can call the meeting (ORS 94.650(3))</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Quorum is 20% (39 lots), present in person or by proxy (Bylaws §3.6)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Removal takes a majority of <strong>all</strong> votes, <strong>98 of 194</strong>, cast in person, by absentee ballot, or by proxy (Bylaws §3.10, §4.6)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Removal must be on the meeting notice, each director gets a chance to be heard, and each is voted on separately (ORS 94.640(6)(b))</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>A removed director serves until owners elect a replacement (ORS 94.640(6)(c), (7))</span>
                </li>
              </ul>
              <p className="mt-4 text-sm italic">
                This check-and-balance exists precisely to prevent abuse of HOA authority.
              </p>
              <p className="mt-4 text-xs text-primary-700 dark:text-stone-400">
                Note: for recalls, Oregon law lets the Bylaws set the numbers, within limits. For example, the share of owners needed to call a meeting must be between 10% and 50% (ORS 94.650(2)(a)).
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
                  Requires ARC approval for like-for-like repairs, or for repainting in your
                  current color or a pre-approved color
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Threatens fines under Resolution #2012-001{" "}
                  <span className="text-sm italic">(without stating the fine, or showing the resolution was delivered to your lot)</span>
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
              href="/documents#stage"
              className="block bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-primary-400 dark:hover:border-stone-600 transition-all"
            >
              <h4 className="text-xl font-bold text-primary-900 dark:text-stone-100 mb-2">
                📄 Read the Documents
              </h4>
              <p className="text-primary-800 dark:text-stone-200 text-sm">
                Access CC&Rs, Bylaws, and all governing documents
              </p>
            </a>

            {SHOW_CHAT && (
              <a
                href="/chat#stage"
                className="block bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-primary-400 dark:hover:border-stone-600 transition-all"
              >
                <h4 className="text-xl font-bold text-primary-900 dark:text-stone-100 mb-2">
                  🤖 Ask the AI Assistant
                </h4>
                <p className="text-primary-800 dark:text-stone-200 text-sm">
                  Ask about your rights and Oregon HOA law. AI can make mistakes, so check important info.
                </p>
              </a>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

