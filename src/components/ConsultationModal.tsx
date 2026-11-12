import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, AlertCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import {
  InquiryFormData,
  ValidationErrors,
  validateInquiryForm,
} from '../utils/calculator';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetEquipment?: string;
  presetMessage?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetEquipment,
  presetMessage,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    mcDotNumber: '',
    equipmentType: presetEquipment || 'dry_van',
    truckCount: 1,
    message: presetMessage || '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (presetEquipment) {
      setFormData((prev) => ({ ...prev, equipmentType: presetEquipment }));
    }
    if (presetMessage) {
      setFormData((prev) => ({ ...prev, message: presetMessage }));
    }
  }, [presetEquipment, presetMessage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    const ref = `AZ-CONSULT-${Math.floor(10000 + Math.random() * 90000)}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(ref);
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Consultation Request Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A senior dispatch specialist will review your equipment profile and contact you within 2 business hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-xs mx-auto text-xs text-slate-400">
              <div>Reference Code:</div>
              <div className="text-base font-mono font-bold text-white tabular-nums tracking-wider mt-0.5">
                {submittedRef}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us Directly</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>A TO Z LOGISTIC LLC · FREE CARRIER CONSULTATION</span>
              </div>
              <h3 id="consultation-modal-title" className="text-2xl font-bold text-white">
                Request a Free Dispatch Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Tell us about your equipment and lane requirements. No fees, no obligations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-fullName" className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="modal-fullName"
                    name="fullName"
                    type="text"
                    placeholder="Marcus Turner"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 bg-slate-950 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-slate-800 focus:border-orange-500'
                    }`}
                    required
                  />
                  {errors.fullName && <p className="text-[10px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="modal-companyName" className="block text-xs font-medium text-slate-300 mb-1">
                    Carrier Name *
                  </label>
                  <input
                    id="modal-companyName"
                    name="companyName"
                    type="text"
                    placeholder="Turner Express LLC"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 bg-slate-950 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-slate-800 focus:border-orange-500'
                    }`}
                    required
                  />
                  {errors.companyName && <p className="text-[10px] text-red-400 mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    placeholder="turner@turnerexpress.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 bg-slate-950 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-800 focus:border-orange-500'
                    }`}
                    required
                  />
                  {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2 bg-slate-950 border rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-orange-500'
                    }`}
                    required
                  />
                  {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-equipmentType" className="block text-xs font-medium text-slate-300 mb-1">
                    Equipment *
                  </label>
                  <select
                    id="modal-equipmentType"
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="dry_van">53' Dry Van</option>
                    <option value="reefer">53' Reefer</option>
                    <option value="flatbed">48'/53' Flatbed</option>
                    <option value="step_deck">Step Deck / Drop Deck</option>
                    <option value="power_only">Power Only</option>
                    <option value="box_truck">26' Box Truck</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-truckCount" className="block text-xs font-medium text-slate-300 mb-1">
                    Number of Trucks *
                  </label>
                  <input
                    id="modal-truckCount"
                    name="truckCount"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.truckCount}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-medium text-slate-300 mb-1">
                  Preferred Corridors or Questions
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={2}
                  placeholder="e.g. Need Midwest-Southeast reefer runs, home every weekend..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
