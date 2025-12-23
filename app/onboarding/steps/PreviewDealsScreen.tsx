'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  onNext: () => void;
  onBack: () => void;
}

export default function PreviewDealsScreen({ data, onNext, onBack }: Props) {
  const previewDeals = [
    {
      brand: data.brands[0] || 'Hermès',
      item: 'Birkin 30 Togo Leather',
      price: '$9,200',
      condition: 'Like New',
      image: '👜',
    },
    {
      brand: data.brands[1] || 'Louis Vuitton',
      item: 'Neverfull MM Monogram',
      price: '$1,350',
      condition: 'Excellent',
      image: '👝',
    },
    {
      brand: data.brands[2] || 'Chanel',
      item: 'Classic Flap Medium',
      price: '$5,200',
      condition: 'Very Good',
      image: '💄',
    },
    {
      brand: data.brands[0] || 'Gucci',
      item: 'Marmont Shoulder Bag',
      price: '$1,800',
      condition: 'Like New',
      image: '🕶️',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-4xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Items in your budget range
          </h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">
            Previous deals from ${data.budgetMin.toLocaleString()} - $
            {data.budgetMax.toLocaleString()}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {previewDeals.map((deal, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-400"
            >
              <div className="text-5xl">{deal.image}</div>
              <div className="flex-1">
                <h3 className="font-serif text-lg tracking-wide text-neutral-900">{deal.brand}</h3>
                <p className="font-serif text-sm tracking-wide text-neutral-600">{deal.item}</p>
                <p className="mt-1 font-serif text-xs tracking-widest text-neutral-500">{deal.condition}</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-xl tracking-wide text-neutral-900">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-gold bg-neutral-50 p-8 text-center">
          <p className="font-serif tracking-wide text-neutral-700">
            These are examples of deals we've found before. Let's continue to find current deals for
            you!
          </p>
        </div>
      </div>

      <div className="mt-12 flex w-full max-w-4xl gap-6">
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
