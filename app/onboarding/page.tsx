'use client';

import { useState } from 'react';
import InitialLoadingScreen from './steps/InitialLoadingScreen';
import BrandSelectionStep from './steps/BrandSelectionStep';
import ModelPreferenceStep from './steps/ModelPreferenceStep';
import BudgetStep from './steps/BudgetStep';
import PreviewDealsScreen from './steps/PreviewDealsScreen';
import StylePreferenceStep from './steps/StylePreferenceStep';
import ItemCategoryStep from './steps/ItemCategoryStep';
import ConditionPreferenceStep from './steps/ConditionPreferenceStep';
import ColorPreferenceStep from './steps/ColorPreferenceStep';
import PurchaseTimelineStep from './steps/PurchaseTimelineStep';
import FindingDealsLoading1 from './steps/FindingDealsLoading1';
import FindingDealsLoading2 from './steps/FindingDealsLoading2';
import FindingDealsLoading3 from './steps/FindingDealsLoading3';
import ResultsScreen from './steps/ResultsScreen';
import ContactCaptureStep from './steps/ContactCaptureStep';
import NotificationFrequencyStep from './steps/NotificationFrequencyStep';
import DealAlertsPreferenceStep from './steps/DealAlertsPreferenceStep';
import VerificationScreen from './steps/VerificationScreen';
import WelcomeSuccessScreen from './steps/WelcomeSuccessScreen';

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
    // Phase 1: Initial Loading
    <InitialLoadingScreen key="initial-loading" onComplete={nextStep} />,
    
    // Phase 2: Core Preferences (8 steps)
    <BrandSelectionStep key="brands" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <ModelPreferenceStep key="models" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <BudgetStep key="budget" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <PreviewDealsScreen key="preview-deals" data={data} onNext={nextStep} onBack={prevStep} />,
    <StylePreferenceStep key="style" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <ItemCategoryStep key="category" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <ConditionPreferenceStep key="condition" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <ColorPreferenceStep key="color" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <PurchaseTimelineStep key="timeline" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    
    // Phase 3: Finding Deals Loading (3 screens)
    <FindingDealsLoading1 key="finding-deals-1" onComplete={nextStep} />,
    <FindingDealsLoading2 key="finding-deals-2" onComplete={nextStep} />,
    <FindingDealsLoading3 key="finding-deals-3" onComplete={nextStep} />,
    
    // Phase 4: Results & Contact Capture
    <ResultsScreen key="results" data={data} onNext={nextStep} onBack={prevStep} />,
    <ContactCaptureStep key="contact" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    
    // Phase 5: Notification Setup (3 steps)
    <NotificationFrequencyStep key="notifications" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <DealAlertsPreferenceStep key="deal-alerts" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <VerificationScreen key="verification" data={data} onNext={nextStep} onBack={prevStep} />,
    
    // Phase 6: Final Confirmation
    <WelcomeSuccessScreen key="success" data={data} />,
  ];

  return (
    <div className="min-h-screen bg-white">
      {steps[currentStep]}
    </div>
  );
}
