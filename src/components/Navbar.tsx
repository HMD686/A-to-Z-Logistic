import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'calculator', label: 'Rate Estimator' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60'
        }`}
      >
        {/* Top utility notification bar for verified US dispatch desk */}
        <div className="bg-slate-900 border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Independent Truck Dispatching Since {COMPANY_INFO.establishedYear}</span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden md:inline text-slate-400">100% Rate Confirmation Transparency · No Forced Dispatch</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors"
                aria-label="Call dispatch desk"
              >
                <Phone className="w-3 h-3" />
                <span className="tabular-nums font-semibold">{COMPANY_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline text-slate-400">Hours: 7 AM – 7 PM EST</span>
            </div>
          </div>
        </div>

        {/* Strict 3-zone Top Bar Contract: Brand — 5 Nav Links — 1 Primary Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark, no tags attached) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left group flex items-center gap-3 cursor-pointer select-none"
            aria-label="A TO Z Logistic LLC homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              AZ
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group-hover:text-orange-400 transition-colors">
                A TO Z LOGISTIC LLC
              </span>
              <span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                Truck Dispatch & Freight Solutions
              </span>
            </div>
          </button>

          {/* Zone 2: Nav Links (Clean single-line text links with subtle hover effect) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-orange-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base py-2 font-medium transition-colors ${
                    activeSection === link.id ? 'text-orange-400 font-bold' : 'text-slate-200'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-all"
              >
                Get Free Consultation
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full py-2.5 text-center text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
