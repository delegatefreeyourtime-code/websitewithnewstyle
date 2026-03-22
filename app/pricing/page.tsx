"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ROICalculator from "@/components/ROICalculator";

type BillingPeriod = "monthly" | "yearly";

interface Plan {
  planName: string;
  description: string;
  monthlyPrice: string;
  monthlySubtext: string;
  yearlyPrice: string;
  yearlySubtext: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const pricingPlans: Plan[] = [
  {
    planName: "Starter",
    description: "Perfect for trying AI automation with a single solution",
    monthlyPrice: "£400",
    monthlySubtext: "– 600 / mo",
    yearlyPrice: "£4,000",
    yearlySubtext: "– 6,000 / yr",
    features: [
      "1 AI automation solution",
      "Full setup & integration",
      "Monthly maintenance",
      "Email support",
      "Performance monitoring",
    ],
    buttonText: "Choose Starter",
  },
  {
    planName: "Growth",
    description: "For businesses ready to automate multiple workflows",
    monthlyPrice: "£800",
    monthlySubtext: "– 1,200 / mo",
    yearlyPrice: "£8,000",
    yearlySubtext: "– 12,000 / yr",
    features: [
      "2-3 AI automation solutions",
      "Priority maintenance",
      "Email & video call support",
      "Weekly usage reports",
      "Quarterly optimisation",
    ],
    buttonText: "Choose Growth",
    isPopular: true,
  },
  {
    planName: "Scale",
    description: "Enterprise-grade automation across your business",
    monthlyPrice: "£1,500",
    monthlySubtext: "– 2,500 / mo",
    yearlyPrice: "£15,000",
    yearlySubtext: "– 25,000 / yr",
    features: [
      "4+ AI automation solutions",
      "24-hour maintenance SLA",
      "Dedicated support",
      "Custom reporting dashboards",
      "Monthly optimisation calls",
    ],
    buttonText: "Choose Scale",
  },
];

const faqs = [
  {
    question: "What's included in the setup fee?",
    answer:
      "The setup fee covers everything needed to get your automation running: discovery sessions to understand your workflow, solution design, building the automation, integration with your existing tools, testing, and training your team. You'll have a fully working system at the end.",
  },
  {
    question: "What does 'monthly maintenance' include?",
    answer:
      "Monthly maintenance covers hosting, monitoring, updates, and fixes. If something breaks or needs adjusting, we handle it. We also keep your AI models up to date and optimise performance based on usage patterns.",
  },
  {
    question: "Can I upgrade or change solutions later?",
    answer:
      "Absolutely. We designed our tiers to grow with your business. Adding new solutions or upgrading your tier is straightforward. We'll discuss the scope and provide a clear quote for any changes.",
  },
  {
    question: "Why the price ranges?",
    answer:
      "Every business is different. The exact price depends on complexity, integrations needed, and data volume. We'll give you a fixed quote after our discovery call. No surprises.",
  },
  {
    question: "Do I own the automations you build?",
    answer:
      "Yes. We build on your infrastructure where possible, and you retain full ownership of the systems, prompts, and workflows we create. If you ever want to bring maintenance in-house, we'll help with the transition.",
  },
  {
    question: "What if it doesn't work for my use case?",
    answer:
      "We're honest upfront about what AI can and can't do. If we don't think automation will deliver ROI for your specific situation, we'll tell you during the discovery call. No hard sell.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-[#1E2028]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-base font-semibold text-[#F3F4F6] pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-[#8B8C95] flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-[#8B8C95] leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
}

function PricingCard({ plan, billingPeriod }: { plan: Plan; billingPeriod: BillingPeriod }) {
  const isMonthly = billingPeriod === "monthly";
  const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
  const subtext = isMonthly ? plan.monthlySubtext : plan.yearlySubtext;

  return (
    <div
      className={cn(
        "relative flex flex-col p-8 border transition-all duration-300",
        plan.isPopular
          ? "border-[#FF5A1F] bg-[#16181D] shadow-[0_0_40px_rgba(255,90,31,0.12)]"
          : "border-[#1E2028] bg-[#16181D] hover:border-[#FF5A1F]/40"
      )}
    >
      {plan.isPopular && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-[#FF5A1F]" />
      )}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FF5A1F] text-white text-[11px] font-semibold tracking-[0.1em] uppercase">
          Most Popular
        </div>
      )}

      <div className="mb-5">
        <h2 className="text-xl font-bold text-[#F3F4F6] tracking-tight uppercase">{plan.planName}</h2>
        <p className="text-sm text-[#8B8C95] mt-1">{plan.description}</p>
      </div>

      <div className="my-6 flex items-baseline gap-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="text-4xl font-bold text-[#F3F4F6]"
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.span
            key={subtext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-[#8B8C95]"
          >
            {subtext}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#1E2028] mb-6" />

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-[#8B8C95]">
            <Check className="h-4 w-4 text-[#00E676] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={cn(
          "inline-flex items-center justify-center w-full py-3 text-sm font-semibold tracking-wide transition-colors",
          plan.isPopular
            ? "bg-[#FF5A1F] text-white hover:bg-[#FF7040] shadow-[0_0_20px_rgba(255,90,31,0.3)] hover:shadow-[0_0_30px_rgba(255,90,31,0.5)]"
            : "border border-[#FF5A1F]/40 text-[#F3F4F6] hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10"
        )}
      >
        {plan.buttonText}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <>
      {/* Pricing Section */}
      <section className="py-24 bg-[#0B0C10] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,90,31,0.07) 0%, transparent 60%)" }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h1 className="text-4xl font-bold text-[#F3F4F6] sm:text-5xl md:text-6xl uppercase tracking-tight">
              Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-[#8B8C95] max-w-2xl mx-auto">
              No hidden fees. Clear tiers. Choose what fits your business.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-14"
          >
            <span className={cn("text-sm font-semibold tracking-wide", billingPeriod === "monthly" ? "text-[#F3F4F6]" : "text-[#8B8C95]")}>
              Monthly
            </span>

            <button
              onClick={() => setBillingPeriod(p => p === "monthly" ? "yearly" : "monthly")}
              className="relative w-12 h-6 bg-[#1E2028] border border-[#2A2C35] transition-colors"
              aria-label="Toggle billing period"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className={cn(
                  "absolute top-1 w-4 h-4 bg-[#FF5A1F]",
                  billingPeriod === "monthly" ? "left-1" : "left-7"
                )}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={cn("text-sm font-semibold tracking-wide", billingPeriod === "yearly" ? "text-[#F3F4F6]" : "text-[#8B8C95]")}>
                Yearly
              </span>
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase border border-[#00E676]/30 bg-[#00E676]/10 text-[#00E676] px-2 py-0.5">
                Save ~17%
              </span>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.planName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <PricingCard plan={plan} billingPeriod={billingPeriod} />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center text-sm text-[#8B8C95] mt-8"
          >
            All plans include a free discovery call. Fixed quote within 48 hours.
          </motion.p>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* FAQ Section */}
      <section className="py-24 bg-[#16181D] relative z-10">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B0C10] relative z-10">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-[#8B8C95]">
              Book a discovery call and we&apos;ll give you a clear quote within 48 hours.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-[#FF5A1F] text-white font-semibold tracking-wide hover:bg-[#FF7040] transition-colors shadow-[0_0_20px_rgba(255,90,31,0.3)] hover:shadow-[0_0_30px_rgba(255,90,31,0.5)]"
              >
                Book a Discovery Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
