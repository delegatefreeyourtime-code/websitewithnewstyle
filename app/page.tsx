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
import { DotPattern } from "@/components/ui/grid-pattern";
import { ProductRevealCard } from "@/components/ui/product-reveal-card";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    name: "AI Proposal Generator",
    description:
      "Transform client briefs into professionally written proposals in minutes. Save 3-5 hours per proposal with AI-powered writing that matches your brand voice.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    name: "Knowledge Chatbot",
    description:
      "Give your team instant access to company knowledge via an intelligent RAG chatbot. Reduce internal support queries by 60% and onboard new hires faster.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
  },
  {
    name: "Lead Scoring System",
    description:
      "Automatically discover and qualify prospects with web scraping and AI analysis. Generate 50-200 qualified leads per month without manual research.",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=600&fit=crop",
  },
  {
    name: "Status Reports",
    description:
      "Generate comprehensive project updates automatically from your tools. Save 2-4 hours per week on reporting and never miss a deadline again.",
    image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=800&h=600&fit=crop",
  },
  {
    name: "Expense Categorization",
    description:
      "Stop manually categorizing receipts. AI-powered expense sorting that saves 5-10 hours per month on bookkeeping and improves accuracy.",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Hours saved weekly" },
  { value: 90, suffix: "%", label: "Task accuracy" },
  { value: 6, suffix: " weeks", label: "Avg. deployment" },
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
    title: "GDPR Compliant",
    description: "Built with privacy first",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24/7 Support",
    description: "We're always here to help",
  },
];


export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Rest of page content - needs to be above the fixed hero background */}
      <div className="relative z-20 bg-white">


      {/* Solutions Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <DotPattern className="opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Solutions</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Done-for-you AI automation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We build, deploy, and manage AI tools that save you hours every
              week
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductRevealCard
                  name={solution.name}
                  description={solution.description}
                  image={solution.image}
                  onAdd={() => window.location.href = '/contact'}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/solutions">
                View all solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" className="group">
              <Link href="/pricing">
                See pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-gradient" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Results that speak for themselves
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How we work together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From discovery to deployment in weeks, not months
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "We learn about your business, pain points, and goals to identify the best automation opportunities.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: "02",
                title: "Custom Proposal",
                description:
                  "You receive a detailed proposal with solution design, timeline, and fixed pricing within 48 hours.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "03",
                title: "Build & Deploy",
                description:
                  "We build, test, and deploy your automation. You get ongoing support and maintenance included.",
                gradient: "from-orange-500 to-red-500",
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
                  <div className="bg-white border border-border rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white font-bold text-lg mb-6`}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved by UK businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Why Delegate
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for UK businesses
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We understand the unique challenges facing UK SMEs. Our solutions
              are designed with your needs in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white/80 text-sm">
                Free discovery call - No obligation
              </span>
            </motion.div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Ready to automate?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Book a free discovery call and let&apos;s discuss how AI can
              transform your operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <ShinyButton className="text-lg px-10 py-5">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Book a Discovery Call
                </ShinyButton>
              </Link>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 text-lg px-8"
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
