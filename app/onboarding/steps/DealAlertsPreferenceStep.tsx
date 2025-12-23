'use client';

import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ALERT_TYPES = [
  { name: 'Price Drops', description: 'When items you like go on sale', emoji: '↓' },
  { name: 'New Arrivals', description: 'Fresh inventory matching your taste', emoji: '✦' },
  { name: 'Rare Finds', description: 'Hard-to-find items and limited editions', emoji: '◆' },
  { name: 'Limited Time Offers', description: 'Exclusive time-sensitive opportunities', emoji: '⌛' },
];

export default function DealAlertsPreferenceStep({ data, updateData, onNext, onBack }: Props) {
  const toggleAlert = (alert: string) => {
    const dealAlerts = data.dealAlerts.includes(alert)
      ? data.dealAlerts.filter((a) => a !== alert)
      : [...data.dealAlerts, alert];
    updateData({ dealAlerts });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Alert Preferences</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">Select all that interest you</p>
        </div>

        <div className="space-y-6">
          {ALERT_TYPES.map((alert) => (
            <button
              key={alert.name}
              onClick={() => toggleAlert(alert.name)}
              className={`flex w-full items-center gap-6 border p-8 text-left transition-all ${
                data.dealAlerts.includes(alert.name)
                  ? 'border-gold bg-neutral-50'
                  : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <span className="text-5xl">{alert.emoji}</span>
              <div className="flex-1">
                <h3 className="font-serif text-lg tracking-wide text-neutral-900">{alert.name}</h3>
                <p className="font-serif text-sm tracking-wide text-neutral-600">{alert.description}</p>
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
          disabled={data.dealAlerts.length === 0}
          className="flex-1 bg-black px-10 py-4 font-serif tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
