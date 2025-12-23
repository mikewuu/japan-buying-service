'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const COLORS = [
  { name: 'Black', hex: '#000000' },
  { name: 'Brown', hex: '#8B4513' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Green', hex: '#16A34A' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Gold', hex: '#F59E0B' },
  { name: 'Silver', hex: '#94A3B8' },
];

export default function ColorPreferenceStep({ data, updateData, onNext, onBack }: Props) {
  const toggleColor = (color: string) => {
    const colors = data.colors.includes(color)
      ? data.colors.filter((c) => c !== color)
      : [...data.colors, color];
    updateData({ colors });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Favorite colors?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Select all that you like</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`flex flex-col items-center gap-4 border p-8 transition-all ${
                data.colors.includes(color.name)
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <div
                className="h-12 w-12 border border-neutral-300"
                style={{ backgroundColor: color.hex }}
              ></div>
              <span className="text-center font-serif text-sm tracking-wider text-neutral-900">{color.name}</span>
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
          disabled={data.colors.length === 0}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
