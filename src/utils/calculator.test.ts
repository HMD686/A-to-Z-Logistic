import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateRevenueEstimate,
  validateInquiryForm,
  EQUIPMENT_BENCHMARKS,
  formatCurrency,
} from './calculator';

test('calculateRevenueEstimate accurately calculates gross and net figures', () => {
  const result = calculateRevenueEstimate({
    equipmentType: 'dry_van',
    milesPerWeek: 2500,
    ratePerMile: 3.0,
  });

  assert.equal(result.weeklyGross, 7500);
  assert.equal(result.annualGross, 7500 * 52);
  assert.equal(result.averageRatePerMile, 3.0);
  assert.ok(result.estimatedNetToCarrier > 0);
  assert.ok(result.estimatedFuelAndTollEstimate < result.weeklyGross);
});

test('calculateRevenueEstimate handles zero and negative numbers safely', () => {
  const result = calculateRevenueEstimate({
    equipmentType: 'reefer',
    milesPerWeek: -100,
    ratePerMile: 0,
  });

  assert.equal(result.weeklyGross, 0);
  assert.equal(result.annualGross, 0);
});

test('validateInquiryForm correctly flags missing or invalid fields', () => {
  const invalid = validateInquiryForm({
    fullName: '',
    companyName: '',
    email: 'not-an-email',
    phone: '123',
    equipmentType: '',
    truckCount: 0,
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.equipmentType);
  assert.ok(invalid.errors.truckCount);
});

test('validateInquiryForm validates complete valid carrier submission', () => {
  const valid = validateInquiryForm({
    fullName: 'Robert Sterling',
    companyName: 'Sterling Freight Logistics LLC',
    email: 'robert@sterlinglogistics.com',
    phone: '(312) 555-0142',
    mcDotNumber: 'MC-1049281',
    equipmentType: 'dry_van',
    truckCount: 3,
    message: 'Looking for OTR dry van dispatch for 3 units.',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('formatCurrency outputs correctly formatted USD numbers', () => {
  assert.equal(formatCurrency(8500), '$8,500');
  assert.equal(formatCurrency(0), '$0');
});

test('EQUIPMENT_BENCHMARKS contains required dry van and reefer data', () => {
  assert.ok(EQUIPMENT_BENCHMARKS.dry_van);
  assert.ok(EQUIPMENT_BENCHMARKS.reefer);
  assert.ok(EQUIPMENT_BENCHMARKS.flatbed);
});
