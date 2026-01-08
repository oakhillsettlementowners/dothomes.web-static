interface RecallBannerProps {
  variant?: 'mobile' | 'desktop';
}

export default function RecallBanner({ variant }: RecallBannerProps) {
  if (process.env.NEXT_PUBLIC_SHOW_RECALL_BANNER !== 'true') {
    return null;
  }

  const baseClasses = "border-b border-amber-300 dark:border-amber-700 py-2 px-4 text-center";
  
  // Mobile: sticky, solid background, hidden on desktop
  if (variant === 'mobile') {
    return (
      <div className={`${baseClasses} sticky top-0 z-[60] bg-amber-100 dark:bg-amber-900 md:hidden`}>
        <a 
          href="https://recall.oakhillsettlement.homes/petition#stage" 
          className="text-amber-800 dark:text-amber-200 hover:underline font-medium"
        >
          🗳️ Recall effort in progress — Sign the petition →
        </a>
      </div>
    );
  }
  
  // Desktop: transparent with blur, hidden on mobile
  if (variant === 'desktop') {
    return (
      <div className={`${baseClasses} hidden md:block bg-amber-100/80 dark:bg-amber-900/30 backdrop-blur-sm`}>
        <a 
          href="https://recall.oakhillsettlement.homes/petition#stage" 
          className="text-amber-800 dark:text-amber-200 hover:underline font-medium"
        >
          🗳️ Recall effort in progress — Sign the petition →
        </a>
      </div>
    );
  }

  // Default (backwards compatibility): show both behaviors
  return (
    <div className={`${baseClasses} sticky top-0 z-[60] bg-amber-100 dark:bg-amber-900 md:bg-amber-100/80 md:dark:bg-amber-900/30 md:backdrop-blur-sm`}>
      <a 
        href="https://recall.oakhillsettlement.homes/petition#stage" 
        className="text-amber-800 dark:text-amber-200 hover:underline font-medium"
      >
        🗳️ Recall effort in progress — Sign the petition →
      </a>
    </div>
  );
}

