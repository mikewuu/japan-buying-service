'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const STYLES = [
  { name: 'Classic', emoji: '👔' },
  { name: 'Modern', emoji: '✨' },
  { name: 'Vintage', emoji: '🕰️' },
  { name: 'Minimalist', emoji: '⚪' },
  { name: 'Bold', emoji: '🔥' },
  { name: 'Elegant', emoji: '💎' },
  { name: 'Streetwear', emoji: '🛹' },
];

export default function Step6_StylePreference({ data, updateData, onNext, onBack }: Props) {
  const toggleStyle = (style: string) => {
    const styles = data.styles.includes(style)
      ? data.styles.filter((s) => s !== style)
      : [...data.styles, style];
    updateData({ styles });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>What's your style?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Select all that apply</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {STYLES.map((style) => (
            <button
              key={style.name}
              onClick={() => toggleStyle(style.name)}
              className={`flex flex-col items-center gap-4 border p-8 transition-all ${
                data.styles.includes(style.name)
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">{style.emoji}</span>
              <span className="text-center font-serif text-sm tracking-wider text-neutral-900">{style.name}</span>
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
          disabled={data.styles.length === 0}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
