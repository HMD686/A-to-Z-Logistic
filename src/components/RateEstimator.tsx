import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Fuel, ShieldAlert } from 'lucide-react';
import {
  EQUIPMENT_BENCHMARKS,
  calculateRevenueEstimate,
  formatCurrency,
} from '../utils/calculator';

interface RateEstimatorProps {
  onApplyEstimateToForm: (equipmentType: string, estimatedWeekly: number) => void;
}

export const RateEstimator: React.FC<RateEstimatorProps> = ({ onApplyEstimateToForm }) => {
  const [selectedEquipment, setSelectedEquipment] = useState<string>('dry_van');
  const [miles, setMiles] = useState<number>(2500);
  const [customRate, setCustomRate] = useState<number>(EQUIPMENT_BENCHMARKS['dry_van'].defaultRate);

  const handleEquipmentChange = (key: string) => {
    setSelectedEquipment(key);
    const benchmark = EQUIPMENT_BENCHMARKS[key];
    if (benchmark) {
      setCustomRate(benchmark.defaultRate);
      setMiles(benchmark.avgWeeklyMiles);
    }
  };

  const estimate = calculateRevenueEstimate({
    equipmentType: selectedEquipment,
    milesPerWeek: miles,
    ratePerMile: customRate,
  });

  const benchmark = EQUIPMENT_BENCHMARKS[selectedEquipment];

  return (
    <section id="calculator" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            <span>DISPATCH REVENUE SIMULATOR</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>TRANSPARENT REVENUE MODELING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Carrier Revenue & Rate Estimator
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            See what your equipment could gross with structured dispatch coordination, route sequencing, and professional rate negotiations. Adjust your equipment type and weekly miles below.
          </p>
        </div>

        {/* 2-Column Split Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Your Primary Equipment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {Object.entries(EQUIPMENT_BENCHMARKS).map(([key, item]) => {
                  const isSelected = selectedEquipment === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleEquipmentChange(key)}
                      className={`p-3 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-500/10 border-orange-500 text-white font-semibold'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="truncate">{item.label}</div>
                      <div className="text-[11px] text-slate-500 mt-1 tabular-nums">
                        Benchmark: ${item.defaultRate.toFixed(2)}/mi
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Weekly Miles Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="miles-slider" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Estimated Weekly Loaded Miles
                </label>
                <span className="text-sm font-bold text-orange-400 tabular-nums">
                  {miles.toLocaleString()} miles / week
                </span>
              </div>
              <input
                id="miles-slider"
                type="range"
                min="1000"
                max="3600"
                step="50"
                value={miles}
                onChange={(e) => setMiles(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 tabular-nums">
                <span>1,000 mi (Short Regional)</span>
                <span>2,500 mi (Standard OTR)</span>
                <span>3,600 mi (Team / Max)</span>
              </div>
            </div>

            {/* Target Rate Per Mile Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="rate-slider" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Negotiated Rate Per Mile (RPM)
                </label>
                <span className="text-sm font-bold text-orange-400 tabular-nums">
                  ${customRate.toFixed(2)} / mi
                </span>
              </div>
              <input
                id="rate-slider"
                type="range"
                min={benchmark ? benchmark.minRate : 1.8}
                max={benchmark ? benchmark.maxRate : 4.5}
                step="0.05"
                value={customRate}
                onChange={(e) => setCustomRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 tabular-nums">
                <span>Min: ${benchmark?.minRate.toFixed(2)}</span>
                <span className="text-slate-400">Avg Market: ${benchmark?.defaultRate.toFixed(2)}</span>
                <span>Max: ${benchmark?.maxRate.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                Calculations are benchmark estimates derived from spot and contract lane averages.
                Actual earnings vary by operating corridors, seasonal market swings, and carrier schedule preferences.
              </span>
            </div>
          </div>

          {/* Right Column: Output Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                    Projected Weekly Gross
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums mt-1 text-orange-400">
                    {formatCurrency(estimate.weeklyGross)}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-b border-slate-800">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Monthly Projected Gross</span>
                  <div className="text-xl font-bold text-white tabular-nums mt-1">
                    {formatCurrency(estimate.monthlyGross)}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Annual Gross Potential</span>
                  <div className="text-xl font-bold text-white tabular-nums mt-1">
                    {formatCurrency(estimate.annualGross)}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Est. Fuel & Overheads (~44%)</span>
                  <div className="text-sm font-semibold text-slate-300 tabular-nums mt-1">
                    ~{formatCurrency(estimate.estimatedFuelAndTollEstimate)}/wk
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Est. Net Take-Home</span>
                  <div className="text-sm font-semibold text-emerald-400 tabular-nums mt-1">
                    ~{formatCurrency(estimate.estimatedNetToCarrier)}/wk
                  </div>
                </div>
              </div>

              {/* What A TO Z Logistic LLC Does */}
              <div className="pt-6 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Dedicated dispatcher actively hunting for ${customRate.toFixed(2)}+ RPM lanes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Continuous backhaul route planning to keep empty deadhead under 8%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Zero forced dispatch — you approve every load rate confirmation</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() =>
                  onApplyEstimateToForm(benchmark ? benchmark.label : selectedEquipment, estimate.weeklyGross)
                }
                className="w-full py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-99"
              >
                <span>Lock In This Route Plan & Request Dispatch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
