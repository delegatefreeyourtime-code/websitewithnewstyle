"use client";

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
    viewport={{ once: true, amount: 0 }}
    className={cn(featured && "md:col-span-2 md:row-span-1")}
  >
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden h-full",
        "p-7 bg-[#16181D] border border-[#1E2028]",
        "transition-all duration-300",
        "hover:border-[#FF5A1F]/40 hover:shadow-[0_0_30px_rgba(255,90,31,0.08)]",
        className,
      )}
    >
      {/* Gradient accent overlay */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          gradient || "bg-gradient-to-br from-[#FF5A1F]/5 via-transparent to-transparent"
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 mb-5 bg-[#FF5A1F] text-white",
          "transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,90,31,0.4)]",
        )}>
          {Icon}
        </div>

        <h3 className={cn(
          "font-semibold text-[#F3F4F6] mb-3 tracking-tight",
          featured ? "text-2xl" : "text-lg"
        )}>
          {name}
        </h3>

        <p className={cn(
          "text-[#8B8C95] leading-relaxed",
          featured ? "text-base" : "text-sm"
        )}>
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex items-center gap-2 text-sm font-semibold text-[#FF5A1F] mt-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 tracking-wide uppercase text-[12px]">
        <span>{cta}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Bottom orange accent line on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FF5A1F] group-hover:w-full transition-all duration-500" />
    </Link>
  </motion.div>
);

export { BentoCard, BentoGrid };
