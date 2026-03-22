"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Zap, Star, Rocket, Target, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: 34, suffix: "", label: "Hours Saved Weekly on Average Per Client", icon: Zap },
  { value: 100, suffix: "%", label: "Client Retention", icon: Star },
  { value: 6, suffix: " Weeks", label: "Avg. Deployment", icon: Rocket },
];

const values = [
  {
    title: "Radical Transparency",
    description:
      "No jargon. No hidden fees. We explain what we're building and how it works. You'll always know exactly where you stand.",
    icon: Target,
  },
  {
    title: "Results-Obsessed",
    description:
      "We only recommend solutions that deliver real ROI. If automation won't save you meaningful time or money, we'll tell you upfront.",
    icon: Zap,
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,90,31,0.08) 0%, transparent 60%)" }}
        />
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-[#1E2028] bg-[#16181D] px-4 py-1.5 mb-8"
          >
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8B8C95]">About Delegate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-tight text-[#F3F4F6] mb-6 uppercase leading-[1.05]"
          >
            We Build
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="block text-[#FF5A1F]"
            >
              The Future
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-[#8B8C95] max-w-2xl mx-auto leading-relaxed"
          >
            Enterprise-grade AI automation, made accessible for UK SMEs.
            We handle the complexity so you can focus on growth.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-[#16181D] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-6">Our Mission</Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-8 leading-tight uppercase">
                Making AI Work
                <span className="block text-[#FF5A1F]">For Everyone</span>
              </h2>

              <div className="space-y-6 text-[#8B8C95] leading-relaxed">
                <p>
                  Every SME owner knows the feeling: spending hours on tasks that don&apos;t
                  grow your business. Writing the same reports. Categorizing expenses.
                  Hunting for information across scattered documents.
                </p>
                <p>
                  <span className="text-[#F3F4F6] font-semibold">AI can handle this work now</span>, but
                  most businesses don&apos;t have the time or expertise to implement it themselves.
                </p>
                <p>
                  We exist to bridge that gap. Enterprise-grade automation, zero technical complexity.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="bg-[#0B0C10] border border-[#1E2028] p-6 hover:border-[#FF5A1F]/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#FF5A1F] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#00E676]">
                            <AnimatedCounter
                              value={stat.value}
                              suffix={stat.suffix}
                              duration={2.5}
                            />
                          </div>
                          <p className="text-[#8B8C95] text-sm">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#0B0C10] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,90,31,0.04) 0%, transparent 70%)" }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-4 uppercase">
              What We Stand For
            </h2>
            <p className="text-xl text-[#8B8C95]">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full bg-[#16181D] border border-[#1E2028] p-8 hover:border-[#FF5A1F]/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#FF5A1F] flex items-center justify-center text-white mb-6 shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">
                      {value.title}
                    </h3>
                    <p className="text-[#8B8C95] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-[#16181D] overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,90,31,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F3F4F6] mb-6 uppercase">
              Ready to Transform
              <span className="block text-[#FF5A1F]">Your Business?</span>
            </h2>

            <p className="text-xl text-[#8B8C95] mb-12 max-w-2xl mx-auto">
              Let&apos;s have a conversation about your challenges and how AI can solve them.
            </p>

            <Link href="/contact">
              <ShinyButton className="text-lg px-10 py-4">
                Start Your Journey
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </ShinyButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
