import React from 'react';
import { ArrowRight, MessageSquare, ClipboardList, UserCheck, Route } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/companyData';

interface HowItWorksProps {
  onStartStepOne: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartStepOne }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-orange-400" />;
      case 1:
        return <ClipboardList className="w-5 h-5 text-orange-400" />;
      case 2:
        return <UserCheck className="w-5 h-5 text-orange-400" />;
      case 3:
        return <Route className="w-5 h-5 text-orange-400" />;
      default:
        return <ArrowRight className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>ONBOARDING ROADMAP</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>4-STEP SETUP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Simple, Professional, Efficient.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We know truck drivers and fleet managers do not have time for complex red tape. Our onboarding takes under 24 hours so your trucks can be booked without delay.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-orange-500/40 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xl font-black font-mono text-orange-400/80">
                    {stepItem.step}
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  {stepItem.subtitle}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Phase 0{idx + 1}</span>
                <span>Active Support</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-300 text-center sm:text-left">
            Have questions about carrier qualification or broker onboarding? Speak with an active dispatcher now.
          </div>
          <button
            onClick={onStartStepOne}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Begin Step 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
