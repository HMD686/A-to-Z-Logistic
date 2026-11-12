import React from 'react';
import { Calendar, Award, Layers, Headphones, Shield, ArrowUpRight } from 'lucide-react';
import { VERIFIED_STATS, COMPANY_INFO } from '../data/companyData';

interface TrustExperienceProps {
  onLearnMoreAboutUs: () => void;
}

export const TrustExperience: React.FC<TrustExperienceProps> = ({ onLearnMoreAboutUs }) => {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>VERIFIED INDUSTRY RECORD</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>SERVING AMERICAN TRUCKING SINCE {COMPANY_INFO.establishedYear}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            A Trusted Partner in Truck Dispatching Since {COMPANY_INFO.establishedYear}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Trucking is the backbone of the American economy, but volatile spot markets, demanding broker packets,
            and hours of unpaid detention can drain an owner-operator's profitability. At A TO Z Logistic LLC, we
            provide structured, institutional-grade dispatching that protects your bottom line and keeps your trucks loaded with high-yield freight.
          </p>
        </div>

        {/* 4 Verified Statistics Cards - Strictly verified data only, no invented metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VERIFIED_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                {idx === 0 && <Calendar className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />}
                {idx === 1 && <Award className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />}
                {idx === 2 && <Layers className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />}
                {idx === 3 && <Headphones className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />}
                <span className="text-xs font-mono text-slate-500 tabular-nums">0{idx + 1}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums mb-1 font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Company Commitment Statement Bar */}
        <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Our Transparent Carrier Pledge
              </h3>
              <p className="text-sm text-slate-400 max-w-2xl">
                We believe in 100% financial transparency. You receive the original broker rate confirmation direct to your inbox.
                No hidden deductions, no broker kickbacks, and no forced dispatch.
              </p>
            </div>
          </div>
          <button
            onClick={onLearnMoreAboutUs}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
          >
            <span>Learn Our Story</span>
            <ArrowUpRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
