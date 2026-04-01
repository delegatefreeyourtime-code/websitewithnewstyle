"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  className?: string;
  index?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  className,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0 }}
      className={cn(
        "relative p-6 bg-[#16181D] border border-[#1E2028]",
        "hover:border-[#FF5A1F]/30 hover:shadow-[0_0_20px_rgba(255,90,31,0.08)] transition-all duration-300",
        "group",
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-[#1E2028] group-hover:text-[#FF5A1F]/20 transition-colors" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "fill-[#FF5A1F] text-[#FF5A1F]" : "text-[#1E2028]"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#F3F4F6] mb-6 leading-relaxed text-sm">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-[#FF5A1F] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
          {author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-[#F3F4F6] text-sm">{author}</p>
          {(role || company) && (
            <p className="text-xs text-[#8B8C95]">
              {role}
              {role && company && `, `}
              {company}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
