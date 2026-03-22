"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen">
      <section className="relative min-h-screen w-full flex items-center justify-center" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-6 md:px-8 -mt-16 md:-mt-24">
          <div className="max-w-5xl mx-auto text-center">

            {/* Label chip */}
            <motion.div
              custom={-1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8B8C95] border border-[#1E2028] px-4 py-1.5">
                Done-For-You AI Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold mb-6 leading-[1.05] tracking-tight uppercase">
                <span className="text-[#F3F4F6]">
                  Automate Your
                </span>
                <br />
                <span className="text-[#FF5A1F]">
                  Operations.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-[#8B8C95] mb-10 leading-relaxed max-w-2xl mx-auto px-4 font-medium">
                Done-for-you AI automation: built, deployed, and managed by us.
                Stop drowning in repetitive tasks and focus on growing your business.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF5A1F] text-white font-semibold tracking-wide hover:bg-[#FF7040] transition-colors shadow-[0_0_30px_rgba(255,90,31,0.35)] hover:shadow-[0_0_40px_rgba(255,90,31,0.55)] group"
              >
                View Pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 border border-[#FF5A1F]/40 text-[#F3F4F6] font-semibold tracking-wide hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
            >
              {[
                { value: "10+", label: "Hours saved weekly" },
                { value: "6wk", label: "Average deployment" },
                { value: "UK", label: "Based & supported" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[#00E676]">{stat.value}</div>
                  <div className="text-[11px] text-[#8B8C95] tracking-[0.1em] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
