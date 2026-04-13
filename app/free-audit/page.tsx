"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Video, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const painPoints = [
  "You're doing the same manual tasks every week that feel impossible to get off your plate",
  "You know AI could probably help, but you don't have time to figure out where to start",
  "Every tool you've tried has been more work to set up than it saves",
  "Your competitors are getting faster — you can feel it",
];

const whatYouGet = [
  {
    num: "1",
    title: "Fill in a 5-minute form",
    desc: "Tell us about your business and your biggest admin bottleneck.",
  },
  {
    num: "2",
    title: "We analyse your workflow",
    desc: "We review your answers and identify where AI creates the highest ROI for your specific situation.",
  },
  {
    num: "3",
    title: "Receive your personalised Loom video",
    desc: "A 5–10 minute video showing exactly what to automate and how. Delivered within 48 hours.",
  },
];

const videoIncludes = [
  "3 specific automations tailored to your business type",
  "Realistic time savings for each (in hours per week)",
  "What tools would be used",
  "A clear recommendation on whether a Delegate retainer makes sense for you",
];

const staffOptions = ["1–5", "6–20", "21–50", "50+"];
const hoursOptions = ["1–5 hrs/week", "5–10 hrs/week", "10–20 hrs/week", "20+ hrs/week"];

export default function FreeAuditPage() {
  const [form, setForm] = useState({
    name: "",
    businessType: "",
    staffCount: "",
    bottleneck: "",
    hoursLost: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
              </span>
              <span className="text-sm font-medium text-[#8B8C95]">Free — no catch, no pitch</span>
            </motion.div>
            <h1 className="text-5xl font-bold tracking-tight text-[#F3F4F6] sm:text-6xl uppercase leading-tight">
              Find 3 Hours You&apos;re Losing{" "}
              <span className="text-[#FF5A1F]">Every Week</span>
            </h1>
            <p className="mt-6 text-xl text-[#8B8C95] leading-relaxed">
              Free AI Operations Audit for UK SMEs — we review your workflow and record a
              personalised video with 3 specific automations you can implement.
              Delivered within 48 hours.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 bg-[#FF5A1F] text-white px-8 py-4 font-bold text-lg hover:bg-[#FF7040] transition-colors shadow-[0_0_30px_rgba(255,90,31,0.3)]"
              >
                Get My Free Audit <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
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

      {/* How it works + Form (2-col) */}
      <section id="audit-form" className="py-20 relative">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
              Here&apos;s what we do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: What you get */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Steps */}
              <div className="space-y-6">
                {whatYouGet.map((step, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#FF5A1F] text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F3F4F6] mb-1">{step.title}</h3>
                      <p className="text-[#8B8C95] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's in the video */}
              <div className="bg-[#16181D] border border-[#1E2028] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-5 h-5 text-[#FF5A1F]" />
                  <h3 className="text-base font-bold text-[#F3F4F6] uppercase tracking-wider">What&apos;s in the video</h3>
                </div>
                <ul className="space-y-3">
                  {videoIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00E676] flex-shrink-0 mt-0.5" />
                      <span className="text-[#8B8C95] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social proof */}
              <div className="bg-[#16181D] border border-[#FF5A1F]/20 p-6 shadow-[0_0_30px_rgba(255,90,31,0.06)]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#00E676]" />
                  <span className="text-xs font-bold text-[#00E676] uppercase tracking-wider">Real outcome</span>
                </div>
                <p className="text-[#F3F4F6] leading-relaxed">
                  &ldquo;A 3-person property consultancy spent 6 hours a week on client update emails.
                  We built them a workflow that sends personalised status updates automatically.
                  They now spend 20 minutes on what took 6 hours.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#16181D] border border-[#1E2028] p-8"
            >
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-[#00E676] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#F3F4F6] mb-3">You&apos;re in the queue</h3>
                  <p className="text-[#8B8C95]">
                    We&apos;ll review your workflow and send your personalised video within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#F3F4F6] mb-2">Get your free audit</h2>
                  <p className="text-[#8B8C95] text-sm mb-8">Takes 5 minutes. Delivered within 48 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#F3F4F6] mb-2">Your name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-[#0B0C10] border border-[#1E2028] text-[#F3F4F6] px-4 py-3 text-sm placeholder-[#8B8C95] focus:outline-none focus:border-[#FF5A1F]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#F3F4F6] mb-2">Business type / industry</label>
                      <input
                        type="text"
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        placeholder="e.g. Property consultancy, Recruitment agency"
                        className="w-full bg-[#0B0C10] border border-[#1E2028] text-[#F3F4F6] px-4 py-3 text-sm placeholder-[#8B8C95] focus:outline-none focus:border-[#FF5A1F]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#F3F4F6] mb-2">How many staff?</label>
                      <select
                        name="staffCount"
                        required
                        value={form.staffCount}
                        onChange={handleChange}
                        className="w-full bg-[#0B0C10] border border-[#1E2028] text-[#F3F4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#FF5A1F]/60 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select…</option>
                        {staffOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#F3F4F6] mb-2">
                        What&apos;s your biggest manual admin bottleneck?
                      </label>
                      <textarea
                        name="bottleneck"
                        required
                        value={form.bottleneck}
                        onChange={handleChange}
                        rows={4}
                        placeholder="e.g. Every week I manually compile reports from 3 different spreadsheets and email them to 12 clients…"
                        className="w-full bg-[#0B0C10] border border-[#1E2028] text-[#F3F4F6] px-4 py-3 text-sm placeholder-[#8B8C95] focus:outline-none focus:border-[#FF5A1F]/60 transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#F3F4F6] mb-2">How many hours per week does this cost you?</label>
                      <select
                        name="hoursLost"
                        required
                        value={form.hoursLost}
                        onChange={handleChange}
                        className="w-full bg-[#0B0C10] border border-[#1E2028] text-[#F3F4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#FF5A1F]/60 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select…</option>
                        {hoursOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#F3F4F6] mb-2">Email address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@yourbusiness.co.uk"
                        className="w-full bg-[#0B0C10] border border-[#1E2028] text-[#F3F4F6] px-4 py-3 text-sm placeholder-[#8B8C95] focus:outline-none focus:border-[#FF5A1F]/60 transition-colors"
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-[#FF5A1F] text-white px-6 py-4 font-bold text-base hover:bg-[#FF7040] transition-colors shadow-[0_0_20px_rgba(255,90,31,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? "Sending…" : <>Send Me the Audit <ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk reversal */}
      <section className="py-16 pb-24 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#16181D] border border-[#1E2028] p-8 md:p-12 text-center"
          >
            <div className="w-14 h-14 bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-7 h-7 text-[#00E676]" />
            </div>
            <h2 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">Zero risk. Actually zero.</h2>
            <p className="text-[#8B8C95] text-lg leading-relaxed max-w-2xl mx-auto">
              It&apos;s free. No pitch unless you want one. If our recommendations aren&apos;t useful,
              you&apos;ve lost 5 minutes filling in a form. That&apos;s the worst case.
            </p>
            <div className="mt-8">
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 bg-[#FF5A1F] text-white px-8 py-4 font-bold text-lg hover:bg-[#FF7040] transition-colors shadow-[0_0_30px_rgba(255,90,31,0.3)]"
              >
                Get My Free Audit <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
