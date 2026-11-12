import React, { useState } from 'react';
import {
  Truck,
  Search,
  DollarSign,
  MessageSquare,
  Navigation,
  FileCheck,
  FileText,
  Briefcase,
  ChevronRight,
  Check,
  Shield,
  X,
  ArrowRight,
} from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'freight-dispatching':
        return <Truck className="w-5 h-5 text-orange-400" />;
      case 'load-searching-booking':
        return <Search className="w-5 h-5 text-orange-400" />;
      case 'rate-negotiation':
        return <DollarSign className="w-5 h-5 text-orange-400" />;
      case 'broker-communication':
        return <MessageSquare className="w-5 h-5 text-orange-400" />;
      case 'route-planning-coordination':
        return <Navigation className="w-5 h-5 text-orange-400" />;
      case 'carrier-setup-assistance':
        return <FileCheck className="w-5 h-5 text-orange-400" />;
      case 'paperwork-documentation-support':
        return <FileText className="w-5 h-5 text-orange-400" />;
      case 'administrative-dispatch-support':
        return <Briefcase className="w-5 h-5 text-orange-400" />;
      default:
        return <Truck className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900/40 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
              <span>CORE CAPABILITIES</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>8 COMPREHENSIVE SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Complete Truck Dispatching Solutions
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Every service is engineered to keep your commercial motor vehicles earning top dollar, eliminate paperwork bottlenecks, and insulate drivers from predatory broker practices.
            </p>
          </div>
          <div className="text-sm text-slate-400 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Accepting Dry Van, Reefer, Flatbed & Box Trucks</span>
          </div>
        </div>

        {/* 8 Service Cards Grid with Asymmetric Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-950 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-orange-500/40 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-semibold">{service.number}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Quiet unboxed metadata: equipment focus */}
                <div className="text-xs text-slate-500 mb-6 flex flex-wrap items-center gap-1.5">
                  <span className="font-medium text-slate-400">Equipment:</span>
                  <span>{service.equipmentFocus.slice(0, 2).join(', ')}</span>
                  {service.equipmentFocus.length > 2 && <span>+{service.equipmentFocus.length - 2} more</span>}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Request Dispatch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carrier Requirements Strip: What you need to get started */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Partner? Here Is What You Need to Get Started
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We uphold rigorous compliance to maintain our top standing with leading American brokers.
              To begin dispatching with A TO Z Logistic LLC, motor carriers must furnish the following:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-white">Active Authority</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Valid FMCSA Motor Carrier (MC) or DOT operating authority with active status.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-white">Certificate of Insurance</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                $1,000,000 Auto Liability and $100,000 Cargo coverage minimum.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-white">Signed W-9 Form</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Current IRS Form W-9 reflecting your legal carrier business entity and EIN.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-white">Factoring NOA</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Notice of Assignment (NOA) and voided check if factoring your freight invoices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal for Individual Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-orange-400 font-semibold">{selectedService.number} / 08</span>
                <h3 id="service-modal-title" className="text-xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Deliverables & What We Handle
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                Direct Business Impact
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedService.businessValue}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForInquiry(sName);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request Dispatch Assistance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
