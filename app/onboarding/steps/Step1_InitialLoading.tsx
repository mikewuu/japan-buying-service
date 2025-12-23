'use client';

import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function Step1_InitialLoading({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('Analyzing your location');

  useEffect(() => {
    const tasks = [
      'Analyzing your location',
      'Loading luxury brands',
      'Preparing your experience',
    ];

    let taskIndex = 0;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }

        if (next > 33 && taskIndex === 0) {
          taskIndex = 1;
          setCurrentTask(tasks[1]);
        } else if (next > 66 && taskIndex === 1) {
          taskIndex = 2;
          setCurrentTask(tasks[2]);
        }

        return next;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-12 px-8">
        <div className="relative">
          <div className="h-20 w-20 animate-spin border-2 border-neutral-800 border-t-gold"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 bg-gold"></div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="mb-3 font-serif text-3xl font-light tracking-wide text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{currentTask}</h1>
          <p className="font-serif text-sm tracking-widest text-neutral-400">{progress}% COMPLETE</p>
        </div>

        <div className="w-80 overflow-hidden bg-neutral-800">
          <div
            className="h-0.5 bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
