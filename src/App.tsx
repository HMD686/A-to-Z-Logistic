import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Shield } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustExperience } from './components/TrustExperience';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { RateEstimator } from './components/RateEstimator';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModals } from './components/LegalModals';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationPresetEquipment, setConsultationPresetEquipment] = useState<string>('');
  const [consultationPresetMessage, setConsultationPresetMessage] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync section scroll with active navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenConsultation = (equipment = '', message = '') => {
    setConsultationPresetEquipment(equipment);
    setConsultationPresetMessage(message);
    setIsConsultationOpen(true);
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    handleOpenConsultation(
      'dry_van',
      `I am interested in setting up dedicated dispatch for: ${serviceName}. Please contact me regarding lane options.`
    );
  };

  const handleApplyEstimateToForm = (equipmentLabel: string, estimatedWeekly: number) => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Primary Top Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Page 1: Hero Section */}
        <Hero
          onGetStarted={() => handleOpenConsultation()}
          onExploreServices={() => scrollToSection('services')}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Verified Experience & Trust Strip (Established 2016) */}
        <TrustExperience onLearnMoreAboutUs={() => scrollToSection('about')} />

        {/* Complete Truck Dispatching Solutions (8 Services) */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* More Than Dispatching. We're Your Business Partner. */}
        <WhyChooseUs onGetStarted={() => handleOpenConsultation()} />

        {/* How It Works (4 Steps) */}
        <HowItWorks onStartStepOne={() => scrollToSection('contact')} />

        {/* Interactive Carrier Rate & Weekly Revenue Estimator */}
        <RateEstimator onApplyEstimateToForm={handleApplyEstimateToForm} />

        {/* About Us Page Story: Built on Experience. Driven by Reliability. */}
        <AboutSection onContactUs={() => scrollToSection('contact')} />

        {/* Authentic Carrier Testimonials & Feedback */}
        <TestimonialsSection />

        {/* SEO-friendly FAQ Accordion */}
        <FaqSection onAskDirectly={() => scrollToSection('contact')} />

        {/* High-Impact Call to Action Banner */}
        <CallToAction
          onStartJourney={() => handleOpenConsultation()}
          onContactTeam={() => scrollToSection('contact')}
        />

        {/* Contact Page & Lead Generation Inquiry Form */}
        <ContactSection
          initialEquipment={consultationPresetEquipment}
          initialMessage={consultationPresetMessage}
        />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Free Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        presetEquipment={consultationPresetEquipment}
        presetMessage={consultationPresetMessage}
      />

      {/* Privacy Policy & Terms Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Mobile Floating Quick-Call Bar */}
      <div className="sm:hidden fixed bottom-4 right-4 z-40">
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl active:scale-95 transition-transform"
          aria-label="Call Dispatch"
        >
          <Phone className="w-4 h-4" />
          <span>Call Dispatch</span>
        </a>
      </div>
    </div>
  );
}
