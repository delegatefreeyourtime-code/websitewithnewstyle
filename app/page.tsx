"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Sparkles,
  FileText,
  MessageSquare,
  Target,
  BarChart3,
  Receipt,
} from "lucide-react";

const solutions = [
  {
    name: "AI Proposal Generator",
    description:
      "Transform client briefs into professionally written proposals in minutes. AI-powered writing that matches your brand voice.",
    Icon: <FileText className="w-6 h-6" />,
    href: "/contact?solution=proposals",
    cta: "Learn more",
    gradient: "bg-gradient-to-br from-[#FF5A1F]/10 via-transparent to-transparent",
    featured: true,
  },
  {
    name: "Knowledge Chatbot",
    description:
      "Give your team instant access to company knowledge via an intelligent RAG chatbot. Onboard new hires faster.",
    Icon: <MessageSquare className="w-6 h-6" />,
    href: "/contact?solution=chatbot",
    cta: "Learn more",
    gradient: "bg-gradient-to-br from-[#00E676]/8 via-transparent to-transparent",
  },
  {
    name: "Lead Scoring System",
    description:
      "Automatically discover and qualify prospects with web scraping and AI analysis.",
    Icon: <Target className="w-6 h-6" />,
    href: "/contact?solution=leads",
    cta: "Learn more",
    gradient: "bg-gradient-to-br from-[#FF5A1F]/8 via-transparent to-transparent",
  },
  {
    name: "Status Reports",
    description:
      "Generate comprehensive project updates automatically from your existing tools.",
    Icon: <BarChart3 className="w-6 h-6" />,
    href: "/contact?solution=reports",
    cta: "Learn more",
    gradient: "bg-gradient-to-br from-[#00E676]/8 via-transparent to-transparent",
  },
  {
    name: "Expense Categorisation",
    description:
      "AI-powered expense sorting that streamlines your bookkeeping and improves accuracy.",
    Icon: <Receipt className="w-6 h-6" />,
    href: "/contact?solution=expenses",
    cta: "Learn more",
    gradient: "bg-gradient-to-br from-[#FF5A1F]/8 via-transparent to-transparent",
  },
];

const testimonials = [
  {
    quote:
      "Delegate transformed how we handle proposals. What used to take hours now takes minutes, and the quality is consistently excellent.",
    author: "Sarah Mitchell",
    role: "Managing Director",
    company: "Creative Agency London",
    rating: 5,
  },
  {
    quote:
      "The knowledge chatbot has been a game-changer for our team. New hires get up to speed 3x faster now.",
    author: "James Chen",
    role: "Operations Manager",
    company: "TechStart UK",
    rating: 5,
  },
  {
    quote:
      "Finally, expense tracking that doesn't make me want to pull my hair out. The AI categorization is surprisingly accurate.",
    author: "Emma Williams",
    role: "Finance Director",
    company: "Growth Partners",
    rating: 5,
  },
];

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Lightning Fast",
    description: "Deploy in weeks, not months",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "No Technical Knowledge Required",
    description: "We handle all the complexity",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Around the Clock Support",
    description: "We're always here to help",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      <div className="relative z-20">

        {/* Solutions Preview */}
        <section className="py-24 bg-[#0B0C10] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl md:text-5xl uppercase">
                Done-for-you AI automation
              </h2>
              <p className="mt-4 text-lg text-[#8B8C95] max-w-2xl mx-auto">
                We build, deploy, and manage AI tools that save you hours every week
              </p>
            </motion.div>

            <BentoGrid className="max-w-5xl mx-auto">
              {solutions.map((solution, index) => (
                <BentoCard
                  key={solution.name}
                  name={solution.name}
                  description={solution.description}
                  Icon={solution.Icon}
                  href={solution.href}
                  cta={solution.cta}
                  index={index}
                  gradient={solution.gradient}
                  featured={solution.featured}
                />
              ))}
            </BentoGrid>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button asChild size="lg">
                <Link href="/pricing">
                  See pricing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-[#16181D] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay" />
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,90,31,0.08) 0%, transparent 70%)" }}
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl md:text-5xl uppercase">
                Results that speak for themselves
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {[
                { value: 10, suffix: "+", label: "Hours saved weekly" },
                { value: 6, suffix: " weeks", label: "Avg. deployment" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#00E676] mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="text-[#8B8C95] text-base uppercase tracking-[0.1em] text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="py-24 bg-[#0B0C10] relative">
          <div className="absolute inset-0 grid-overlay" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4">Process</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
                How we work together
              </h2>
              <p className="mt-4 text-lg text-[#8B8C95] max-w-2xl mx-auto">
                From discovery to deployment in weeks, not months
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description:
                    "We learn about your business, pain points, and goals to identify the best automation opportunities.",
                },
                {
                  step: "02",
                  title: "Custom Proposal",
                  description:
                    "You receive a detailed proposal with solution design, timeline, and fixed pricing within 48 hours.",
                },
                {
                  step: "03",
                  title: "Build & Deploy",
                  description:
                    "We build, test, and deploy your automation. You get ongoing support and maintenance included.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <TiltCard className="h-full">
                    <div className="bg-[#16181D] border border-[#1E2028] p-8 h-full hover:border-[#FF5A1F]/30 transition-colors duration-300">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF5A1F] text-white font-bold text-lg mb-6">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-[#F3F4F6] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#8B8C95] leading-relaxed">{item.description}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/how-it-works">
                  Learn more about our process
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#16181D] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
                Loved by UK businesses
              </h2>
              <p className="mt-4 text-lg text-[#8B8C95] max-w-2xl mx-auto">
                Don&apos;t just take our word for it
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-[#0B0C10] relative">
          <div className="absolute inset-0 grid-overlay" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4">Why Delegate</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl uppercase">
                Built for UK businesses
              </h2>
              <p className="mt-6 text-lg text-[#8B8C95]">
                We understand the unique challenges facing UK SMEs. Our solutions
                are designed with your needs in mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-[#16181D] border border-[#1E2028] hover:border-[#FF5A1F]/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF5A1F] text-white mb-4 shadow-[0_0_15px_rgba(255,90,31,0.3)]">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-[#F3F4F6] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#8B8C95]">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {[
                "UK-based support and development",
                "GDPR compliant by design",
                "Fixed pricing, no surprises",
                "Ongoing maintenance included",
                "Rapid deployment in weeks",
                "No technical knowledge required",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 hover:bg-[#16181D] transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#00E676] flex-shrink-0" />
                  <span className="text-[#8B8C95] text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-[#16181D] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5A1F]/5 blur-3xl animate-float" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E676]/5 blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#FF5A1F]/20 mb-8"
              >
                <Sparkles className="h-4 w-4 text-[#FF5A1F]" />
                <span className="text-[#8B8C95] text-sm tracking-wide">
                  Free discovery call — no obligation
                </span>
              </motion.div>

              <h2 className="text-4xl font-bold tracking-tight text-[#F3F4F6] sm:text-5xl md:text-6xl mb-6 uppercase">
                Ready to automate?
              </h2>
              <p className="text-xl text-[#8B8C95] mb-10 max-w-2xl mx-auto">
                Book a free discovery call and let&apos;s discuss how AI can
                transform your operations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <ShinyButton className="text-base px-10 py-4">
                    Book a Discovery Call
                  </ShinyButton>
                </Link>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-[#8B8C95] hover:text-[#F3F4F6] hover:bg-[#1E2028] text-base px-8"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
