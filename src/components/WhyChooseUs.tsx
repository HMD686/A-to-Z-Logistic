import React from 'react';
import {
  ShieldCheck,
  Check,
  X,
  PhoneCall,
  Clock,
  Compass,
  FileSpreadsheet,
  Award,
  Users,
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, COMPANY_INFO } from '../data/companyData';

interface WhyChooseUsProps {
  onGetStarted: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onGetStarted }) => {
  const getIconForDifferentiator = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 text-orange-400" />;
      case 1:
        return <PhoneCall className="w-5 h-5 text-orange-400" />;
      case 2:
        return <Users className="w-5 h-5 text-orange-400" />;
      case 3:
        return <Clock className="w-5 h-5 text-orange-400" />;
      case 4:
        return <Compass className="w-5 h-5 text-orange-400" />;
      case 5:
        return <ShieldCheck className="w-5 h-5 text-orange-400" />;
      default:
        return <Check className="w-5 h-5 text-orange-400" />;
    }
  };

  const comparisonRows = [
    {
      feature: 'Broker Rate Confirmation Transparency',
      atoz: '100% Original Rate Con sent straight to carrier email',
      others: 'Often withheld or re-brokered with margin shaved off',
    },
    {
      feature: 'Dispatch Model & Authority',
      atoz: 'NO FORCED DISPATCH — Carrier retains 100% final refusal rights',
      others: 'Forced dispatch with threats of service abandonment',
    },
    {
      feature: 'Dispatcher Assignment',
      atoz: 'Dedicated personal dispatcher who knows your specific truck and lanes',
      others: 'Rotating anonymous call-center reps with zero familiarity',
    },
    {
      feature: 'Detention & Layover Enforcement',
      atoz: 'Aggressive collection of $50–$75/hr detention and TONU fees',
      others: 'Rarely pursued; carrier absorbs uncompensated delays',
    },
    {
      feature: 'Industry Longevity',
      atoz: `Continuous operations established in ${COMPANY_INFO.establishedYear}`,
      others: 'Unvetted popup agencies operating with no track record',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900/60 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>THE A TO Z ADVANTAGE</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>STRATEGIC TRUCK ADVOCACY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            More Than Dispatching. We're Your Business Partner.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            In an industry filled with high promises and hidden agendas, A TO Z Logistic LLC stands on radical transparency, authentic relationships, and seasoned logistics execution.
          </p>
        </div>

        {/* Split Screen Layout: Photography + 6 Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          {/* Left Column: Dispatch Operations Imagery & Proof */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-full min-h-[380px]">
              <img
                src="/src/assets/images/dispatcher_professional_headset_1794412933814.jpg"
                alt="A TO Z Logistic dedicated freight dispatcher coordinating truck routes and broker confirmations"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                  Dedicated Carrier Desk
                </div>
                <p className="text-xs text-slate-300">
                  Every driver and fleet owner communicates directly with a dedicated dispatcher who treats your business like their own.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Differentiators Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-orange-500/40 transition-colors">
                  {getIconForDifferentiator(idx)}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Comparison Table */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-900/40">
            <h3 className="text-xl font-bold text-white mb-1">
              Why Motor Carriers Switch to A TO Z Logistic LLC
            </h3>
            <p className="text-xs text-slate-400">
              See the concrete operational difference between working with our dedicated team versus traditional middlemen.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 uppercase font-semibold text-[11px] tracking-wider">
                  <th className="py-4 px-6">Operational Factor</th>
                  <th className="py-4 px-6 text-orange-400 bg-orange-500/5">A TO Z Logistic LLC</th>
                  <th className="py-4 px-6 text-slate-400">Typical Dispatchers / Brokers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap sm:whitespace-normal">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-200 bg-orange-500/5">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{row.atoz}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-900/30 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              No long-term lock-in contracts. Dispatch services operate on mutual performance.
            </span>
            <button
              onClick={onGetStarted}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors cursor-pointer"
            >
              Partner With Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
