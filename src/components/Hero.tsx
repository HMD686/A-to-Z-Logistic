import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetStarted,
  onExploreServices,
  onOpenConsultation,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with layered corporate scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_semi_truck_highway_1794412932623.jpg"
          alt="Modern commercial semi-truck hauling freight on an American interstate highway at golden hour"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-102 transform duration-1000 ease-out"
        />
        {/* Measured multi-stop gradient scrim to ensure high contrast WCAG AA compliant readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Quiet unboxed kicker with dot separator (No pill badges) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-4">
            <span>A TO Z LOGISTIC LLC</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>ESTABLISHED {COMPANY_INFO.establishedYear}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>UNITED STATES FREIGHT DISPATCH</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 text-balance">
            {COMPANY_INFO.heroHeadline}
          </h1>

          {/* Supporting Headline */}
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-6 tracking-tight">
            {COMPANY_INFO.heroSubheadline}
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            {COMPANY_INFO.heroDescription}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onGetStarted}
              className="px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>GET STARTED TODAY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-6 py-4 text-sm font-semibold tracking-wide text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>EXPLORE OUR SERVICES</span>
            </button>

            <a
              href={COMPANY_INFO.phoneHref}
              className="px-5 py-4 text-sm font-medium text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              <span className="tabular-nums font-semibold">{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Carrier Assurance Points (Unboxed text with checkmarks) */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>100% Direct Rate Confirmations</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Zero Forced Dispatch Policy</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Dedicated Dispatch Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
