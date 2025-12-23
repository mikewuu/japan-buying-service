'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step4_Budget({ data, updateData, onNext, onBack }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>What's your budget?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">We'll find the best deals in your range</p>
        </div>

        <div className="border border-neutral-200 bg-white p-10">
          <div className="mb-10">
            <label className="mb-3 block font-serif text-sm tracking-widest text-neutral-700">MINIMUM ($)</label>
            <input
              type="number"
              value={data.budgetMin}
              onChange={(e) => updateData({ budgetMin: parseInt(e.target.value) || 0 })}
              className="w-full border border-neutral-300 p-5 font-serif text-lg text-neutral-900 focus:border-neutral-900 focus:outline-none"
              min="0"
              step="100"
            />
          </div>

          <div className="mb-10">
            <label className="mb-3 block font-serif text-sm tracking-widest text-neutral-700">MAXIMUM ($)</label>
            <input
              type="number"
              value={data.budgetMax}
              onChange={(e) => updateData({ budgetMax: parseInt(e.target.value) || 0 })}
              className="w-full border border-neutral-300 p-5 font-serif text-lg text-neutral-900 focus:border-neutral-900 focus:outline-none"
              min="0"
              step="100"
            />
          </div>

          <div className="border border-gold bg-neutral-50 p-6">
            <p className="text-center font-serif text-2xl tracking-wide text-neutral-900">
              ${data.budgetMin.toLocaleString()} - ${data.budgetMax.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex w-full max-w-3xl gap-6">
        <button
          onClick={onBack}
          className="border border-neutral-300 px-10 py-4 font-serif tracking-widest text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          BACK
        </button>
        <button
          onClick={onNext}
          disabled={data.budgetMin >= data.budgetMax}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
