"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const pricingPlans: PricingCardProps[] = [
  {
    planName: "Starter",
    description: "Perfect for trying AI automation with a single solution",
    price: "£400",
    priceSubtext: "-600/mo",
    features: [
      "1 AI automation solution",
      "Full setup & integration",
      "Monthly maintenance",
      "Email support",
      "Performance monitoring",
    ],
    buttonText: "Get Started",
    buttonHref: "/contact",
    buttonVariant: "secondary",
  },
  {
    planName: "Growth",
    description: "For businesses ready to automate multiple workflows",
    price: "£800",
    priceSubtext: "-1,200/mo",
    features: [
      "2-3 AI automation solutions",
      "Priority maintenance",
      "Email & video call support",
      "Weekly usage reports",
      "Quarterly optimization",
    ],
    buttonText: "Choose Growth",
    buttonHref: "/contact",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Scale",
    description: "Enterprise-grade automation across your business",
    price: "£1,500",
    priceSubtext: "-2,500/mo",
    features: [
      "4+ AI automation solutions",
      "24-hour maintenance SLA",
      "Dedicated account manager",
      "Custom reporting dashboards",
      "Monthly strategy calls",
    ],
    buttonText: "Contact Us",
    buttonHref: "/contact",
    buttonVariant: "primary",
  },
];

const faqs = [
  {
    question: "What's included in the setup fee?",
    answer:
      "The setup fee covers everything needed to get your automation running: discovery sessions to understand your workflow, solution design, building the automation, integration with your existing tools, testing, and training your team. You'll have a fully working system at the end.",
  },
  {
    question: "What does 'monthly maintenance' include?",
    answer:
      "Monthly maintenance covers hosting, monitoring, updates, and fixes. If something breaks or needs adjusting, we handle it. We also keep your AI models up to date and optimize performance based on usage patterns.",
  },
  {
    question: "Can I upgrade or change solutions later?",
    answer:
      "Absolutely. We designed our tiers to grow with your business. Adding new solutions or upgrading your tier is straightforward—we'll discuss the scope and provide a clear quote for any changes.",
  },
  {
    question: "Why the price ranges?",
    answer:
      "Every business is different. The exact price depends on complexity, integrations needed, and data volume. We'll give you a fixed quote after our discovery call—no surprises.",
  },
  {
    question: "Do I own the automations you build?",
    answer:
      "Yes. We build on your infrastructure where possible, and you retain full ownership of the systems, prompts, and workflows we create. If you ever want to bring maintenance in-house, we'll help with the transition.",
  },
  {
    question: "What if it doesn't work for my use case?",
    answer:
      "We're honest upfront about what AI can and can't do. If we don't think automation will deliver ROI for your specific situation, we'll tell you during the discovery call. No hard sell.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-border"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-base font-semibold text-foreground pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-base text-muted-foreground">{answer}</p>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Animated Glassy Pricing Section */}
      <ModernPricingPage
        title={<>Transparent <span className="text-foreground/60">Pricing</span></>}
        subtitle="No hidden fees. Clear tiers. Choose what fits your business."
        plans={pricingPlans}
        showAnimatedBackground={true}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Book a discovery call and we&apos;ll give you a clear quote within
              48 hours.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-gray-100"
              >
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
