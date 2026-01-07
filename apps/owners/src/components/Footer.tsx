export default function Footer() {
  return (
    <footer 
      role="contentinfo" 
      className="mt-16 text-center text-sm text-primary-700 dark:text-stone-400"
    >
      <div className="flex flex-col items-center">
        <p className="font-semibold mb-1 max-w-none">
          Independent Community Hub
        </p>
        <p className="text-xs max-w-none">
          Not affiliated with Oak&nbsp;Hill Settlement HOA Board of Directors or Superior Community Property Management.
        </p>
        <p className="mt-2 max-w-none">
          By homeowners, for homeowners • Forest Grove, Oregon
        </p>
        <p className="mt-4 text-xs text-primary-600 dark:text-stone-500 italic max-w-none">
          This website was created with AI&nbsp;assistance. Check important info.
        </p>
      </div>
    </footer>
  );
}

