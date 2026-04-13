"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  CalendarCheck,
  AlertCircle,
  CheckCircle2,
  Shield,
  Wrench,
} from "lucide-react";

const painPoints = [
  {
    text: "You're on a job and your phone rings. You can't answer. By the time you call back, they've already booked someone else.",
  },
  {
    text: "You're spending evenings quoting, scheduling, and chasing customers — time you should be resting.",
  },
  {
    text: "No-shows eat into your week. You drove 40 minutes for someone who forgot.",
  },
  {
    text: "Your competitors are advertising the same services. The one who picks up the phone wins.",
  },
];

const stats = [
  { label: "Average missed call value", value: "£400" },
  { label: "Calls answered", value: "100%" },
  { label: "Setup time", value: "1 week" },
];

const industries = [
  "Plumbers",
  "Electricians",
  "Builders",
  "Roofers",
  "HVAC Engineers",
  "Pest Control",
  "Locksmiths",
];

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "We spend 30 minutes understanding your booking process, typical job types, and availability. No technical knowledge required.",
  },
  {
    num: "2",
    title: "Build",
    desc: "We configure your AI voice assistant and connect it to your calendar. Ready within one week.",
  },
  {
    num: "3",
    title: "Manage",
    desc: "We monitor performance, update scripts, and refine the system monthly. You focus on the work.",
  },
];

export default function ForTradesPage() {
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
              <Wrench className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span className="text-sm font-medium text-[#8B8C95]">Built for UK trades businesses</span>
            </motion.div>
            <h1 className="text-5xl font-bold tracking-tight text-[#F3F4F6] sm:text-6xl uppercase leading-tight">
              Every Missed Call Is a{" "}
              <span className="text-[#FF5A1F]">Lost Job</span>
            </h1>
            <p className="mt-6 text-xl text-[#8B8C95] leading-relaxed">
              UK trades businesses lose £200–£2,000 per unanswered call. Our AI picks up, books
              the job, and follows up — automatically. You just do the work.
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
                Book Free Discovery Call <ArrowRight className="w-5 h-5" />
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

      {/* Stats bar */}
      <section className="py-8 bg-[#16181D] border-y border-[#1E2028]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1E2028]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center py-6 px-8"
              >
                <p className="text-3xl font-bold text-[#FF5A1F] mb-1">{stat.value}</p>
                <p className="text-sm text-[#8B8C95]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Section */}
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
              If you&apos;re in trades, you know this feeling
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
                <p className="text-[#8B8C95] leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#16181D] border border-[#1E2028] p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-[#F3F4F6] mb-6 uppercase">What we build for you</h2>
              <p className="text-[#8B8C95] text-lg leading-relaxed mb-8">
                Our AI voice assistant answers every call, collects job details, checks your
                availability, and books the appointment. No app for the customer. No admin for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { Icon: Phone, label: "Answers every call", sub: "Even at 2am on bank holidays" },
                  { Icon: CalendarCheck, label: "Books the job", sub: "Straight into your calendar" },
                  { Icon: Clock, label: "Sends follow-ups", sub: "Reminders reduce no-shows" },
                ].map(({ Icon, label, sub }, i) => (
                  <div key={i} className="bg-[#0B0C10] border border-[#1E2028] p-5 text-center">
                    <div className="w-12 h-12 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-[#FF5A1F]" />
                    </div>
                    <p className="text-[#F3F4F6] font-semibold text-sm mb-1">{label}</p>
                    <p className="text-[#8B8C95] text-xs">{sub}</p>
                  </div>
                ))}
              </div>
              {/* Industries */}
              <div>
                <p className="text-xs font-bold text-[#8B8C95] uppercase tracking-wider mb-3">Industries we serve</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <span key={ind} className="bg-[#0B0C10] border border-[#1E2028] text-[#8B8C95] px-3 py-1 text-xs font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
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
              workflow. What used to take a full working day now runs overnight without anyone touching it.&rdquo;
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
                If you don&apos;t see a measurable difference in answered calls and booked jobs
                within 30 days, we&apos;ll refund your first month. No questions.
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
                <Phone className="w-6 h-6 text-[#FF5A1F]" />
              </div>
              <h3 className="text-lg font-bold text-[#F3F4F6] mb-3 uppercase">Free discovery call</h3>
              <p className="text-[#8B8C95] leading-relaxed text-sm">
                30 minutes. We&apos;ll tell you exactly what&apos;s possible for your trade and give
                you a clear number on how many jobs you&apos;re currently missing.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 bg-[#16181D] border border-[#1E2028] p-6 text-center"
          >
            <p className="text-[#8B8C95] mb-1 text-sm">Pricing anchor</p>
            <p className="text-[#F3F4F6] text-lg font-semibold">
              Starting from <span className="text-[#FF5A1F]">£600/month</span> — less than 2 missed jobs pays for itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA bottom */}
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
            <h2 className="text-3xl font-bold text-[#F3F4F6] mb-4 uppercase">Stop losing jobs to voicemail</h2>
            <p className="text-[#8B8C95] text-lg mb-8 max-w-2xl mx-auto">
              Book a 30-minute call. We&apos;ll show you exactly how many calls you&apos;re missing
              and what that costs you annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5A1F] text-white px-8 py-4 font-bold text-lg hover:bg-[#FF7040] transition-colors shadow-[0_0_30px_rgba(255,90,31,0.3)]"
              >
                Book Free Discovery Call <ArrowRight className="w-5 h-5" />
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
