"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    title: "Step 1",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">Discovery</h4>
        <p className="text-[#8B8C95] text-sm md:text-base mb-6 leading-relaxed">
          We start with a conversation about your business. What takes up your time? Where are the bottlenecks? What would you automate if you could? We identify the highest-impact opportunities for AI automation.
        </p>
        <div className="space-y-2">
          {["30-minute discovery call", "Workflow analysis", "ROI assessment", "Clear proposal within 48 hours"].map((item) => (
            <div key={item} className="flex gap-2 items-center text-[#8B8C95] text-sm">
              <span className="text-[#FF5A1F]">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">Design</h4>
        <p className="text-[#8B8C95] text-sm md:text-base mb-6 leading-relaxed">
          We architect a solution tailored to your specific needs. No off-the-shelf templates. Every automation is designed around your existing tools, data, and workflows.
        </p>
        <div className="space-y-2">
          {["Custom solution architecture", "Integration planning", "Data flow mapping", "Sign-off before we build"].map((item) => (
            <div key={item} className="flex gap-2 items-center text-[#8B8C95] text-sm">
              <span className="text-[#00E676]">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">Deploy</h4>
        <p className="text-[#8B8C95] text-sm md:text-base mb-6 leading-relaxed">
          We build your automation and deploy it into your environment. You&apos;ll have a working system before you know it, fully tested and ready to use.
        </p>
        <div className="space-y-2">
          {["Full development and testing", "Integration with your tools", "Team training session", "Go-live support"].map((item) => (
            <div key={item} className="flex gap-2 items-center text-[#8B8C95] text-sm">
              <span className="text-[#FF5A1F]">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Step 4",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">Optimise</h4>
        <p className="text-[#8B8C95] text-sm md:text-base mb-6 leading-relaxed">
          Once live, we monitor performance and tune for accuracy and speed. Real-world usage always reveals opportunities to improve, and we handle those adjustments.
        </p>
        <div className="space-y-2">
          {["Performance monitoring", "Accuracy improvements", "Speed optimisation", "User feedback integration"].map((item) => (
            <div key={item} className="flex gap-2 items-center text-[#8B8C95] text-sm">
              <span className="text-[#00E676]">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Step 5",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-[#F3F4F6] mb-4 uppercase">Manage</h4>
        <p className="text-[#8B8C95] text-sm md:text-base mb-6 leading-relaxed">
          Ongoing support is included in every package. Updates, maintenance, fixes: we handle it all. Your automation just works, month after month.
        </p>
        <div className="space-y-2">
          {["Proactive maintenance", "Regular updates", "Support when you need it", "Monthly performance reports"].map((item) => (
            <div key={item} className="flex gap-2 items-center text-[#8B8C95] text-sm">
              <span className="text-[#FF5A1F]">✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,90,31,0.07) 0%, transparent 60%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <Badge variant="secondary" className="mb-6">Process</Badge>
            <h1 className="text-5xl font-bold tracking-tight text-[#F3F4F6] sm:text-6xl uppercase">
              How It <span className="text-[#FF5A1F]">Works</span>
            </h1>
            <p className="mt-6 text-xl text-[#8B8C95]">
              From first conversation to fully automated workflow: here&apos;s what working with us looks like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive 3D Section */}
      <section className="py-12 bg-[#0B0C10]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="w-full h-[500px] bg-[#0A0A0A] relative overflow-hidden border border-[#1E2028]">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#FF5A1F"
            />

            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 uppercase"
                >
                  See Your Automation Come to Life
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-neutral-400 max-w-lg text-base md:text-lg"
                >
                  We transform complex workflows into elegant, automated systems.
                  Watch your manual processes become intelligent, self-running machines.
                </motion.p>
              </div>

              <div className="flex-1 relative min-h-[250px] md:min-h-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="bg-[#0B0C10]">
        <Timeline data={timelineData} />
      </section>

      {/* CTA */}
      <section className="relative py-32 bg-[#0B0C10] overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,90,31,0.05) 0%, transparent 70%)" }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <SparklesText
              text="Ready to start?"
              className="text-4xl font-bold tracking-tight text-[#F3F4F6] sm:text-5xl uppercase"
            />
            <p className="mt-6 text-xl text-[#8B8C95]">
              The first step is a conversation. Let&apos;s talk about what you need.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <ShinyButton className="text-base px-10 py-4">
                  Book a Discovery Call
                </ShinyButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
