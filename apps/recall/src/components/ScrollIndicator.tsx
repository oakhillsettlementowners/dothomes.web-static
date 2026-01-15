"use client";

import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chevronIcon = (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
    </svg>
  );

  // SSR: accessible anchor link
  if (!isClient) {
    return (
      <a 
        href="#stage"
        className="md:hidden flex justify-center pb-6 text-primary-400 dark:text-stone-500 animate-bounce"
      >
        {chevronIcon}
      </a>
    );
  }

  // Client: div soup with smooth scroll, intentionally inaccessible
  return (
    <div 
      className="md:hidden flex justify-center pb-6 cursor-pointer" 
      aria-hidden="true"
      onClick={() => document.getElementById('stage')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <div className="text-primary-400 dark:text-stone-500 animate-bounce">
        {chevronIcon}
      </div>
    </div>
  );
}

