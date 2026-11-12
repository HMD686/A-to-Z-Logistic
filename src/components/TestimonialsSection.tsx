import React from 'react';
import { Quote, ShieldCheck, MapPin, Truck } from 'lucide-react';
import { AUTHENTIC_TESTIMONIALS, COMPANY_INFO } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/40 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>CARRIER PERSPECTIVES</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>PROVEN WORKING RELATIONSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Hear From Our Motor Carrier Partners
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real feedback from independent owner-operators and small fleet managers who rely on A TO Z Logistic LLC for daily route planning, rate negotiation, and back-office dispatch support.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUTHENTIC_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Partner Since {t.partnerSince}</span>
                </div>

                <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3">
                  {t.highlight}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-900 flex flex-col space-y-1">
                <div className="text-base font-bold text-white">
                  {t.contactName}
                </div>
                <div className="text-xs font-medium text-slate-400">
                  {t.role} · {t.carrierName}
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-orange-400" />
                    <span>{t.equipment}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{t.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carrier Transparency Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-orange-400" />
          <span>Carrier testimonials reflect genuine operational experiences with A TO Z Logistic LLC since 2016.</span>
        </div>
      </div>
    </section>
  );
};
