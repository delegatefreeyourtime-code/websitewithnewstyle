"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";

// Dynamic import with SSR disabled for Three.js component
const LiquidGradient = dynamic(
  () => import("@/components/ui/flow-gradient-hero-section"),
  {
    ssr: false,
    loading: () => <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100" />
  }
);

const steps = [
  {
    number: "1",
    title: "We respond",
    description: "Within 24 hours, we'll reply with some initial thoughts and questions.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    number: "2",
    title: "Discovery call",
    description: "A 30-minute call to understand your needs and explore solutions.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "3",
    title: "Clear proposal",
    description: "Within 48 hours of our call, you'll have a detailed proposal with fixed pricing.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Liquid Gradient Background - fixed behind everything */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <LiquidGradient className="w-full h-full" />
      </div>

      {/* Glass Filter for liquid glass effects */}
      <GlassFilter />

      {/* Page Content - above the gradient */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full px-4 py-1.5 mb-6 shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground">We respond within 24 hours</span>
              </motion.div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl drop-shadow-sm">
                Get In{" "}
                <GradientText className="text-5xl sm:text-6xl font-bold">
                  Touch
                </GradientText>
              </h1>
              <p className="mt-6 text-xl text-foreground/80">
                Tell us about your business and what you&apos;d like to automate.
                We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassEffect className="rounded-3xl p-8 hover:scale-[1.01]">
                  <div className="w-full">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                    <ContactForm />
                  </div>
                </GlassEffect>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-6">
                  {/* Email */}
                  <GlassEffect className="rounded-3xl p-6 hover:scale-[1.02]">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Email us</h3>
                        <p className="text-foreground/70 mb-2">We&apos;ll respond within 24 hours</p>
                        <a
                          href="mailto:freeyourtime@delegate-me.com"
                          className="text-foreground font-medium hover:underline"
                        >
                          freeyourtime@delegate-me.com
                        </a>
                      </div>
                    </div>
                  </GlassEffect>

                  {/* Location */}
                  <GlassEffect className="rounded-3xl p-6 hover:scale-[1.02]">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Based in the UK</h3>
                        <p className="text-foreground/70">Working with SMEs across Britain</p>
                      </div>
                    </div>
                  </GlassEffect>

                  {/* Response Time */}
                  <GlassEffect className="rounded-3xl p-6 hover:scale-[1.02]">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">Quick response</h3>
                        <p className="text-foreground/70">Average response time under 12 hours</p>
                      </div>
                    </div>
                  </GlassEffect>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <GlassEffect className="rounded-3xl p-8 md:p-12 items-center justify-center">
              <div className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12 w-full"
                >
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    What happens next?
                  </h2>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                >
                  {steps.map((step) => (
                    <motion.div key={step.number} variants={itemVariants}>
                      <div className="text-center group flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 bg-gradient-to-br ${step.gradient} text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold shadow-lg`}
                        >
                          {step.number}
                        </motion.div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-foreground/70">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </GlassEffect>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-16 pb-24 overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
            <div className="rounded-3xl p-8 md:p-12 bg-black shadow-2xl">
              <div className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center w-full"
                >
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                    No pressure, no obligation
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    We&apos;re here to help you understand what&apos;s possible with AI automation.
                    Even if we&apos;re not the right fit, you&apos;ll leave with actionable insights.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
