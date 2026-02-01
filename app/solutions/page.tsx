"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Solutions with AI Proposal Generator first, consistent abstract mesh gradient images
const solutions: CardStackItem[] = [
  {
    id: "proposal-generator",
    title: "AI Proposal Generator",
    description: "Transform client briefs into professionally written proposals in minutes. Our AI learns your brand voice and proposal structure, delivering consistent, high-quality documents.",
    imageSrc: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop",
    href: "/contact?solution=proposal-generator",
    ctaLabel: "Get Started",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Automatically discover and qualify prospects with intelligent web scraping and AI-powered lead scoring. Includes custom scoring criteria and CRM integration.",
    imageSrc: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
    href: "/contact?solution=lead-scoring",
    ctaLabel: "Get Started",
  },
  {
    id: "knowledge-chatbot",
    title: "Company Knowledge RAG Chatbot",
    description: "Give your team instant access to company knowledge via an intelligent AI chatbot. Works with your existing documents and systems to onboard new hires faster and ensure consistent answers.",
    imageSrc: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop",
    href: "/contact?solution=knowledge-chatbot",
    ctaLabel: "Get Started",
  },
  {
    id: "status-reports",
    title: "Automated Project Status Reports",
    description: "Generate comprehensive project updates automatically from your existing tools. Pull data from project management systems, time tracking, and communication tools.",
    imageSrc: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop",
    href: "/contact?solution=status-reports",
    ctaLabel: "Get Started",
  },
  {
    id: "expense-categorization",
    title: "AI Expense Categorisation",
    description: "Stop manually categorising receipts and expenses. Our AI automatically sorts and categorises your business expenses with high accuracy, integrating with your accounting software.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    href: "/contact?solution=expense-categorization",
    ctaLabel: "Get Started",
  },
  {
    id: "custom-solution",
    title: "Custom Solution",
    description: "Need something specific? We'll build a tailored automation solution for your unique requirements. If you can describe it, we can probably automate it.",
    imageSrc: "https://images.unsplash.com/photo-1614850523011-8f49ffc73908?w=800&h=600&fit=crop",
    href: "/contact?solution=custom",
    ctaLabel: "Get in Touch",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Solutions Card Stack - transparent to show global liquid glass background */}
      <section className="py-24 pt-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Solutions
            </h1>
            <p className="mt-4 text-lg text-black/80 max-w-2xl mx-auto">
              Done-for-you AI automation, built and managed by us. Swipe to explore.
            </p>
          </motion.div>

          <CardStack
            items={solutions}
            initialIndex={0}
            autoAdvance
            intervalMs={3500}
            pauseOnHover
            showDots
            cardWidth={520}
            cardHeight={320}
            overlap={0.48}
            spreadDeg={42}
          />

          {/* Pricing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Transparent pricing with no hidden fees
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/pricing">
                View our pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <SparklesText
              text="Need something different?"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              colors={{ first: "#ffffff", second: "#a1a1aa" }}
            />
            <p className="mt-6 text-xl text-gray-300">
              We build custom AI solutions tailored to your specific workflows.
              If you can describe it, we can probably automate it.
            </p>
            <div className="mt-10">
              <ShinyButton className="bg-white text-foreground hover:bg-gray-100">
                <Link href="/contact" className="flex items-center gap-2">
                  Discuss Your Needs
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </ShinyButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
