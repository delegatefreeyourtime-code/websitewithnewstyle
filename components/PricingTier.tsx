"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingTierProps {
  name: string;
  monthlyPrice: string;
  setupPrice: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  index?: number;
}

export default function PricingTier({
  name,
  monthlyPrice,
  setupPrice,
  description,
  features,
  highlighted = false,
  index = 0,
}: PricingTierProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl p-8 h-full flex flex-col",
        highlighted
          ? "bg-foreground text-white shadow-2xl scale-105 border-2 border-foreground"
          : "bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-foreground text-xs font-medium"
          >
            <Sparkles className="h-3 w-3" />
            Most Popular
          </motion.div>
        </div>
      )}

      <div>
        <h3
          className={cn(
            "text-xl font-semibold",
            highlighted ? "text-white" : "text-foreground"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm",
            highlighted ? "text-gray-300" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline">
          <span
            className={cn(
              "text-4xl font-bold tracking-tight",
              highlighted ? "text-white" : "text-foreground"
            )}
          >
            {monthlyPrice}
          </span>
          <span
            className={cn(
              "ml-1 text-sm font-normal",
              highlighted ? "text-gray-300" : "text-muted-foreground"
            )}
          >
            /month
          </span>
        </div>
        <p
          className={cn(
            "mt-1 text-sm",
            highlighted ? "text-gray-300" : "text-muted-foreground"
          )}
        >
          {setupPrice} setup
        </p>
      </div>

      <ul className="mt-8 space-y-3 flex-1">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <Check
              className={cn(
                "h-5 w-5 flex-shrink-0 mt-0.5",
                highlighted ? "text-white" : "text-foreground"
              )}
            />
            <span
              className={cn(
                "text-sm",
                highlighted ? "text-gray-200" : "text-muted-foreground"
              )}
            >
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          asChild
          size="lg"
          className={cn(
            "w-full",
            highlighted
              ? "bg-white text-foreground hover:bg-gray-100"
              : "bg-foreground text-white hover:bg-foreground/90"
          )}
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </motion.div>
  );
}
