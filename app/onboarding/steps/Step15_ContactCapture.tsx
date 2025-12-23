'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step15_ContactCapture({ data, updateData, onNext, onBack }: Props) {
  const canContinue =
    (data.contactMethod === 'email' && data.email) ||
    (data.contactMethod === 'phone' && data.phone);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            How shall we reach you?
          </h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Choose your preferred contact method</p>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <button
              onClick={() => updateData({ contactMethod: 'email' })}
              className={`flex w-full items-center gap-6 border p-8 text-left transition-all ${
                data.contactMethod === 'email'
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">✉</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg tracking-wide text-neutral-900">Email</h3>
                <p className="font-serif text-sm tracking-wide text-neutral-600">Receive offers in your inbox</p>
              </div>
            </button>

            {data.contactMethod === 'email' && (
              <div className="border border-neutral-200 bg-white p-8">
                <label className="mb-3 block font-serif text-sm tracking-widest text-neutral-700">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-neutral-300 p-5 font-serif text-lg text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <button
              onClick={() => updateData({ contactMethod: 'phone' })}
              className={`flex w-full items-center gap-6 border p-8 text-left transition-all ${
                data.contactMethod === 'phone'
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">✆</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg tracking-wide text-neutral-900">Text Message</h3>
                <p className="font-serif text-sm tracking-wide text-neutral-600">Receive SMS notifications</p>
              </div>
            </button>

            {data.contactMethod === 'phone' && (
              <div className="border border-neutral-200 bg-white p-8">
                <label className="mb-3 block font-serif text-sm tracking-widest text-neutral-700">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => updateData({ phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-neutral-300 p-5 font-serif text-lg text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                />
              </div>
            )}
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
          disabled={!canContinue}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
