"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const steps = [
  {
    number: "1",
    title: "We respond",
    description: "Within 24 hours, we'll reply with some initial thoughts and questions.",
  },
  {
    number: "2",
    title: "Discovery call",
    description: "A 30-minute call to understand your needs and explore solutions.",
  },
  {
    number: "3",
    title: "Clear proposal",
    description: "Within 48 hours of our call, you'll have a detailed proposal with fixed pricing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
      <div className="relative z-10">
        {/* Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-overlay" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
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
                className="inline-flex items-center gap-2 border border-[#1E2028] bg-[#16181D] px-4 py-1.5 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
                </span>
                <span className="text-sm font-medium text-[#8B8C95]">We respond within 24 hours</span>
              </motion.div>
              <h1 className="text-5xl font-bold tracking-tight text-[#F3F4F6] sm:text-6xl uppercase">
                Get In{" "}
                <span className="text-[#FF5A1F]">Touch</span>
              </h1>
              <p className="mt-6 text-xl text-[#8B8C95]">
                Tell us about your business and what you&apos;d like to automate.
                We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#16181D] border border-[#1E2028] p-8"
              >
                <h2 className="text-2xl font-bold text-[#F3F4F6] mb-6">Send us a message</h2>
                <ContactForm />
              </motion.div>

              {/* Contact Info + Calendly */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                {/* Calendly inline embed */}
                <div className="bg-[#16181D] border border-[#1E2028] p-4">
                  <h3 className="text-base font-semibold text-[#F3F4F6] mb-1">Book a discovery call</h3>
                  <p className="text-[#8B8C95] text-sm mb-4">Pick a time that works for you — 30 minutes, no obligation.</p>
                  <iframe
                    src="https://calendly.com/delegate-freeyourtime?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&background_color=16181D&text_color=F3F4F6&primary_color=FF5A1F"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Book a discovery call with Delegate"
                    className="min-w-0"
                  />
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="bg-[#16181D] border border-[#1E2028] p-6 hover:border-[#FF5A1F]/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FF5A1F] flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#F3F4F6] mb-1">Email us</h3>
                        <p className="text-[#8B8C95] text-sm mb-2">We&apos;ll respond within 24 hours</p>
                        <a
                          href="mailto:freeyourtime@delegate-me.com"
                          className="text-[#FF5A1F] font-medium hover:text-[#FF7040] transition-colors text-sm"
                        >
                          freeyourtime@delegate-me.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-[#16181D] border border-[#1E2028] p-6 hover:border-[#FF5A1F]/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1E2028] flex items-center justify-center text-[#8B8C95] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#F3F4F6] mb-1">Based in the UK</h3>
                        <p className="text-[#8B8C95] text-sm">Working with SMEs across Britain</p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-[#16181D] border border-[#1E2028] p-6 hover:border-[#00E676]/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center text-[#00E676] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#F3F4F6] mb-1">Quick response</h3>
                        <p className="text-[#8B8C95] text-sm">Average response time under 12 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 relative">
          <div className="absolute inset-0 grid-overlay" />
          <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
            <div className="bg-[#16181D] border border-[#1E2028] p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
                  What happens next?
                </h2>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {steps.map((step) => (
                  <motion.div key={step.number} variants={itemVariants}>
                    <div className="text-center flex flex-col items-center">
                      <div className="w-14 h-14 bg-[#FF5A1F] text-white flex items-center justify-center mb-6 text-2xl font-bold shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-[#F3F4F6] mb-3">{step.title}</h3>
                      <p className="text-[#8B8C95] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-16 pb-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="p-8 md:p-12 bg-[#16181D] border border-[#FF5A1F]/20 shadow-[0_0_40px_rgba(255,90,31,0.06)]">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl mb-4 uppercase">
                    No pressure, no obligation
                  </h2>
                  <p className="text-xl text-[#8B8C95] max-w-2xl mx-auto">
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
