'use client';

import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function FindingDealsLoading3({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 3;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-12 px-8">
        <div className="relative">
          <div className="h-24 w-24 animate-spin border-2 border-neutral-800 border-t-gold"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl">💎</div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="mb-3 font-serif text-4xl font-light tracking-wide text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Analyzing best options</h1>
          <p className="font-serif text-sm tracking-widest text-neutral-400">{Math.round(progress)}% COMPLETE</p>
        </div>

        <div className="w-80 overflow-hidden bg-neutral-800">
          <div
            className="h-0.5 bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-4 text-center">
          <p className="font-serif tracking-wide text-neutral-400">Curating the perfect deals for you...</p>
        </div>
      </div>
    </div>
  );
}
