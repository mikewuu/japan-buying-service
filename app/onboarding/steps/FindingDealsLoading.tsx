'use client';

import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function FindingDealsLoading({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('Finding great deals');

  useEffect(() => {
    const tasks = ['Finding great deals', 'Matching your budget', 'Analyzing best options'];

    let taskIndex = 0;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1.5;
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
    }, 60);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
      <div className="flex flex-col items-center gap-8 px-8">
        <div className="relative">
          <div className="h-24 w-24 animate-spin rounded-full border-4 border-amber-700 border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl">💎</div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">{currentTask}</h1>
          <p className="text-sm text-amber-200">{Math.round(progress)}% complete</p>
        </div>

        <div className="w-80 overflow-hidden rounded-full bg-amber-700">
          <div
            className="h-2 rounded-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-amber-100">Searching thousands of listings from Japan...</p>
        </div>
      </div>
    </div>
  );
}
