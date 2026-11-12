/**
 * Pure calculation and validation logic for A TO Z Logistic LLC
 */

export interface RevenueCalculationParams {
  equipmentType: string;
  milesPerWeek: number;
  ratePerMile: number;
}

export interface RevenueEstimate {
  weeklyGross: number;
  monthlyGross: number;
  annualGross: number;
  estimatedFuelAndTollEstimate: number;
  estimatedNetToCarrier: number;
  averageRatePerMile: number;
}

export const EQUIPMENT_BENCHMARKS: Record<string, { label: string; defaultRate: number; minRate: number; maxRate: number; avgWeeklyMiles: number }> = {
  dry_van: {
    label: 'Dry Van (53\')',
    defaultRate: 2.65,
    minRate: 2.10,
    maxRate: 3.40,
    avgWeeklyMiles: 2500,
  },
  reefer: {
    label: 'Refrigerated / Reefer (53\')',
    defaultRate: 2.95,
    minRate: 2.40,
    maxRate: 3.90,
    avgWeeklyMiles: 2700,
  },
  flatbed: {
    label: 'Flatbed (48\' / 53\')',
    defaultRate: 3.15,
    minRate: 2.50,
    maxRate: 4.20,
    avgWeeklyMiles: 2300,
  },
  step_deck: {
    label: 'Step Deck / Drop Deck',
    defaultRate: 3.35,
    minRate: 2.70,
    maxRate: 4.50,
    avgWeeklyMiles: 2200,
  },
  power_only: {
    label: 'Power Only',
    defaultRate: 2.35,
    minRate: 1.90,
    maxRate: 3.10,
    avgWeeklyMiles: 2800,
  },
  box_truck: {
    label: 'Box Truck (26\')',
    defaultRate: 2.45,
    minRate: 1.80,
    maxRate: 3.20,
    avgWeeklyMiles: 1800,
  },
};

export function calculateRevenueEstimate(params: RevenueCalculationParams): RevenueEstimate {
  const miles = Math.max(0, params.milesPerWeek || 0);
  const rate = Math.max(0, params.ratePerMile || 0);

  const weeklyGross = Math.round(miles * rate);
  const monthlyGross = Math.round(weeklyGross * 4.333);
  const annualGross = Math.round(weeklyGross * 52);

  // Industry average operational expense estimation (fuel, maintenance, tolls ~42-48%)
  const estimatedFuelAndTollEstimate = Math.round(weeklyGross * 0.44);
  const estimatedNetToCarrier = Math.max(0, weeklyGross - estimatedFuelAndTollEstimate);

  return {
    weeklyGross,
    monthlyGross,
    annualGross,
    estimatedFuelAndTollEstimate,
    estimatedNetToCarrier,
    averageRatePerMile: rate,
  };
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  mcDotNumber?: string;
  equipmentType: string;
  truckCount: number | string;
  message?: string;
}

export interface ValidationErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  equipmentType?: string;
  truckCount?: string;
}

export function validateInquiryForm(data: InquiryFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full legal name or dispatch contact.';
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your carrier company name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  // Relaxed phone check: at least 7 digits
  const digits = (data.phone || '').replace(/\D/g, '');
  if (digits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit US phone number.';
  }

  if (!data.equipmentType || data.equipmentType.trim() === '') {
    errors.equipmentType = 'Please select your primary equipment type.';
  }

  const count = Number(data.truckCount);
  if (isNaN(count) || count < 1) {
    errors.truckCount = 'Please indicate at least 1 truck.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}
