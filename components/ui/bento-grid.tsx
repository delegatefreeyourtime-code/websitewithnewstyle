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
        "grid w-full auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
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
}: {
  name: string;
  className?: string;
  Icon: ReactNode;
  description: string;
  href: string;
  cta: string;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl h-full",
        "bg-white border border-border",
        "p-6",
        "transition-all duration-300",
        "hover:border-foreground/20 hover:shadow-lg",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-foreground mb-4 transition-transform duration-300 group-hover:scale-110">
          {Icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-foreground mt-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  </motion.div>
);

export { BentoCard, BentoGrid };
