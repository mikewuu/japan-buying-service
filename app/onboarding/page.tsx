'use client';

import { useState } from 'react';

// Phase 1
import Step1_InitialLoading from './steps/Step1_InitialLoading';

// Phase 2: Core Preferences
import Step2_BrandSelection from './steps/Step2_BrandSelection';
import Step3_ModelPreference from './steps/Step3_ModelPreference';
import Step4_Budget from './steps/Step4_Budget';
import Step5_PreviewDeals from './steps/Step5_PreviewDeals';
import Step6_StylePreference from './steps/Step6_StylePreference';
import Step7_ItemCategory from './steps/Step7_ItemCategory';
import Step8_ConditionPreference from './steps/Step8_ConditionPreference';
import Step9_ColorPreference from './steps/Step9_ColorPreference';
import Step10_PurchaseTimeline from './steps/Step10_PurchaseTimeline';

// Phase 3: Finding Deals Loading
import Step11_FindingDeals from './steps/Step11_FindingDeals';
import Step12_MatchingBudget from './steps/Step12_MatchingBudget';
import Step13_AnalyzingOptions from './steps/Step13_AnalyzingOptions';

// Phase 4: Results & Contact
import Step14_Results from './steps/Step14_Results';
import Step15_ContactCapture from './steps/Step15_ContactCapture';

// Phase 5: Notification Setup
import Step16_NotificationFrequency from './steps/Step16_NotificationFrequency';
import Step17_DealAlerts from './steps/Step17_DealAlerts';
import Step18_Verification from './steps/Step18_Verification';

// Phase 6: Final
import Step19_WelcomeSuccess from './steps/Step19_WelcomeSuccess';

export interface OnboardingData {
  brands: string[];
  models: string;
  budgetMin: number;
  budgetMax: number;
  styles: string[];
  categories: string[];
  condition: string;
  colors: string[];
  purchaseTimeline: string;
  contactMethod: 'email' | 'phone' | null;
  email: string;
  phone: string;
  notificationFrequency: string;
  dealAlerts: string[];
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    brands: [],
    models: '',
    budgetMin: 500,
    budgetMax: 5000,
    styles: [],
    categories: [],
    condition: '',
    colors: [],
    purchaseTimeline: '',
    contactMethod: null,
    email: '',
    phone: '',
    notificationFrequency: '',
    dealAlerts: [],
  });

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(0, prev - 1));

  const steps = [
    // Phase 1: Initial Loading & Welcome (Step 1)
    <Step1_InitialLoading key="step-1" onComplete={nextStep} />,
    
    // Phase 2: Core Preferences (Steps 2-10)
    <Step2_BrandSelection key="step-2" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step3_ModelPreference key="step-3" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step4_Budget key="step-4" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step5_PreviewDeals key="step-5" data={data} onNext={nextStep} onBack={prevStep} />,
    <Step6_StylePreference key="step-6" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step7_ItemCategory key="step-7" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step8_ConditionPreference key="step-8" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step9_ColorPreference key="step-9" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step10_PurchaseTimeline key="step-10" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    
    // Phase 3: Finding Deals Loading (Steps 11-13)
    <Step11_FindingDeals key="step-11" onComplete={nextStep} />,
    <Step12_MatchingBudget key="step-12" onComplete={nextStep} />,
    <Step13_AnalyzingOptions key="step-13" onComplete={nextStep} />,
    
    // Phase 4: Results & Contact Capture (Steps 14-15)
    <Step14_Results key="step-14" data={data} onNext={nextStep} onBack={prevStep} />,
    <Step15_ContactCapture key="step-15" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    
    // Phase 5: Notification Setup (Steps 16-18)
    <Step16_NotificationFrequency key="step-16" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step17_DealAlerts key="step-17" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <Step18_Verification key="step-18" data={data} onNext={nextStep} onBack={prevStep} />,
    
    // Phase 6: Final Confirmation (Step 19)
    <Step19_WelcomeSuccess key="step-19" data={data} />,
  ];

  return (
    <div className="min-h-screen bg-white">
      {steps[currentStep]}
    </div>
  );
}
