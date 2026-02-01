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
        "text-base font-semibold text-white",
        "bg-foreground rounded-xl",
        "overflow-hidden",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-xl hover:shadow-foreground/25",
        "active:scale-100",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shine effect */}
      <span
        className="absolute inset-0 overflow-hidden rounded-xl"
        aria-hidden="true"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine" />
      </span>
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
