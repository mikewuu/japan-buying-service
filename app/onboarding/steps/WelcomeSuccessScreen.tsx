'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
}

export default function WelcomeSuccessScreen({ data }: Props) {
  const contactInfo = data.contactMethod === 'email' ? data.email : data.phone;
  const contactType = data.contactMethod === 'email' ? 'email' : 'phone';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-16">
          <div className="mb-8 text-8xl">✦</div>
          <h1 className="mb-6 font-serif text-6xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Welcome</h1>
          <p className="font-serif text-xl tracking-wide text-neutral-600">
            Your personalized luxury concierge awaits
          </p>
        </div>

        <div className="mb-12 border border-neutral-200 bg-white p-12">
          <h2 className="mb-8 font-serif text-2xl tracking-wide text-neutral-900">Your Preferences</h2>
          <div className="space-y-4 text-left">
            <div className="flex justify-between border-b border-neutral-200 pb-4">
              <span className="font-serif tracking-wide text-neutral-700">Brands</span>
              <span className="font-serif text-neutral-900">{data.brands.slice(0, 3).join(', ')}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-4">
              <span className="font-serif tracking-wide text-neutral-700">Budget</span>
              <span className="font-serif text-neutral-900">
                ${data.budgetMin.toLocaleString()} - ${data.budgetMax.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-4">
              <span className="font-serif tracking-wide text-neutral-700">Categories</span>
              <span className="font-serif text-neutral-900">{data.categories.slice(0, 2).join(', ')}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-4">
              <span className="font-serif tracking-wide text-neutral-700">Condition</span>
              <span className="font-serif text-neutral-900">{data.condition}</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-4">
              <span className="font-serif tracking-wide text-neutral-700">Notifications</span>
              <span className="font-serif text-neutral-900">{data.notificationFrequency}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-serif tracking-wide text-neutral-700">Contact</span>
              <span className="font-serif text-neutral-900">{contactInfo}</span>
            </div>
          </div>
        </div>

        <div className="border border-gold bg-neutral-50 p-10">
          <h3 className="mb-4 font-serif text-2xl tracking-wide text-neutral-900">What Happens Next</h3>
          <p className="font-serif tracking-wide text-neutral-700">
            Our team in Japan is curating exceptional pieces matching your preferences.
            Expect your first selection within 24 hours.
          </p>
        </div>

        <button
          onClick={() => (window.location.href = '/')}
          className="mt-12 border border-neutral-300 px-12 py-4 font-serif tracking-widest text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          RETURN HOME
        </button>
      </div>
    </div>
  );
}
