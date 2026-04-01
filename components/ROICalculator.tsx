"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
}

function InputField({ label, value, onChange, prefix, suffix, min = 1, max = 999 }: InputFieldProps) {
  const [raw, setRaw] = useState(String(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaw(e.target.value);
    const num = Number(e.target.value);
    if (e.target.value !== "" && !isNaN(num)) {
      onChange(Math.max(min, Math.min(max, num)));
    }
  };

  const handleBlur = () => {
    const num = Number(raw);
    const clamped = isNaN(num) || raw === "" ? min : Math.max(min, Math.min(max, num));
    onChange(clamped);
    setRaw(String(clamped));
  };

  return (
    <div className="group">
      <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8B8C95] mb-2">
        {label}
      </label>
      <div className="flex items-center border-b border-[#1E2028] group-focus-within:border-[#FF5A1F] transition-colors pb-2">
        {prefix && <span className="text-[#8B8C95] text-lg font-semibold mr-1">{prefix}</span>}
        <input
          type="number"
          value={raw}
          min={min}
          max={max}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 bg-transparent text-[#F3F4F6] text-lg font-semibold focus:outline-none appearance-none w-full"
          style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
        />
        {suffix && <span className="text-[#8B8C95] text-sm ml-1">{suffix}</span>}
      </div>
    </div>
  );
}

interface MetricProps {
  label: string;
  value: string;
  size?: "sm" | "lg";
}

function Metric({ label, value, size = "sm" }: MetricProps) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div className={`font-bold text-[#00E676] leading-none ${size === "lg" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
        {value}
      </div>
      <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#8B8C95] mt-2">{label}</div>
    </motion.div>
  );
}

export default function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(25);
  const [staff, setStaff] = useState(2);

  const results = useMemo(() => {
    const automationRate = 0.7;
    const weeklySavingsHours = hours * staff * automationRate;
    const weeklySavings = weeklySavingsHours * rate;
    const monthlySavings = weeklySavings * 4.33;
    const annualSavings = monthlySavings * 12;

    // Mid-point of Growth plan monthly (£800-1200 → £1000)
    const growthPlanMid = 1000;
    const paybackMonths = monthlySavings > 0 ? Math.ceil(growthPlanMid / monthlySavings) : null;

    const fmt = (n: number) =>
      n >= 10000
        ? `£${(n / 1000).toFixed(0)}k`
        : `£${Math.round(n).toLocaleString("en-GB")}`;

    return {
      weeklySavingsHours: Math.round(weeklySavingsHours),
      monthlySavings: fmt(monthlySavings),
      annualSavings: fmt(annualSavings),
      paybackMonths,
    };
  }, [hours, rate, staff]);

  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      {/* Orange radial glow behind section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,230,118,0.04) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-[#00E676]/30 bg-[#00E676]/5 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#00E676]" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#00E676]">
              ROI Calculator
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#F3F4F6] sm:text-4xl uppercase tracking-tight">
            Calculate Your AI Automation Savings
          </h2>
          <p className="mt-4 text-[#8B8C95] max-w-xl mx-auto">
            See how much time and money you could reclaim by automating your manual tasks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#1E2028]"
        >
          {/* Inputs panel */}
          <div className="p-8 lg:p-10 bg-[#16181D] border-b lg:border-b-0 lg:border-r border-[#1E2028]">
            <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8B8C95] mb-8">
              Your Current Situation
            </h3>
            <div className="space-y-8">
              <InputField
                label="Hours spent on manual tasks per week"
                value={hours}
                onChange={setHours}
                suffix="hrs/wk"
                min={1}
                max={80}
              />
              <InputField
                label="Average hourly cost of staff time"
                value={rate}
                onChange={setRate}
                prefix="£"
                suffix="/hr"
                min={5}
                max={500}
              />
              <InputField
                label="Number of staff affected"
                value={staff}
                onChange={setStaff}
                suffix="staff"
                min={1}
                max={100}
              />
            </div>

            <p className="mt-8 text-xs text-[#8B8C95]/60 leading-relaxed">
              Based on 70% automation efficiency. Actual results will vary by workflow complexity.
            </p>
          </div>

          {/* Results panel */}
          <div className="p-8 lg:p-10 bg-[#0B0C10] flex flex-col justify-between">
            <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8B8C95] mb-8">
              Projected Savings
            </h3>

            <div className="flex-1 flex flex-col justify-center space-y-8">
              {/* Annual savings — hero metric */}
              <div className="text-center py-6 border border-[#00E676]/20 bg-[#00E676]/5 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,230,118,0.06) 0%, transparent 70%)" }}
                />
                <AnimatePresence mode="wait">
                  <Metric key={results.annualSavings} label="Annual savings" value={results.annualSavings} size="lg" />
                </AnimatePresence>
              </div>

              {/* Secondary metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border border-[#1E2028]">
                  <AnimatePresence mode="wait">
                    <Metric key={`wh-${results.weeklySavingsHours}`} label="Hours saved / week" value={`${results.weeklySavingsHours}h`} />
                  </AnimatePresence>
                </div>
                <div className="text-center p-4 border border-[#1E2028]">
                  <AnimatePresence mode="wait">
                    <Metric key={results.monthlySavings} label="Monthly savings" value={results.monthlySavings} />
                  </AnimatePresence>
                </div>
              </div>

              {results.paybackMonths !== null && (
                <motion.div
                  key={results.paybackMonths}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-[#8B8C95]"
                >
                  <span className="text-[#FF5A1F] font-semibold">
                    {results.paybackMonths <= 1 ? "< 1 month" : `~${results.paybackMonths} months`}
                  </span>
                  {" "}to ROI on the Growth plan
                </motion.div>
              )}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center w-full py-3.5 bg-[#FF5A1F] text-white font-semibold tracking-wide text-sm hover:bg-[#FF7040] transition-colors shadow-[0_0_20px_rgba(255,90,31,0.3)] hover:shadow-[0_0_30px_rgba(255,90,31,0.5)]"
            >
              Get Your Custom ROI Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
