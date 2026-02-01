"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  Sparkles,
  Zap,
  Target,
  Brain,
  Workflow,
  Lock,
  ArrowRight,
  Star,
  Rocket,
  Globe,
} from "lucide-react";

const stats = [
  { value: 1000, suffix: "+", label: "Hours Saved Weekly", icon: Zap },
  { value: 100, suffix: "%", label: "Client Retention", icon: Star },
  { value: 6, suffix: " Weeks", label: "Avg. Deployment", icon: Rocket },
];

const values = [
  {
    title: "Radical Transparency",
    description:
      "No jargon. No hidden fees. We explain what we're building, how it works, and what it costs. You'll always know exactly where you stand.",
    icon: Target,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0,
  },
  {
    title: "Results-Obsessed",
    description:
      "We only recommend solutions that deliver real ROI. If automation won't save you meaningful time or money, we'll tell you upfront.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    delay: 0.1,
  },
  {
    title: "UK-First Focus",
    description:
      "We work exclusively with UK businesses. Same timezone, same business culture, and we understand UK data protection requirements.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.2,
  },
];

const techStack = [
  {
    name: "AI Models",
    description:
      "We primarily use Claude, Anthropic's AI assistant, for its strong reasoning capabilities and safety features.",
    icon: Brain,
    color: "bg-violet-500",
  },
  {
    name: "Automation",
    description:
      "Built on n8n, connecting to hundreds of business tools. Seamless integration with software you already use.",
    icon: Workflow,
    color: "bg-blue-500",
  },
  {
    name: "Data Security",
    description:
      "Your data stays yours. UK data protection best practices.",
    icon: Lock,
    color: "bg-emerald-500",
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
      {/* Epic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-foreground to-blue-900/20" />

          {/* Floating orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-full blur-3xl"
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          {/* Main headline with staggered animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
          >
            We Build
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              The Future
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Enterprise-grade AI automation, made accessible for UK SMEs.
            We handle the complexity so you can focus on growth.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Massive Numbers */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-50 via-transparent to-blue-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Impact That Speaks
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers don&apos;t lie. Here&apos;s what we&apos;ve achieved together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white mb-6 shadow-lg shadow-violet-500/25"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section - Cinematic */}
      <section className="py-32 bg-muted relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-6"
              >
                Our Mission
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Making AI Work
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">
                  For Everyone
                </span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Every SME owner knows the feeling: spending hours on tasks that don&apos;t
                  grow your business. Writing the same reports. Categorizing expenses.
                  Hunting for information across scattered documents.
                </p>
                <p>
                  <span className="text-foreground font-semibold">AI can handle this work now</span>—but
                  most businesses don&apos;t have the time or expertise to implement it themselves.
                </p>
                <p>
                  We exist to bridge that gap. Enterprise-grade automation, zero technical complexity.
                </p>
              </div>
            </motion.div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />

                {/* Card stack effect */}
                <div className="relative space-y-4">
                  {[
                    { label: "Manual Process", time: "5 hours", color: "bg-red-100 text-red-700 border-red-200" },
                    { label: "With Delegate", time: "30 minutes", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`${item.color} border rounded-2xl p-6 shadow-lg`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{item.label}</span>
                        <span className="text-2xl font-bold">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-foreground rounded-full flex items-center justify-center shadow-xl"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Bold Cards */}
      <section className="py-32 bg-foreground relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-violet-500/10 via-transparent to-blue-500/10"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-white/60">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: value.delay }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} text-white mb-6 shadow-lg`}
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powered By The Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technology to deliver reliable, secure, and powerful automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="h-full bg-muted rounded-3xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-xl">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${tech.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Epic CTA Section */}
      <section className="relative py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              backgroundSize: "100% 100%",
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let&apos;s have a conversation about your challenges and how AI can solve them.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShinyButton className="bg-white text-foreground hover:bg-gray-100 text-lg px-10 py-6 shadow-2xl shadow-black/25">
                <Link href="/contact" className="flex items-center gap-3">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ShinyButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
