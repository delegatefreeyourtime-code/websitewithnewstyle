"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientText } from "@/components/ui/gradient-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { DotPattern } from "@/components/ui/grid-pattern";
import { SparklesText } from "@/components/ui/sparkles-text";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Step 1",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-foreground mb-4">Discovery</h4>
        <p className="text-muted-foreground text-sm md:text-base mb-6">
          We start with a conversation about your business. What takes up your time? Where are the bottlenecks? What would you automate if you could? We identify the highest-impact opportunities for AI automation.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-violet-500">✓</span> 30-minute discovery call
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-violet-500">✓</span> Workflow analysis
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-violet-500">✓</span> ROI assessment
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-violet-500">✓</span> Clear proposal within 48 hours
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-foreground mb-4">Design</h4>
        <p className="text-muted-foreground text-sm md:text-base mb-6">
          We architect a solution tailored to your specific needs. No off-the-shelf templates—every automation is designed around your existing tools, data, and workflows.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-blue-500">✓</span> Custom solution architecture
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-blue-500">✓</span> Integration planning
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-blue-500">✓</span> Data flow mapping
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-blue-500">✓</span> Sign-off before we build
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-foreground mb-4">Deploy</h4>
        <p className="text-muted-foreground text-sm md:text-base mb-6">
          We build your automation and deploy it into your environment. You&apos;ll have a working system within 6 weeks, fully tested and ready to use.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-emerald-500">✓</span> Full development and testing
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-emerald-500">✓</span> Integration with your tools
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-emerald-500">✓</span> Team training session
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-emerald-500">✓</span> Go-live support
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 4",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-foreground mb-4">Optimize</h4>
        <p className="text-muted-foreground text-sm md:text-base mb-6">
          Once live, we monitor performance and tune for accuracy and speed. Real-world usage always reveals opportunities to improve—we handle those adjustments.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-orange-500">✓</span> Performance monitoring
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-orange-500">✓</span> Accuracy improvements
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-orange-500">✓</span> Speed optimization
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-orange-500">✓</span> User feedback integration
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Step 5",
    content: (
      <div>
        <h4 className="text-2xl font-bold text-foreground mb-4">Manage</h4>
        <p className="text-muted-foreground text-sm md:text-base mb-6">
          Ongoing support is included in every package. Updates, maintenance, fixes—we handle it all. Your automation just works, month after month.
        </p>
        <div className="space-y-2">
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-pink-500">✓</span> Proactive maintenance
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-pink-500">✓</span> Regular updates
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-pink-500">✓</span> Support when you need it
          </div>
          <div className="flex gap-2 items-center text-muted-foreground text-sm">
            <span className="text-pink-500">✓</span> Monthly performance reports
          </div>
        </div>
      </div>
    ),
  },
];

const timeline = [
  { day: "Day 1", label: "Discovery Call" },
  { day: "Day 3", label: "Proposal Sent" },
  { day: "Week 2", label: "Design Complete" },
  { day: "Week 6", label: "Go Live", highlight: true },
];


export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 pt-32 bg-white overflow-hidden">
        <DotPattern className="opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              How It{" "}
              <GradientText className="text-5xl sm:text-6xl font-bold">
                Works
              </GradientText>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              From first conversation to fully automated workflow—here&apos;s what working with us looks like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive 3D Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden rounded-3xl border-0">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >
                  See Your Automation Come to Life
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-neutral-300 max-w-lg text-base md:text-lg"
                >
                  We transform complex workflows into elegant, automated systems.
                  Watch your manual processes become intelligent, self-running machines.
                </motion.p>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative min-h-[250px] md:min-h-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="bg-white">
        <Timeline data={timelineData} />
      </section>

      {/* Timeline Summary */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Most solutions are live within 6 weeks from kickoff
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center flex-1"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg ${
                      item.highlight
                        ? "bg-foreground text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <span className="text-lg font-bold">{item.day}</span>
                  </motion.div>
                  <p className={`text-sm ${item.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Connecting line */}
            <div className="hidden md:block relative mt-8">
              <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-muted rounded-full">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-foreground rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
              text="Ready to start?"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              colors={{ first: "#ffffff", second: "#a1a1aa" }}
            />
            <p className="mt-6 text-xl text-gray-300">
              The first step is a conversation. Let&apos;s talk about what you need.
            </p>
            <div className="mt-10">
              <ShinyButton className="bg-white text-foreground hover:bg-gray-100">
                <Link href="/contact" className="flex items-center gap-2">
                  Book a Discovery Call
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
