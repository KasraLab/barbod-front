import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { ParticleBackground } from './components/ParticleBackground';
import { TrustSection } from './components/TrustSection';
import { Features3D } from './components/Features3D';
import { ComparisonSection } from './components/ComparisonSection';
import { SolutionsSection } from './components/SolutionsSection';
import { IntegrationSection } from './components/IntegrationSection';
import { DocsSection } from './components/DocsSection';
import { StatusSection } from './components/StatusSection';
import { DemoSection } from './components/DemoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Pricing3D } from './components/Pricing3D';
import { FAQSection } from './components/FAQSection';
import { CTA3D } from './components/CTA3D';
import { Footer } from './components/Footer';

type CurrentSection = 'home' | 'solutions' | 'docs' | 'status' | 'pricing';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentSection, setCurrentSection] = useState<CurrentSection>('home');

  useEffect(() => {
    // Set theme attribute on document
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section as CurrentSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Navbar theme={theme} onThemeToggle={toggleTheme} onNavigate={handleNavigate} />
      <main className="relative">
        {currentSection === 'home' && (
          <>
            <div className="relative">
              <ParticleBackground />
              <Hero3D />
            </div>
            <TrustSection />
            <Features3D />
            <ComparisonSection />
            <DemoSection />
            <IntegrationSection />
            <TestimonialsSection />
            <Pricing3D />
            <FAQSection />
            <CTA3D />
          </>
        )}
        {currentSection === 'solutions' && <SolutionsSection />}
        {currentSection === 'docs' && <DocsSection />}
        {currentSection === 'status' && <StatusSection />}
        {currentSection === 'pricing' && <Pricing3D />}
      </main>
      <Footer />
    </div>
  );
}
