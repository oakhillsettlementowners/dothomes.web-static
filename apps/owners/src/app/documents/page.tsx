import { Metadata } from "next";
import Footer from "@/components/Footer";
import StumpLogo from "@/components/StumpLogo";
import RecallBanner from "@/components/RecallBanner";

export const metadata: Metadata = {
  title: "HOA Documents - Oak Hill Settlement",
  description: "Access HOA governing documents, CC&Rs, bylaws, and meeting minutes",
};

interface DocumentFile {
  title: string;
  description: string;
  filename: string;
  date: string;
  size: string;
  external?: boolean;
  target?: string;
  url?: string;
}

interface DocumentCategory {
  category: string;
  files: DocumentFile[];
}

const documents: DocumentCategory[] = [
  {
    category: "Governing Documents",
    files: [
      {
        title: "CC&Rs (Covenants, Conditions & Restrictions)",
        description: "The primary governing document for Oak Hill Settlement",
        filename: "governing_docs/CCRs.pdf",
        date: "Current Version",
        size: "PDF",
      },
      {
        title: "HOA Bylaws",
        description: "Rules and procedures for HOA board governance",
        filename: "governing_docs/Bylaws.pdf",
        date: "Current Version",
        size: "PDF",
      },
      {
        title: "Architectural Standards",
        description: "Standards for exterior modifications and improvements",
        filename: "ARC/OHS Architectural Standard.pdf",
        date: "Architectural Review Committee",
        size: "PDF",
      },
    ],
  },
  {
    category: "Resolutions & Policies",
    files: [
      {
        title: "Fine & Enforcement Policy",
        description: "HOA enforcement procedures and fine schedule",
        filename: "resolutions/Signed Fine & Enforcement 11-12-12.pdf",
        date: "Signed: November 12, 2012",
        size: "PDF",
      },
      {
        title: "Collection Resolution",
        description: "Procedures for collecting HOA dues and assessments",
        filename: "resolutions/Signed Collection Resolution 2012.pdf",
        date: "Signed: 2012",
        size: "PDF",
      },
    ],
  },
  {
    category: "Annual Budgets",
    files: [
      {
        title: "2025 Annual Budget",
        description: "Approved budget for fiscal year 2025",
        filename: "annual_budgets/Oak Hill Settlement - 2025 Budget.pdf",
        date: "2025",
        size: "PDF",
      },
      {
        title: "2024 Annual Budget",
        description: "Approved budget for fiscal year 2024",
        filename: "annual_budgets/Oak Hill Settlement - 2024 Budget.pdf",
        date: "2024",
        size: "PDF",
      },
      {
        title: "2023 Annual Budget",
        description: "Approved budget for fiscal year 2023",
        filename: "annual_budgets/Oak Hill Settlement - 2023 Budget.pdf",
        date: "2023",
        size: "PDF",
      },
    ],
  },
  {
    category: "Financial Statements",
    files: [
      {
        title: "December 2021 - Year End",
        description: "Year-end financial statement for 2021",
        filename: "balance_sheets/December - 2021 Year End.pdf",
        date: "December 2021",
        size: "PDF",
      },
      {
        title: "December 2020 Balance Sheet",
        description: "Year-end financial statement for 2020",
        filename: "balance_sheets/December Short 2020.pdf",
        date: "December 2020",
        size: "PDF",
      },
      {
        title: "Recent Balance Sheet",
        description: "Current financial position statement",
        filename: "balance_sheets/Dec Short.pdf",
        date: "Recent",
        size: "PDF",
      },
    ],
  },
  {
    category: "Oregon Law Reference",
    files: [
      {
        title: "ORS Chapter 94 - Planned Communities",
        description: "Oregon state law governing HOAs and planned communities",
        filename: "ors-94.pdf",
        date: "2024 Edition",
        size: "1.8 MB",
        external: true,
        target: "_ors94",
        url: "https://www.oregonlegislature.gov/bills_laws/ors/ors094.html",
      },
    ],
  },
];

export default function DocumentsPage() {
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
                Forest Grove, Oregon • Community Documents
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
                className="text-lg md:text-base text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Your Rights
              </a>
            </li>
            <li>
              <a
                href="/documents#stage"
                className="text-lg md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
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
            Community Documents
          </h2>
          <p className="text-lg text-primary-800 dark:text-stone-200 max-w-3xl mb-3">
            Independent archive of Oak Hill Settlement governing documents, meeting minutes,
            and Oregon state law references. Documents mirror what's available in the Frontsteps
            homeowner dashboard, with the addition of OCR processing for accessibility.
          </p>
          <p className="text-sm text-primary-700 dark:text-stone-400 italic max-w-[64ch]">
            Note: This is a community-maintained archive.<br />All PDFs have been processed with OCR
            (Optical Character Recognition) to enable text search and screen reader accessibility.<br />
            For official records, contact the property management company or HOA board directly.
          </p>
        </div>

        {/* Document Categories */}
        <div className="space-y-12">
          {documents.map((category) => (
            <section key={category.category}>
              <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-6 pb-2 border-b-2 border-primary-300 dark:border-stone-700">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.files.map((file) => (
                  <a
                    key={file.filename}
                    href={file.external ? file.url : `/documents/${file.filename}`}
                    target={file.external ? (file.target || "_blank") : undefined}
                    rel={file.external ? "noopener noreferrer" : undefined}
                    className="block bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-md p-6 hover:shadow-xl hover:border-primary-400 dark:hover:border-stone-600 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-stone-700 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-primary-900 dark:text-stone-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors mb-1">
                          {file.title}
                          {file.external && (
                            <svg
                              className="inline-block w-4 h-4 ml-1 mb-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </h4>
                        <p className="text-sm text-primary-700 dark:text-stone-400">
                          {file.date}
                        </p>
                      </div>
                      <svg
                        className="w-8 h-8 text-primary-600 dark:text-primary-500 flex-shrink-0 ml-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                        <path d="M14 2v6h6" />
                        <path d="M12 18v-6" />
                        <path d="M9 15l3 3 3-3" />
                      </svg>
                    </div>
                    <p className="text-sm text-primary-800 dark:text-stone-200 mb-3">
                      {file.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-primary-600 dark:text-primary-500">
                      <span className="font-mono bg-primary-50 dark:bg-primary-950/50 px-2 py-1 rounded">
                        PDF
                      </span>
                      <span>{file.size}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ARC Request Form Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
            📋 ARC Request Form (Fillable PDF)
          </h3>
          <p className="text-primary-800 dark:text-stone-200 mb-4">
            Preview and download the fillable Architectural Review Committee application form.
            You can fill this out digitally or print and complete by hand.
          </p>
          <div className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="/documents/ARC/(Fillable%20Form)ARC%20Application%20Revised%20%20page%201.pdf"
              className="w-full h-[800px]"
              title="ARC Request Form - Fillable PDF"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="/documents/ARC/(Fillable%20Form)ARC%20Application%20Revised%20%20page%201.pdf"
              download
              className="inline-block bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            >
              Download Fillable PDF
            </a>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="mt-16 bg-primary-100 dark:bg-primary-950/30 border border-primary-300 dark:border-stone-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-primary-900 dark:text-stone-100 mb-2">
            ♿ Accessibility & Contributions
          </h3>
          <p className="text-primary-800 dark:text-stone-200 mb-2 max-w-4xl">
            All documents are OCR-enabled and screen reader accessible. If you need
            assistance accessing any document or have documents to contribute to the archive,
            please{" "}
            <a
              href="mailto:community@oakhillsettlement.homes"
              className="underline hover:text-primary-900 dark:hover:text-white font-semibold"
            >
              contact us
            </a>
            .
          </p>
          <p className="text-sm text-primary-700 dark:text-stone-300 italic mt-3">
            This is a community effort. We welcome contributions from all homeowners.
          </p>
        </div>

        {/* AI Chat CTA */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-900 dark:to-primary-950 rounded-xl shadow-lg p-8 text-white border border-primary-700 dark:border-stone-700">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 dark:text-stone-100">
              Need Help Understanding These Documents?
            </h3>
            <p className="text-primary-50 dark:text-stone-200 mb-6">
              Our community AI assistant is trained on Oregon HOA law (ORS 94) and Oak Hill
              Settlement governing documents. Ask questions in plain English and get informed!
            </p>
            <a
              href="/chat#stage"
              className="inline-block bg-white dark:bg-primary-700 text-primary-700 dark:text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-900 hover:shadow-lg dark:hover:bg-primary-800 dark:hover:text-white focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-primary-400/50 focus:bg-white focus:text-primary-900 dark:focus:bg-primary-800 dark:focus:text-white transition-all shadow-md"
            >
              Ask the AI Assistant
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

