"use client";

import React, { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";

export function AboutSection2() {
  const timelineRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={timelineRef}
      className="pt-32 pb-24 bg-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Animated text */}
          <div className="space-y-6">
            <TimelineContent animationNum={0} timelineRef={timelineRef}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                We&apos;re{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-2 py-1 border-l-4 border-[#3B82F6] bg-blue-50 text-foreground">
                    rethinking
                  </span>
                </span>
              </h2>
            </TimelineContent>

            <TimelineContent animationNum={1} timelineRef={timelineRef}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                how SMEs{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-2 py-1 border-l-4 border-[#10B981] bg-emerald-50 text-foreground">
                    challenge
                  </span>
                </span>
              </h2>
            </TimelineContent>

            <TimelineContent animationNum={2} timelineRef={timelineRef}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                repetitive tasks that{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-2 py-1 border-l-4 border-[#8B5CF6] bg-violet-50 text-foreground">
                    work for you
                  </span>
                </span>
              </h2>
            </TimelineContent>

            <TimelineContent animationNum={3} timelineRef={timelineRef}>
              <p className="text-lg text-muted-foreground mt-8 max-w-lg">
                We believe AI should handle the boring stuff so you can focus on
                what matters: growing your business and serving your customers.
              </p>
            </TimelineContent>
          </div>

          {/* Right side - Visual element */}
          <TimelineContent
            animationNum={2}
            timelineRef={timelineRef}
            className="relative"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 via-emerald-50 to-violet-100 rounded-3xl blur-2xl opacity-60" />

              {/* Main content card */}
              <div className="relative bg-gradient-to-br from-muted/80 to-muted rounded-3xl p-8 border border-border shadow-xl">
                <div className="space-y-6">
                  {/* Stat blocks */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                      <div className="text-3xl font-bold text-foreground">
                        3-5hrs
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">
                        Saved per proposal
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                      <div className="text-3xl font-bold text-foreground">
                        60%
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">
                        Fewer support queries
                      </p>
                    </div>
                  </div>

                  {/* Process visualization */}
                  <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-foreground">
                          Your Task
                        </span>
                      </div>

                      <svg
                        className="w-6 h-6 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-foreground">
                          AI Does It
                        </span>
                      </div>

                      <svg
                        className="w-6 h-6 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-violet-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-foreground">
                          Done
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}
