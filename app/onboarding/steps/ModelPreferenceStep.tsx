'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ModelPreferenceStep({ data, updateData, onNext, onBack }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Any specific models?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Tell us what you're looking for (optional)</p>
        </div>

        <div className="border border-neutral-200 bg-white p-10">
          <label className="mb-3 block font-serif text-sm tracking-widest text-neutral-700">
            MODEL NAMES OR KEYWORDS
          </label>
          <textarea
            value={data.models}
            onChange={(e) => updateData({ models: e.target.value })}
            placeholder="e.g., Birkin, Neverfull, Classic Flap, Speedy..."
            className="w-full border border-neutral-300 p-5 font-serif text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
            rows={6}
          />
          <p className="mt-3 font-serif text-sm tracking-wide text-neutral-500">
            Separate multiple models with commas or leave blank to see all options
          </p>
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
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
