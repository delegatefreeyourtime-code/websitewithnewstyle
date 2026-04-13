"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle2, Shield, Target, Clock, BarChart3, FileText } from "lucide-react";

const painPoints = [
  "Consultants spending hours reading CVs that don't meet the brief",
  "Candidates go cold between stages because follow-up falls through the cracks",
  "Weekly client reports built manually from data that already exists in your CRM",
  "Compliance documentation that takes hours but adds zero value to placements",
];

const whatWeBuild = [
  {
    Icon: Target,
    title: "CV screening and candidate scoring",
    desc: "AI ranks applicants against job criteria automatically — consultants see the shortlist, not the pile.",
  },
  {
    Icon: Clock,
    title: "Automated candidate follow-up sequences",
    desc: "Stage-triggered follow-up keeps candidates warm without consultants manually tracking every thread.",
  },
  {
    Icon: BarChart3,
    title: "Client reporting automation",
    desc: "Weekly updates pulled from your CRM and formatted automatically. No more manual report-building on Friday afternoons.",
  },
  {
    Icon: FileText,
    title: "Compliance document generation",
    desc: "Right-to-work checks, references, and compliance packs generated from existing data — not built from scratch each time.",
  },
];

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "We map your placement workflow and identify where consultants lose the most time to admin versus billable activity.",
  },
  {
    num: "2",
    title: "Build",
    desc: "We integrate with your ATS/CRM and build the automation layer. Typically live within 2–3 weeks.",
  },
  {
    num: "3",
    title: "Manage",
    desc: "Monthly refinement based on placement data. We optimise scoring criteria and follow-up sequences as your jobs change.",
  },
];

export default function ForRecruitmentPage() {
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
              <span className="text-sm font-medium text-[#8B8C95]">Built for UK recruitment agencies</span>
            </motion.div>
            <h1 className="text-5xl font-bold tracking-tight text-[#F3F4F6] sm:text-6xl uppercase leading-tight">
              Your Consultants Should Be Placing Candidates —{" "}
              <span className="text-[#FF5A1F]">Not Chasing Them</span>
            </h1>
            <p className="mt-6 text-xl text-[#8B8C95] leading-relaxed">
              We build AI systems that screen CVs, send follow-up sequences, and produce client
              reports automatically. Less admin. More placements.
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
              What we build for recruitment agencies
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
              <span className="text-xs font-bold text-[#00E676] uppercase tracking-wider">Real outcome — Apprentis client</span>
            </div>
            <p className="text-xl text-[#F3F4F6] leading-relaxed">
              &ldquo;A 3-person consultancy saving 6 hours a week on client update emails via automated
              workflow. We built a CV screening tool that saves 10+ hours of manual shortlisting per week for a recruitment agency client.&rdquo;
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
                If your consultants aren&apos;t saving 10+ hours per week within 30 days, we&apos;ll
                refund your first month. No questions asked.
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
                30 minutes. We&apos;ll map your biggest admin bottlenecks and give you a clear view
                of how many hours per week your team could reclaim.
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
              More placements, less admin
            </h2>
            <p className="text-[#8B8C95] text-lg mb-8 max-w-2xl mx-auto">
              Book a 30-minute call. We&apos;ll show you exactly how many hours your consultants
              are losing to work that should already be automated.
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
