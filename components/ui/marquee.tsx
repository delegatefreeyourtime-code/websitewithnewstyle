"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 30,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden [--gap:1rem]",
        className
      )}
    >
      {Array(2)
        .fill(0)
        .map((_, idx) => (
          <motion.div
            key={idx}
            className={cn(
              "flex shrink-0 gap-4",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
            style={{
              animation: `marquee ${speed}s linear infinite ${
                reverse ? "reverse" : ""
              }`,
            }}
          >
            {children}
          </motion.div>
        ))}
    </div>
  );
}
