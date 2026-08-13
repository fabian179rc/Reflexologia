import React from 'react';
import { TopBar } from '../components/TopBar';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ContentSection } from '../components/ContentSection';
import { BonusesSection } from '../components/BonusesSection';
import { ValueStack } from '../components/ValueStack';
import { Comparison } from '../components/Comparison';
import { PricingSection } from '../components/PricingSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { TestimonialsBottom } from '../components/TestimonialsBottom';
import { FaqSection } from '../components/FaqSection';
import { FinalPricingCTA } from '../components/FinalPricingCTA';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';
import { PurchaseNotification } from '../components/PurchaseNotification';
export function Landing() {
  return <main className="min-h-screen bg-brand-dark">
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <div className="cv-section">
        <SolutionSection />
      </div>
      <div className="cv-section">
        <FeaturesSection />
      </div>
      <div className="cv-section">
        <ContentSection />
      </div>
      <div className="cv-section">
        <BonusesSection />
      </div>
      <div className="cv-section">
        <ValueStack />
      </div>
      <div className="cv-section">
        <Comparison />
      </div>
      <PricingSection />
      <div className="cv-section">
        <GuaranteeSection />
      </div>
      <div className="cv-section">
        <TestimonialsBottom />
      </div>
      <div className="cv-section">
        <FaqSection />
      </div>
      <div className="cv-section">
        <FinalPricingCTA />
      </div>
      <Footer />
      <FloatingCTA />
      <PurchaseNotification />
    </main>;
}
