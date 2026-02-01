"use client";

import dynamic from "next/dynamic";
import { GlassFilter } from "@/components/ui/liquid-glass";

// Dynamic import for Three.js component
const LiquidGradient = dynamic(
  () => import("@/components/ui/flow-gradient-hero-section"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100" />
    ),
  }
);

export default function GlobalLiquidBackground() {
  return (
    <>
      {/* Glass Filter for header effect */}
      <GlassFilter />

      {/* Fixed Liquid Gradient Background - persists across all pages */}
      <div
        className="fixed inset-0 w-full h-screen pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <LiquidGradient className="w-full h-full" />
      </div>
    </>
  );
}
