import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type !== null) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close legal terms"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 id="legal-modal-title" className="text-xl font-bold text-white">
                  Privacy Policy
                </h3>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.name} · Effective January 1, 2026
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <p>
                At <strong>{COMPANY_INFO.name}</strong>, we respect the privacy of the motor carriers, drivers, and fleet owners who partner with us. This Privacy Policy details how we handle carrier operational data.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">1. Information We Collect</h4>
              <p>
                We collect business information strictly necessary to dispatch freight and book loads on your behalf, including: legal company name, FMCSA MC/DOT numbers, Certificate of Insurance, IRS Form W-9, driver dispatch contact numbers, and factoring company Notice of Assignment (NOA).
              </p>

              <h4 className="text-sm font-bold text-white pt-2">2. How We Use Carrier Information</h4>
              <p>
                Information collected is used solely to: (a) submit carrier setup packets to verified freight brokers, (b) secure legitimate broker rate confirmations under your operating authority, and (c) communicate freight updates, check calls, and delivery schedules.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">3. Non-Disclosure & Security</h4>
              <p>
                We never sell, rent, or trade your carrier records, driver contact numbers, or rate history to unauthorized third-party marketing companies. Data is protected using encrypted enterprise transmission and secure storage.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">4. Contacting Us</h4>
              <p>
                If you have questions regarding your data, contact our operations management at {COMPANY_INFO.email} or call {COMPANY_INFO.phone}.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 id="legal-modal-title" className="text-xl font-bold text-white">
                  Terms & Conditions
                </h3>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.name} · Dispatch Service Standards
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <p>
                Welcome to <strong>{COMPANY_INFO.name}</strong>. By engaging our truck dispatching services, motor carriers agree to the following operational standards.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">1. Scope of Dispatch Services</h4>
              <p>
                {COMPANY_INFO.name} acts as an independent dispatch service representing licensed motor carriers in searching, negotiating, and coordinating freight. We operate as the carrier’s authorized dispatch liaison with shippers and freight brokers.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">2. No Forced Dispatch</h4>
              <p>
                Carriers maintain 100% final refusal authority on all proposed freight loads. No load will be officially booked with a freight broker until the carrier reviews and approves the lane, schedule, and rate confirmation terms.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">3. Carrier Obligations</h4>
              <p>
                The carrier certifies that it maintains active FMCSA operating authority, valid commercial liability and cargo insurance, and compliant equipment and drivers conforming to all federal and state Department of Transportation regulations.
              </p>

              <h4 className="text-sm font-bold text-white pt-2">4. Payment & Factoring</h4>
              <p>
                Original broker rate confirmations are provided directly to the carrier. Freight billing and invoice collection occur directly between the freight broker, the carrier, and/or the carrier’s designated factoring partner.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
