'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  onNext: () => void;
  onBack: () => void;
}

export default function ResultsScreen({ data, onNext }: Props) {
  const mockDeals = [
    {
      brand: data.brands[0] || 'Hermès',
      item: 'Birkin 30',
      price: '$8,500',
      retail: '$12,000',
      savings: '29%',
      condition: 'Like New',
    },
    {
      brand: data.brands[1] || 'Louis Vuitton',
      item: 'Neverfull MM',
      price: '$1,200',
      retail: '$1,800',
      savings: '33%',
      condition: 'Excellent',
    },
    {
      brand: data.brands[2] || 'Chanel',
      item: 'Classic Flap',
      price: '$4,800',
      retail: '$7,200',
      savings: '33%',
      condition: 'Very Good',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-4xl flex-1">
        <div className="mb-16 text-center">
          <div className="mb-6 text-6xl">✦</div>
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Exceptional Finds</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Curated selections matching your preferences</p>
        </div>

        <div className="space-y-6">
          {mockDeals.map((deal, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-neutral-200 bg-white p-8"
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl tracking-wide text-neutral-900">{deal.brand}</h3>
                <p className="font-serif text-neutral-600">{deal.item}</p>
                <p className="mt-1 font-serif text-sm tracking-widest text-neutral-500">{deal.condition}</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-2xl tracking-wide text-neutral-900">{deal.price}</p>
                <p className="font-serif text-sm text-neutral-500 line-through">{deal.retail}</p>
                <p className="font-serif text-sm tracking-wide text-neutral-700">Save {deal.savings}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-gold bg-neutral-50 p-8 text-center">
          <p className="font-serif text-lg tracking-wide text-neutral-900">
            We found <span className="font-semibold">127 additional items</span> matching your preferences
          </p>
          <p className="mt-2 font-serif tracking-wide text-neutral-600">Continue to receive these exclusive offers</p>
        </div>
      </div>

      <div className="mt-12 flex w-full max-w-4xl gap-6">
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
