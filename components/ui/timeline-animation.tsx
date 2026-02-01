"use client";

import React, { RefObject } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum: number;
  timelineRef: RefObject<HTMLElement | null>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  customVariants?: Variants;
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  className = "",
  as: Component = "div",
  customVariants,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.15,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const variants = customVariants || defaultVariants;
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
    >
      {children}
    </MotionComponent>
  );
}
