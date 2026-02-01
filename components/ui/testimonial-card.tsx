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
      viewport={{ once: true }}
      className={cn(
        "relative p-6 rounded-2xl bg-white border border-border",
        "shadow-sm hover:shadow-lg transition-all duration-300",
        "group",
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 h-8 w-8 text-muted/30 group-hover:text-muted/50 transition-colors" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "fill-amber-400 text-amber-400" : "text-muted"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center text-white font-semibold text-sm">
          {author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}
            {company && `, ${company}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
