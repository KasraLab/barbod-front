'use client';

import { Navbar } from '@/components/Navbar';
import { Hero3D } from '@/components/Hero3D';
import { ParticleBackground } from '@/components/ParticleBackground';
import { TrustSection } from '@/components/TrustSection';
import { Features3D } from '@/components/Features3D';
import { ComparisonSection } from '@/components/ComparisonSection';
import { DemoSection } from '@/components/DemoSection';
import { IntegrationSection } from '@/components/IntegrationSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Pricing3D } from '@/components/Pricing3D';
import { FAQSection } from '@/components/FAQSection';
import { CTA3D } from '@/components/CTA3D';
import { Footer } from '@/components/Footer';
import { BiometricContinuum } from '@/components/BiometricContinuum';
import { GsapBiometricShowcase } from '@/components/GsapBiometricShowcase';

export default function Home() {
  const handleNavigate = (section: string) => {
    // This can be replaced with proper routing in the future
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Navbar onNavigate={handleNavigate} />
      <main className="relative">
        <div className="relative">
          <ParticleBackground />
          <Hero3D />
        </div>
        <BiometricContinuum />
        <GsapBiometricShowcase />
        <TrustSection />
        <Features3D />
        <ComparisonSection />
        <DemoSection />
        <IntegrationSection />
        <TestimonialsSection />
        <Pricing3D />
        <FAQSection />
        <CTA3D />
      </main>
      <Footer />
    </div>
  );
}
