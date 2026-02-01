"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// SVG Filter for liquid glass effect
const LiquidGlassFilter = () => (
  <svg style={{ position: "absolute", width: 0, height: 0 }}>
    <filter
      id="bento-glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.002 0.008"
        numOctaves="1"
        seed="5"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="2" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="3"
        specularConstant="0.8"
        specularExponent="80"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-100" y="-100" z="200" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="8"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <LiquidGlassFilter />
      <div
        className={cn(
          "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
  index = 0,
  gradient,
  featured = false,
}: {
  name: string;
  className?: string;
  Icon: ReactNode;
  description: string;
  href: string;
  cta: string;
  index?: number;
  gradient?: string;
  featured?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
    viewport={{ once: true }}
    className={cn(featured && "md:col-span-2 md:row-span-1")}
  >
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl h-full",
        "p-8",
        "transition-all duration-700",
        "hover:-translate-y-2 hover:scale-[1.02]",
        className,
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
      }}
    >
      {/* Liquid Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-3xl"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          filter: "url(#bento-glass-distortion)",
          isolation: "isolate",
        }}
      />

      {/* Glass tint layer */}
      <div
        className="absolute inset-0 z-[1] rounded-3xl transition-all duration-500"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
        }}
      />

      {/* Inner glass highlight/shadow */}
      <div
        className="absolute inset-0 z-[2] rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "inset 2px 2px 4px 0 rgba(255, 255, 255, 0.8), inset -2px -2px 4px 0 rgba(255, 255, 255, 0.4)",
        }}
      />

      {/* Outer glow shadow */}
      <div
        className="absolute inset-0 z-0 rounded-3xl transition-all duration-700 group-hover:opacity-100 opacity-80"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
        }}
      />

      {/* Gradient accent overlay */}
      <div
        className={cn(
          "absolute inset-0 z-[3] rounded-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60",
          gradient || "bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"
        )}
      />

      {/* Animated shimmer effect */}
      <div
        className="absolute inset-0 z-[4] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden"
      >
        <div
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with gradient background */}
        <div className={cn(
          "flex items-center justify-center w-14 h-14 rounded-2xl mb-5",
          "bg-gradient-to-br from-foreground to-foreground/80 text-white",
          "shadow-lg shadow-foreground/25",
          "transition-all duration-700",
          "group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-foreground/30",
          "group-hover:rotate-3"
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        }}>
          {Icon}
        </div>

        <h3 className={cn(
          "font-semibold text-foreground mb-3",
          "transition-colors duration-300",
          featured ? "text-2xl" : "text-xl"
        )}>
          {name}
        </h3>

        <p className={cn(
          "text-muted-foreground leading-relaxed",
          featured ? "text-base" : "text-sm"
        )}>
          {description}
        </p>
      </div>

      {/* CTA with animated underline */}
      <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-foreground mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="relative">
          {cta}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
      </div>

      {/* Corner light reflection */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-[5] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(255,255,255,0.6) 0%, transparent 70%)",
        }}
      />
    </Link>
  </motion.div>
);

export { BentoCard, BentoGrid };
