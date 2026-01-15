export default function InactivePage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-stone-400 dark:text-stone-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
          Recall not active
        </h1>
        <p className="text-stone-600 dark:text-stone-400">
          To initiate a recall email{" "}
          <a
            href="mailto:recall@oakhillsettlement.homes"
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            recall@oakhillsettlement.homes
          </a>
        </p>
      </div>
    </div>
  );
}

