'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const CATEGORIES = [
  { name: 'Handbags', emoji: '👜' },
  { name: 'Wallets', emoji: '👛' },
  { name: 'Shoes', emoji: '👠' },
  { name: 'Accessories', emoji: '🎀' },
  { name: 'Jewelry', emoji: '💍' },
  { name: 'Clothing', emoji: '👗' },
  { name: 'Watches', emoji: '⌚' },
];

export default function Step7_ItemCategory({ data, updateData, onNext, onBack }: Props) {
  const toggleCategory = (category: string) => {
    const categories = data.categories.includes(category)
      ? data.categories.filter((c) => c !== category)
      : [...data.categories, category];
    updateData({ categories });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>What are you looking for?</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Select all categories that interest you</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              onClick={() => toggleCategory(category.name)}
              className={`flex flex-col items-center gap-4 border p-8 transition-all ${
                data.categories.includes(category.name)
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">{category.emoji}</span>
              <span className="text-center font-serif text-sm tracking-wider text-neutral-900">
                {category.name}
              </span>
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
          disabled={data.categories.length === 0}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
