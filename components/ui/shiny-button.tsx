"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export function ShinyButton({
  children,
  className,
  ...props
}: ShinyButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4",
        "text-base font-semibold text-white tracking-wide",
        "bg-[#FF5A1F]",
        "overflow-hidden",
        "transition-all duration-300",
        "shadow-[0_0_20px_rgba(255,90,31,0.4)] hover:shadow-[0_0_40px_rgba(255,90,31,0.6)]",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shine effect */}
      <span
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine" />
      </span>
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
