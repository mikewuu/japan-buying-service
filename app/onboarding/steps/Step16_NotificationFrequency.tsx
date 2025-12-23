'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const FREQUENCY_OPTIONS = [
  { name: 'Instant Alerts', description: 'Immediate notification of new matches', emoji: '⚡' },
  { name: 'Daily Digest', description: 'One curated message per day', emoji: '☀' },
  { name: 'Weekly Summary', description: 'Weekly selection of finest pieces', emoji: '◆' },
  { name: 'Monthly Roundup', description: 'Monthly highlights and exclusives', emoji: '✦' },
];

export default function Step16_NotificationFrequency({ data, updateData, onNext, onBack }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Notification Preference</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Choose your preferred frequency</p>
        </div>

        <div className="space-y-6">
          {FREQUENCY_OPTIONS.map((option) => (
            <button
              key={option.name}
              onClick={() => updateData({ notificationFrequency: option.name })}
              className={`flex w-full items-center gap-6 border p-8 text-left transition-all ${
                data.notificationFrequency === option.name
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
          disabled={!data.notificationFrequency}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
