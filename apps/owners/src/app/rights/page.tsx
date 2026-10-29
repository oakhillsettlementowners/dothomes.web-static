import { Metadata } from "next";
import Footer from "@/components/Footer";
import StumpLogo from "@/components/StumpLogo";
import RecallBanner from "@/components/RecallBanner";
import ScrollIndicator from "@/components/ScrollIndicator";
import SuggestionForm from "@/components/SuggestionForm";
import { SHOW_CHAT, SHOW_RECALL_BANNER } from "@/lib/features";

export const metadata: Metadata = {
  title: "Owner Guide - Oak Hill Settlement",
  description: "What the CC&Rs, Bylaws and Oregon's Planned Community Act (ORS 94) say about Board authority, ARC review, fines, meetings and recalls, written by Oak Hill Settlement homeowners",
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
                Oak&nbsp;Hill&nbsp;Settlement
              </h1>
              <p className="text-sm text-primary-700 dark:text-stone-300">
                Forest&nbsp;Grove, Oregon • Owner Guide
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
                Owner Guide
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
            📖 Owner Guide
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-primary-800 dark:text-stone-200">
                What the CC&Rs, the Bylaws and Oregon's Planned Community&nbsp;Act (ORS&nbsp;94) say
                about what the Board can do, what it has to do first, and what owners can do
                about it.
            </p>
            <p className="mt-4 border-l-4 border-primary-300 dark:border-stone-600 pl-3 text-sm text-primary-700 dark:text-stone-300">
                This site is written by homeowners for homeowners. It hosts our reading of
                the documents, with section numbers so you can check it, and it isn't legal
                advice. For advice about your situation, talk to an attorney.
            </p>
          </div>
        </div>

        {/* Alert Box */}
        <div className="mb-12 bg-primary-600 dark:bg-primary-800 border-l-4 border-primary-800 dark:border-primary-500 rounded-lg p-6 max-w-[64ch] mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">
            ⚖️ Some history: VF&nbsp;Law and <em>Porras</em>
          </h3>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 max-w-none">
            VF&nbsp;Law, the firm the HOA uses today, has been collecting from Oak&nbsp;Hill homeowners since at least 2009, and one of those homeowners took it to federal court (See <em>Porras v. Vial&nbsp;Fotheringham LLP</em>, No. 3:13-cv-00699-BR, D. Or., May 2015):
          </p>
          <ul className="list-disc list-inside text-primary-50 dark:text-stone-200 mb-4 space-y-2 pl-4">
            <li>In December 2010, VF&nbsp;Law sued an Oak&nbsp;Hill homeowner in Washington&nbsp;County Circuit&nbsp;Court over unpaid assessments. The homeowner didn't respond and lost by default in May 2011, but the court still cut VF&nbsp;Law's requested attorney fees from $1,281.48 to $750.</li>
            <li>The homeowner then sued VF&nbsp;Law in federal court under the Fair Debt Collection Practices&nbsp;Act (FDCPA).</li>
            <li>The federal court held that <strong>HOA assessments and the fees and costs VF&nbsp;Law adds to them are "debts" under the FDCPA</strong>, so federal debt-collection rules apply when VF&nbsp;Law collects from Oak&nbsp;Hill owners.</li>
            <li>The court also noted there was <strong>no evidence homeowners were ever given notice</strong> of the HOA's 2009 Collection Resolution.</li>
          </ul>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-4 max-w-none">
            In 2012 the Board adopted a new Collection Resolution and a Rules Enforcement and Fine Structure Resolution (#2012-001). Both are on the <a href="/documents" className="underline">Documents</a> page.
          </p>
          <p className="text-primary-50 dark:text-stone-200 ml-0 mb-3 max-w-none">
            What that means for fines today:
          </p>
          <ul className="list-disc list-inside text-primary-50 dark:text-stone-200 mb-4 space-y-2 pl-4">
            <li>CC&R&nbsp;§4.25 allows fines only after <strong>reasonable notice</strong> and a <strong>reasonable opportunity</strong> for a hearing</li>
            <li>Under ORS&nbsp;94.630(1)(n), a fine must be based on a schedule or resolution that was <strong>delivered to each lot</strong>. You can ask the HOA to show it was delivered to yours.</li>
            <li>Owners can overrule a Board rule with 75% of the votes at a properly noticed meeting (Bylaws&nbsp;§4.7(l))</li>
          </ul>
          <p className="text-primary-50 dark:text-stone-200 ml-0 font-semibold max-w-none">
            The court did not rule on whether Oak&nbsp;Hill can fine owners for rule violations. Its lesson is that the HOA and VF&nbsp;Law must follow the rules on notice and procedure, and that federal law applies when they collect.
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
                Board resolutions and rules{" "}
                <span className="text-sm">(only where the CC&Rs, Bylaws or ORS&nbsp;94 authorize them)</span>
              </li>
              <li>
                Architectural Standards{" "}
                <span className="text-sm">(adopted by the ARC under CC&R&nbsp;§6.4 to interpret the CC&Rs; they can't add requirements the CC&Rs don't contain)</span>
              </li>
            </ol>
            <p className="mt-4 text-primary-700 dark:text-stone-300 text-sm italic max-w-none text-center">
              A rule is only as strong as the document that authorizes it. Not everything the Board sends out carries the same weight.
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
                      Enforce the CC&Rs, the Bylaws and rules adopted under them (CC&R&nbsp;§11.3)
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
                      Require ARC approval before exterior work begins (CC&R&nbsp;§6.1)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Levy assessments under the budget process (CC&R Article 10)
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
                      94.630(1)(n); CC&R&nbsp;§4.25)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Impose a sanction without the notice and hearing steps in Bylaws&nbsp;§4.15,
                      or refuse an owner's appeal of an ARC decision to the Board (CC&R&nbsp;§6.8)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Require ARC approval for like-for-like repairs, or for repainting in your
                      current color or a pre-approved color (CC&R&nbsp;§4.2; 2014 Architectural
                      Standard, items 9–10). Other color changes need approval (§4.3(e)).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">•</span>
                    <span className="text-primary-800 dark:text-stone-200">
                      Use its discretion arbitrarily or in bad faith. Oregon courts review ARC
                      decisions for good faith (<em>Santoro v. Eagle&nbsp;Crest</em>, 2022), and
                      treating similar projects differently can be evidence of bad faith.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ARC Timeline Rights */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              ⏱️ ARC Timeline Requirements (CC&R&nbsp;§6.5)
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
                require ARC approval (CC&R&nbsp;§4.2). Neither does repainting in one of the
                Sherwin-Williams colors pre-approved by the 2014 Architectural Standard, as long as
                the garage door matches the house. Other color changes need approval (CC&R&nbsp;§4.3(e)).
              </p>
            </div>
          </section>

          {/* What an ARC request does and doesn't do */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              📝 What an ARC Request Does, and Doesn't Do
            </h3>
            <div className="space-y-4 text-primary-800 dark:text-stone-200">
              <p className="text-sm">
                CC&R&nbsp;§6.1 is broad: no improvement may be "commenced, erected, placed, or
                altered" on a lot until plans are submitted and approved. The exceptions are the
                ones the documents themselves make: maintenance and like-for-like repairs
                (§4.2; 2014 Architectural Standard, item 10) and repainting in your current
                color or a pre-approved one (item 9).
              </p>

              <div className="bg-primary-50 dark:bg-primary-950/50 border-l-4 border-primary-600 dark:border-primary-400 p-4 rounded">
                <p className="font-semibold mb-2">Asking doesn't change the rules.</p>
                <p className="text-sm">
                  Submitting a request for work the documents already allow doesn't create a
                  new requirement, and it doesn't waive anything. Whether approval was required
                  is decided by the CC&Rs, not by the application form.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl flex-shrink-0">⚖️</span>
                  <div>
                    <p className="font-semibold">A denial needs a finding</p>
                    <p className="text-sm mt-1">
                      §6.6 lets the ARC withhold consent "if the ARC finds" the work would be
                      inappropriate for the particular lot or incompatible with its design
                      standards, and §6.3 says the ARC decides only by a written instrument
                      showing which members consented. If you're denied, ask for both.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl flex-shrink-0">🗓️</span>
                  <div>
                    <p className="font-semibold">The deadlines run both ways</p>
                    <p className="text-sm mt-1">
                      The ARC has 20 working days to decide, and a request with no written
                      decision after 60 days is deemed approved (§6.5). The Board has 15 days
                      to decide an appeal (§6.8). Keep dated copies of everything.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary-600 dark:text-primary-400 text-2xl flex-shrink-0">📋</span>
                  <div>
                    <p className="font-semibold">Appeal in writing within 10 days</p>
                    <p className="text-sm mt-1">
                      An owner adversely affected by an ARC decision may appeal to the Board.
                      The appeal has to be in writing, within 10 days, and state specific
                      objections or mitigating circumstances (§6.8). Miss the window and the
                      ARC's decision stands.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm italic bg-primary-50/50 dark:bg-stone-900/50 p-3 rounded border border-primary-200 dark:border-stone-700">
                <strong>Bottom line:</strong> filing a request doesn't cost you anything under
                the documents. What matters is what the CC&Rs actually require for your
                project, and whether the ARC followed §§6.3, 6.5 and 6.6 in answering.
              </p>
            </div>
          </section>

          {/* Board Recall Rights */}
          <section className="bg-primary-100 dark:bg-primary-950/30 border border-primary-300 dark:border-stone-700 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              🗳️ Removing Directors (ORS&nbsp;94.640(6), Bylaws&nbsp;§4.6)
            </h3>
            <div className="space-y-3 text-primary-800 dark:text-stone-200">
              <p className="font-semibold text-lg">
                Owners can remove directors. The numbers for Oak&nbsp;Hill's 194 lots:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span><strong>30% of owners (59 lots)</strong> can require the Board to call a special meeting (Bylaws&nbsp;§3.4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>If the Board doesn't send notice within 30 days, an owner who signed the request can call the meeting (ORS&nbsp;94.650(3))</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Quorum is 20% (39 lots), present in person or by proxy (Bylaws&nbsp;§3.6)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Removal takes a majority of <strong>all</strong> votes, <strong>98 of 194</strong>, cast in person, by absentee ballot, or by proxy (Bylaws&nbsp;§3.10, §4.6)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>Removal must be on the meeting notice, each director gets a chance to be heard, and each is voted on separately (ORS&nbsp;94.640(6)(b))</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-xl">•</span>
                  <span>A removed director serves until owners elect a replacement (ORS&nbsp;94.640(6)(c), (7))</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-primary-700 dark:text-stone-400">
                These numbers come from the Bylaws. Oregon law lets the Bylaws set them within limits: the share of owners needed to call a meeting must be between 10% and 50% (ORS&nbsp;94.650(2)(a)), and the quorum can't go below 20% (ORS&nbsp;94.655).
              </p>
            </div>
          </section>

          {/* Procedurally Defective Notices */}
          <section className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
              📬 What to Check in a Violation Notice
            </h3>
            <p className="text-primary-800 dark:text-stone-200 mb-4">
              Before you respond, it's worth asking questions if the notice:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 mr-2">⚠</span>
                <span className="text-primary-800 dark:text-stone-200">
                  Doesn't state the proposed sanction, or doesn't say you have 14 days to
                  request a hearing (both required by Bylaws&nbsp;§4.15(a))
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
                  Threatens fines under Resolution&nbsp;#2012-001{" "}
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

          {/* Quick reference */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-950 rounded-xl shadow-lg p-8 text-white border border-primary-700 dark:border-stone-700">
            <h3 className="text-3xl font-bold mb-4 dark:text-stone-100">
              📌 Quick Reference
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-primary-50 dark:text-stone-200">
              <div>
                <p className="font-semibold mb-2">Under the governing documents, owners can:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Request a hearing before any fine (CC&R&nbsp;§4.25; Bylaws&nbsp;§4.15)</li>
                  <li>• Appeal an ARC decision to the Board within 10 days (CC&R&nbsp;§6.8)</li>
                  <li>• Treat a request as approved after 60 days with no written decision (CC&R&nbsp;§6.5)</li>
                  <li>• Call a special meeting with 30% of owners (Bylaws&nbsp;§3.4)</li>
                  <li>• Remove a director with 98 of 194 votes (Bylaws&nbsp;§4.6)</li>
                  <li>• Overrule a Board rule with 75% of the votes present at a meeting whose notice listed it (Bylaws&nbsp;§4.7(l))</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Under Oregon law, owners can:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Attend Board meetings (ORS&nbsp;94.644(1))</li>
                  <li>• Inspect and copy Association records (ORS&nbsp;94.670(9); Bylaws&nbsp;§6.4)</li>
                  <li>• Get a statement of their account within 10 business days (ORS&nbsp;94.670(8))</li>
                  <li>• Ask for proof that a fine resolution was delivered to their lot (ORS&nbsp;94.630(1)(n))</li>
                  <li>• Expect a written offer of mediation before the HOA sues them, except to collect regular assessments (ORS&nbsp;94.630(4))</li>
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
                  Ask what the governing documents and ORS&nbsp;94 say. AI can make mistakes, so check the section it cites.
                </p>
              </a>
            )}
          </div>

          {/* Corrections */}
          <SuggestionForm />
        </div>

        <Footer />
      </main>
    </div>
  );
}

