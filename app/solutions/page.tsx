"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Solutions ordered from most expensive to least expensive
const solutions: CardStackItem[] = [
  {
    id: "lead-scoring",
    title: "Web Scrapers + Lead Scoring",
    description: "Automatically discover and qualify prospects with intelligent web scraping and AI-powered lead scoring. Generate 50-200 qualified leads per month without manual research. Includes custom scoring criteria and CRM integration.",
    imageSrc: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=600&fit=crop",
    href: "/contact?solution=lead-scoring",
    tag: "50-200 qualified leads monthly",
    ctaLabel: "Get Started",
  },
  {
    id: "knowledge-chatbot",
    title: "Company Knowledge RAG Chatbot",
    description: "Give your team instant access to company knowledge via an intelligent AI chatbot. Reduce internal support queries by 60%, onboard new hires faster, and ensure consistent answers across your organisation. Works with your existing documents and systems.",
    imageSrc: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    href: "/contact?solution=knowledge-chatbot",
    tag: "Reduce queries by 60%",
    ctaLabel: "Get Started",
  },
  {
    id: "proposal-generator",
    title: "AI Proposal Generator",
    description: "Transform client briefs into professionally written proposals in minutes. Our AI learns your brand voice and proposal structure, delivering consistent, high-quality documents. Save 3-5 hours per proposal while maintaining your professional standards.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    href: "/contact?solution=proposal-generator",
    tag: "Save 3-5 hours per proposal",
    ctaLabel: "Get Started",
  },
  {
    id: "status-reports",
    title: "Automated Project Status Reports",
    description: "Generate comprehensive project updates automatically from your existing tools. Pull data from project management systems, time tracking, and communication tools to create polished status reports. Save 2-4 hours per week on reporting.",
    imageSrc: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=800&h=600&fit=crop",
    href: "/contact?solution=status-reports",
    tag: "Save 2-4 hours weekly",
    ctaLabel: "Get Started",
  },
  {
    id: "expense-categorization",
    title: "AI Expense Categorization",
    description: "Stop manually categorizing receipts and expenses. Our AI automatically sorts and categorizes your business expenses with high accuracy, integrating with your accounting software. Save 5-10 hours per month on bookkeeping tasks.",
    imageSrc: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    href: "/contact?solution=expense-categorization",
    tag: "Save 5-10 hours monthly",
    ctaLabel: "Get Started",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Solutions Card Stack */}
      <section className="py-24 pt-32 bg-muted relative overflow-hidden">
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
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
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
