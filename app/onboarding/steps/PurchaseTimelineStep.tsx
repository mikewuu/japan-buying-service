'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const TIMELINE_OPTIONS = [
  { name: 'ASAP', description: 'Within 1 week', emoji: '⚡' },
  { name: 'This Month', description: 'Within the next 30 days', emoji: '📅' },
  { name: 'Next 3 Months', description: 'No immediate rush', emoji: '🗓️' },
  { name: 'Just Browsing', description: 'Exploring options', emoji: '👀' },
];

export default function PurchaseTimelineStep({ data, updateData, onNext, onBack }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>When are you looking to buy?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">This helps us prioritize deals for you</p>
        </div>

        <div className="space-y-6">
          {TIMELINE_OPTIONS.map((option) => (
            <button
              key={option.name}
              onClick={() => updateData({ purchaseTimeline: option.name })}
              className={`flex w-full items-center gap-6 border p-8 text-left transition-all ${
                data.purchaseTimeline === option.name
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">{option.emoji}</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg tracking-wide text-neutral-900">{option.name}</h3>
                <p className="font-serif text-sm tracking-wide text-neutral-600">{option.description}</p>
              </div>
            </button>
          ))}
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
          disabled={!data.purchaseTimeline}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
