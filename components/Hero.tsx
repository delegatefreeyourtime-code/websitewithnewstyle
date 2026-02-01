"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen">
      {/* Content Section - liquid background is now global */}
      <section className="relative min-h-screen w-full flex items-center justify-center" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-6 md:px-8 -mt-16 md:-mt-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="text-foreground drop-shadow-sm">
                  Automate Your Operations.
                </span>
                <br />
                <span className="text-foreground/70">
                  Free Your Time.
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
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto px-4">
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
              <Button asChild size="lg" className="group bg-foreground text-white hover:bg-foreground/90 shadow-xl">
                <Link href="/solutions">
                  See Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/80 backdrop-blur-md border-neutral-300 text-foreground hover:bg-white shadow-lg">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>
    </div>
  );
}
