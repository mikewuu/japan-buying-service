'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const CONDITIONS = [
  { name: 'Brand New', description: 'Never used, with tags', emoji: '✨' },
  { name: 'Like New', description: 'Excellent condition, barely used', emoji: '🌟' },
  { name: 'Gently Used', description: 'Minor signs of wear', emoji: '👌' },
  { name: 'Good', description: 'Visible wear but well maintained', emoji: '👍' },
  { name: 'Any Condition', description: 'Show me all deals', emoji: '🎯' },
];

export default function ConditionPreferenceStep({ data, updateData, onNext, onBack }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Preferred condition?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Choose one option</p>
        </div>

        <div className="space-y-6">
          {CONDITIONS.map((condition) => (
            <button
              key={condition.name}
              onClick={() => updateData({ condition: condition.name })}
              className={`flex w-full items-center gap-6 border p-8 text-left transition-all ${
                data.condition === condition.name
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">{condition.emoji}</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg tracking-wide text-neutral-900">{condition.name}</h3>
                <p className="font-serif text-sm tracking-wide text-neutral-600">{condition.description}</p>
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
          disabled={!data.condition}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
