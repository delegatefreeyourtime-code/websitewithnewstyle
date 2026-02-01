"use client";

import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  squares?: [number, number][];
  strokeDasharray?: string;
}

export function GridPattern({
  className,
  squares,
  strokeDasharray = "0",
}: GridPatternProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M.5 60V.5H60"
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      {squares && (
        <svg className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              key={`${x}-${y}-${index}`}
              width="60"
              height="60"
              x={x * 60}
              y={y * 60}
              className="fill-gray-400/10"
              strokeWidth="0"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.07) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}
