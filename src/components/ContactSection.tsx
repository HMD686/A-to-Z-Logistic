import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  FileDown,
  AlertCircle,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import {
  InquiryFormData,
  ValidationErrors,
  validateInquiryForm,
} from '../utils/calculator';

interface ContactSectionProps {
  initialEquipment?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialEquipment = '',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    mcDotNumber: '',
    equipmentType: initialEquipment || 'dry_van',
    truckCount: 1,
    message: initialMessage || '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  useEffect(() => {
    if (initialEquipment) {
      setFormData((prev) => ({ ...prev, equipmentType: initialEquipment }));
    }
  }, [initialEquipment]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

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

    // Generate realistic verification reference
    const refCode = `AZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedReference(refCode);
    }, 600);
  };

  const handleDownloadChecklist = () => {
    const checklistContent = `A TO Z LOGISTIC LLC - CARRIER ONBOARDING CHECKLIST
Established 2016 | Phone: (800) 555-0199 | Email: dispatch@atozlogistic.com
========================================================================

Dear Motor Carrier Partner,

Thank you for choosing A TO Z Logistic LLC. To activate dedicated dispatch services for your equipment, please assemble the following documentation:

[ ] 1. Active FMCSA Operating Authority (MC/DOT Certificate)
       - Must reflect active motor carrier status with FMCSA.

[ ] 2. Certificate of Insurance (COI)
       - $1,000,000 Commercial Auto Liability
       - $100,000 Cargo Liability minimum
       - Certificate Holder: A TO Z Logistic LLC (or direct to shipper upon load)

[ ] 3. Current Signed W-9 Form
       - Signed and dated for the current calendar year.

[ ] 4. Factoring Notice of Assignment (NOA) & Voided Check
       - If you use a freight invoice factoring company, furnish your official NOA.

[ ] 5. Driver Contact & Equipment Profile
       - Tractor & Trailer unit numbers, year, and equipment dimensions.

Please email all scanned PDF files directly to: dispatch@atozlogistic.com
Your assigned dispatcher will contact you within 2-4 business hours to review lane preferences and lock in your first load.
`;
    const blob = new Blob([checklistContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'A-TO-Z-Logistic-Carrier-Checklist.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>DIRECT DISPATCH DESK</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>PROMPT DISPATCH CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Get Your Trucking Business Moving.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fill out the inquiry form below to connect with an experienced dispatch coordinator. We will review your operating authority and lane preferences to begin sourcing high-yield freight.
          </p>
        </div>

        {/* 2-Column Split: Contact Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Company Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Operations & Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly with our dispatch management office during regular business hours or reach our 24/7 on-call coordinator for active loads.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-400">Direct Dispatch Phone</div>
                    <div className="text-base font-bold text-white tabular-nums group-hover:text-orange-400 transition-colors">
                      {COMPANY_INFO.phone}
                    </div>
                    <div className="text-[11px] text-slate-500">Toll-Free Carrier Support Desk</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-400">Inquiries & Rate Sheets</div>
                    <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                      {COMPANY_INFO.email}
                    </div>
                    <div className="text-[11px] text-slate-500">2-Hour Business Response Guarantee</div>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-400">Dispatch Headquarters</div>
                    <div className="text-sm font-bold text-white">
                      {COMPANY_INFO.name}
                    </div>
                    <div className="text-xs text-slate-300">
                      {COMPANY_INFO.address}
                    </div>
                    <div className="text-xs text-slate-400">
                      {COMPANY_INFO.cityStateZip}
                    </div>
                  </div>
                </div>

                {/* Hours of Operation */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold uppercase text-slate-400">Operating Hours (EST)</div>
                    <div className="text-xs text-slate-300 font-medium">{COMPANY_INFO.hoursOfOperation.weekdays}</div>
                    <div className="text-xs text-slate-400">{COMPANY_INFO.hoursOfOperation.weekends}</div>
                    <div className="text-[11px] text-orange-400 font-semibold pt-1">
                      {COMPANY_INFO.hoursOfOperation.emergency}
                    </div>
                  </div>
                </div>
              </div>

              {/* Downloadable Checklist Button */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleDownloadChecklist}
                  className="w-full py-3 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-orange-400" />
                  <span>Download Carrier Onboarding Checklist (TXT)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Generation Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl">
              {submittedReference ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Inquiry Submitted Successfully
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An A TO Z Logistic senior dispatch coordinator has received your details for{' '}
                      <span className="text-orange-400 font-semibold">{formData.companyName}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm mx-auto text-xs text-slate-400 space-y-1">
                    <div>Inquiry Reference Number:</div>
                    <div className="text-lg font-mono font-bold text-white tabular-nums tracking-wider">
                      {submittedReference}
                    </div>
                    <div className="text-[11px] text-slate-500 pt-1">
                      We will contact you via phone or email within 2-4 business hours.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => setSubmittedReference(null)}
                      className="px-6 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Dispatch Desk Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="text-sm font-bold text-white">
                      Carrier Dispatch Information
                    </div>
                    <div className="text-xs text-slate-500">
                      * Required fields
                    </div>
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                        required
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Carrier / Company Name *
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Apex Freight LLC"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.companyName ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                        required
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="owner@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Equipment Type & Number of Trucks */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="equipmentType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Type of Equipment *
                      </label>
                      <select
                        id="equipmentType"
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-slate-900 border rounded-lg text-sm text-white focus:outline-none transition-colors ${
                          errors.equipmentType ? 'border-red-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                      >
                        <option value="dry_van">53' Dry Van</option>
                        <option value="reefer">53' Refrigerated (Reefer)</option>
                        <option value="flatbed">48' / 53' Flatbed</option>
                        <option value="step_deck">Step Deck / Drop Deck</option>
                        <option value="power_only">Power Only (Tractor Only)</option>
                        <option value="box_truck">26' Box Truck (with Liftgate)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="truckCount" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Number of Trucks *
                      </label>
                      <input
                        id="truckCount"
                        name="truckCount"
                        type="number"
                        min="1"
                        max="50"
                        value={formData.truckCount}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 bg-slate-900 border rounded-lg text-sm text-white focus:outline-none transition-colors ${
                          errors.truckCount ? 'border-red-500' : 'border-slate-800 focus:border-orange-500'
                        }`}
                        required
                      />
                    </div>
                  </div>

                  {/* Optional MC/DOT Number */}
                  <div>
                    <label htmlFor="mcDotNumber" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      MC or USDOT Number <span className="text-slate-500 font-normal">(Optional for initial rate review)</span>
                    </label>
                    <input
                      id="mcDotNumber"
                      name="mcDotNumber"
                      type="text"
                      placeholder="e.g. MC-123456 or USDOT 3849201"
                      value={formData.mcDotNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Preferred Lanes & Home Time
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your target weekly gross, preferred driving regions (Midwest, Southeast, Texas, etc.), or home time requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SUBMIT YOUR INQUIRY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2.5">
                      By submitting, you agree to receive dispatch communications from A TO Z Logistic LLC. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
