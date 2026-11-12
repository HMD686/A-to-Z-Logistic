import React from 'react';
import { ShieldCheck, HeartHandshake, Target, Clock, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { COMPANY_INFO, TIMELINE_MILESTONES } from '../data/companyData';

interface AboutSectionProps {
  onContactUs: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactUs }) => {
  return (
    <section id="about" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>ABOUT A TO Z LOGISTIC LLC</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>SERVING SINCE {COMPANY_INFO.establishedYear}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Built on Experience. Driven by Reliability.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Since {COMPANY_INFO.establishedYear}, A TO Z Logistic LLC has been helping trucking businesses navigate the complex, fast-moving freight industry. We started with a fundamental belief: independent carriers and owner-operators deserve institutional-grade dispatching that puts their revenue, family schedules, and road safety first.
          </p>
        </div>

        {/* Company Background & Photo Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-xl font-bold text-white">
              The Evolution of Carrier Advocacy
            </h3>
            <p>
              When A TO Z Logistic LLC was founded in 2016, the freight industry was shifting rapidly toward electronic broker platforms. While load availability increased, rates often became opaque, and motor carriers were frequently caught in one-sided broker contracts with unpaid detention and delayed check calls.
            </p>
            <p>
              We built our firm as a dedicated carrier advocate. When we negotiate a rate, we negotiate under your carrier authority, with 100% transparency. We never take kickbacks from brokers, we never skim margins off rate sheets, and we never pressure a driver into an unsafe lane.
            </p>
            <p>
              Over a decade of continuous service, we have dispatched millions of road miles across the continental 48 states, building enduring relationships with both independent owner-operators and top-tier North American freight brokerages.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-medium text-slate-200">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-orange-400 font-bold mb-1">Carrier-First Policy</div>
                <div className="text-slate-400">Zero forced dispatch and absolute final refusal rights on every booking.</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-orange-400 font-bold mb-1">Direct Rate Cons</div>
                <div className="text-slate-400">Original broker rate agreements delivered straight to your email.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="/src/assets/images/dispatch_operations_room_1794412933315.jpg"
                alt="A TO Z Logistic LLC modern dispatch operations command center with real-time freight scheduling"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified US Dispatch Operations</span>
                </div>
                <p className="text-xs text-slate-300">
                  Continuous lane monitoring, direct broker check calls, and active route optimization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.missionStatement}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              Actionable Carrier Support · Zero Compromises
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.visionStatement}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              Integrity Across Every American Interstate
            </div>
          </div>
        </div>

        {/* Interactive Timeline of Milestones (2016 to Present) */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-800">
          <div className="max-w-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              Our Journey: Serving America's Freight Since 2016
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              A decade of steady growth, carrier loyalty, and relentless logistics refinement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-2xl font-black text-orange-400 font-mono mb-2">
                  {item.year}
                </div>
                <div className="w-full h-1 bg-slate-800 mb-4 group-hover:bg-orange-500/60 transition-colors" />
                <h4 className="text-sm font-bold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Ready to see how experienced dispatching transforms your weekly gross?
            </span>
            <button
              onClick={onContactUs}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
