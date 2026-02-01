"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export function GradientText({
  children,
  className = "",
  colors = ["#171717", "#525252", "#171717"],
  animationSpeed = 3,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]",
        className
      )}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
