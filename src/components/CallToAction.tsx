import React from 'react';
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CallToActionProps {
  onStartJourney: () => void;
  onContactTeam: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onStartJourney,
  onContactTeam,
}) => {
  return (
    <section className="relative py-24 overflow-hidden border-b border-slate-900">
      {/* Background with Fleet Terminal Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/freight_fleet_terminal_1794412933320.jpg"
          alt="Commercial fleet of semi-trucks aligned at a modern freight terminal"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
        {/* Section kicker without pill */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-4">
          <span>PARTNER WITH A TO Z LOGISTIC LLC</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>SINCE {COMPANY_INFO.establishedYear}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6 text-balance uppercase">
          READY TO TAKE YOUR TRUCKING BUSINESS TO THE NEXT LEVEL?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Let A TO Z Logistic LLC help simplify your dispatch operations so you can focus on growing your trucking business.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onStartJourney}
            className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg shadow-xl shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactTeam}
            className="w-full sm:w-auto px-7 py-4 text-xs font-bold uppercase tracking-wider text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-orange-400" />
            <span>CONTACT OUR TEAM</span>
          </button>
        </div>

        {/* Contact Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
          <a
            href={COMPANY_INFO.phoneHref}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span className="tabular-nums font-semibold">{COMPANY_INFO.phone}</span>
          </a>
          <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
          <a
            href={COMPANY_INFO.emailHref}
            className="text-slate-300 hover:text-white transition-colors"
          >
            {COMPANY_INFO.email}
          </a>
          <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
          <span>No Lock-In Long Term Contract</span>
        </div>
      </div>
    </section>
  );
};
