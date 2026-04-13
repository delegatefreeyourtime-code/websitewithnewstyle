"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle2, Shield, FileText, Clock } from "lucide-react";

const painPoints = [
  "Fee earners spending hours on status update emails that could be automated",
  "New client onboarding involves the same manual document requests every time",
  "Billing admin slips through the cracks — unbilled time is lost revenue",
  "Your team is stretched, but the work that's costing them time isn't skilled work",
];

const whatWeBuild = [
  {
    Icon: FileText,
    title: "Automated client status updates",
    desc: "Workflows triggered by case stage changes — clients are kept informed without your team lifting a finger.",
  },
  {
    Icon: FileText,
    title: "Document intake systems",
    desc: "AI extracts and categorises incoming documents, routing them to the right matter automatically.",
  },
  {
    Icon: Clock,
    title: "Time capture and billing reminders",
    desc: "Automated prompts that reduce unbilled time and keep revenue from slipping through the cracks.",
  },
  {
    Icon: FileText,
    title: "Contract summary tools",
    desc: "AI drafts client-ready summaries from uploaded documents — cutting review prep time from 4 hours to 20 minutes.",
  },
];

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "We map your highest-volume admin workflows and identify where AI creates the most leverage for fee earners.",
  },
  {
    num: "2",
    title: "Build",
    desc: "We build and test the automation against real scenarios. Typically live within 2–3 weeks.",
  },
  {
    num: "3",
    title: "Manage",
    desc: "Monthly reviews, updates for new document types, and ongoing refinement. You own the output, we manage the system.",
  },
];

export default function ForSolicitorsPage() {
  return (
    <div className="relative min-h-screen bg-[#0B0C10]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-[#1E2028] bg-[#16181D] px-4 py-1.5 mb-6"
            >
              <span className="text-sm font-medium text-[#8B8C95]">Built for UK law firms</span>
            </motion.div>
            <h1 className="text-5xl font-bold tracking-tight text-[#F3F4F6] sm:text-6xl uppercase leading-tight">
              Your Lawyers Should Be Lawyering —{" "}
              <span className="text-[#FF5A1F]">Not Chasing Admin</span>
            </h1>
            <p className="mt-6 text-xl text-[#8B8C95] leading-relaxed">
              We build custom AI systems that handle client updates, document intake, and billing
              admin for UK law firms. Your team spends time on what only they can do.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5A1F] text-white px-8 py-4 font-bold text-lg hover:bg-[#FF7040] transition-colors shadow-[0_0_30px_rgba(255,90,31,0.3)]"
              >
                Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 border border-[#1E2028] text-[#8B8C95] px-8 py-4 font-medium text-lg hover:border-[#FF5A1F]/30 hover:text-[#F3F4F6] transition-colors"
              >
                Get a Free AI Audit →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
              Sound familiar?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#16181D] border border-[#1E2028] hover:border-[#FF5A1F]/30 transition-colors p-6 flex items-start gap-4"
              >
                <AlertCircle className="w-5 h-5 text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                <p className="text-[#8B8C95] leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
              What we build for law firms
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {whatWeBuild.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#16181D] border border-[#1E2028] hover:border-[#FF5A1F]/30 transition-colors p-6"
              >
                <div className="w-10 h-10 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#FF5A1F]" />
                </div>
                <h3 className="text-base font-bold text-[#F3F4F6] mb-2">{title}</h3>
                <p className="text-[#8B8C95] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
              How it works
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#16181D] border border-[#1E2028] hover:border-[#FF5A1F]/30 transition-colors p-8"
              >
                <div className="w-12 h-12 bg-[#FF5A1F] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#F3F4F6] mb-3 uppercase">{step.title}</h3>
                <p className="text-[#8B8C95] leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#16181D] border border-[#FF5A1F]/20 p-8 md:p-12 shadow-[0_0_40px_rgba(255,90,31,0.06)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
              <span className="text-xs font-bold text-[#00E676] uppercase tracking-wider">Real outcome</span>
            </div>
            <p className="text-xl text-[#F3F4F6] leading-relaxed">
              &ldquo;We built an AI system that drafts client-ready contract summaries from uploaded
              documents — cutting review prep time from 4 hours to 20 minutes.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Risk reversal */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#16181D] border border-[#1E2028] p-8"
            >
              <div className="w-12 h-12 bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#00E676]" />
              </div>
              <h3 className="text-lg font-bold text-[#F3F4F6] mb-3 uppercase">30-day guarantee</h3>
              <p className="text-[#8B8C95] leading-relaxed text-sm">
                If the automation doesn&apos;t deliver measurable time savings within 30 days,
                we&apos;ll refund your first month. No questions asked.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#16181D] border border-[#1E2028] p-8"
            >
              <div className="w-12 h-12 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 text-[#FF5A1F]" />
              </div>
              <h3 className="text-lg font-bold text-[#F3F4F6] mb-3 uppercase">Free discovery call</h3>
              <p className="text-[#8B8C95] leading-relaxed text-sm">
                30 minutes. We&apos;ll identify the highest-value automation opportunity in your firm
                and give you a clear picture of what&apos;s possible before you commit to anything.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24 relative">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#16181D] border border-[#FF5A1F]/20 p-8 md:p-12 text-center shadow-[0_0_40px_rgba(255,90,31,0.06)]"
          >
            <h2 className="text-3xl font-bold text-[#F3F4F6] mb-4 uppercase">
              Free your fee earners for the work that matters
            </h2>
            <p className="text-[#8B8C95] text-lg mb-8 max-w-2xl mx-auto">
              Book a 30-minute call and we&apos;ll show you exactly where your team is losing time
              to admin that could be automated today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5A1F] text-white px-8 py-4 font-bold text-lg hover:bg-[#FF7040] transition-colors shadow-[0_0_30px_rgba(255,90,31,0.3)]"
              >
                Book a Free Discovery Call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 border border-[#1E2028] text-[#8B8C95] px-8 py-4 font-medium text-lg hover:border-[#FF5A1F]/30 hover:text-[#F3F4F6] transition-colors"
              >
                Get a Free AI Audit →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
