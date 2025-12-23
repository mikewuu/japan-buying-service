'use client';

import { useState } from 'react';
import { OnboardingData } from '../page';

interface Props {
  data: OnboardingData;
  onNext: () => void;
  onBack: () => void;
}

export default function Step18_Verification({ data, onNext, onBack }: Props) {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onNext();
    }, 2000);
  };

  const contactInfo = data.contactMethod === 'email' ? data.email : data.phone;
  const contactType = data.contactMethod === 'email' ? 'email' : 'phone';

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white px-6 py-16">
      <div className="w-full max-w-3xl flex-1">
        <div className="mb-16 text-center">
          <div className="mb-6 text-6xl">✦</div>
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-neutral-900" style={{ fontFamily: "'Playfair Display', serif" }}>Verification</h1>
          <p className="font-serif text-lg tracking-wide text-neutral-600">
            We sent a verification code to <span className="font-semibold">{contactInfo}</span>
          </p>
        </div>

        <div className="border border-neutral-200 bg-white p-12">
          <div className="mb-8 text-center">
            <p className="font-serif tracking-wide text-neutral-700">
              Tap the verify button below to confirm your {contactType} and begin receiving exclusive offers
            </p>
          </div>

          <button
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full bg-black px-10 py-5 font-serif text-lg tracking-widest text-white transition-all hover:bg-neutral-900 disabled:opacity-30"
          >
            {isVerifying ? (
              <span className="flex items-center justify-center gap-3">
                <div className="h-5 w-5 animate-spin border-2 border-white border-t-transparent"></div>
                VERIFYING...
              </span>
            ) : (
              'VERIFY NOW'
            )}
          </button>

          <div className="mt-8 text-center">
            <p className="font-serif text-sm tracking-wide text-neutral-500">
              Didn't receive it?{' '}
              <button className="font-semibold text-neutral-900 hover:underline">
                Resend code
              </button>
            </p>
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
      </div>
    </div>
  );
}
