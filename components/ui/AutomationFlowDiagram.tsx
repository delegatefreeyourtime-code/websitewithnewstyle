"use client";

/**
 * Animated SVG diagram: trigger nodes → AI core → output nodes.
 * Pure SVG + SMIL animation for the data dots; CSS for the pulsing core.
 * Designed for a dark surface (intended to sit on top of #0A0A0A or similar).
 */

import { Mail, Phone, Calendar, MessageSquare, Database, Bell } from "lucide-react";

const triggers = [
  { label: "Inbound Call", Icon: Phone, y: 60 },
  { label: "Form Submission", Icon: Mail, y: 175 },
  { label: "Calendar Event", Icon: Calendar, y: 290 },
];

const outputs = [
  { label: "Slack Notify", Icon: MessageSquare, y: 60 },
  { label: "CRM Update", Icon: Database, y: 175 },
  { label: "SMS Reply", Icon: Bell, y: 290 },
];

const NODE_W = 168;
const NODE_H = 64;
const LEFT_X = 24;
const RIGHT_X = 600 - NODE_W - 24; // 408
const CORE_X = 300;
const CORE_Y = 175;
const CORE_R = 48;

function trigToCorePath(y: number) {
  // From right edge of left node (LEFT_X + NODE_W) at y → near left edge of core
  const startX = LEFT_X + NODE_W;
  const startY = y + NODE_H / 2;
  const endX = CORE_X - CORE_R;
  const endY = CORE_Y;
  const cp1x = startX + 70;
  const cp2x = endX - 70;
  return `M ${startX} ${startY} C ${cp1x} ${startY}, ${cp2x} ${endY}, ${endX} ${endY}`;
}

function coreToOutputPath(y: number) {
  const startX = CORE_X + CORE_R;
  const startY = CORE_Y;
  const endX = RIGHT_X;
  const endY = y + NODE_H / 2;
  const cp1x = startX + 70;
  const cp2x = endX - 70;
  return `M ${startX} ${startY} C ${cp1x} ${startY}, ${cp2x} ${endY}, ${endX} ${endY}`;
}

export default function AutomationFlowDiagram() {
  return (
    <div data-theme="dark" className="relative w-full h-full flex items-center justify-center">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <svg
        viewBox="0 0 600 350"
        className="w-full h-full max-w-[640px] relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bigglow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for the AI core */}
          <radialGradient id="coreGradient" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFB089" />
            <stop offset="40%" stopColor="#FF5A1F" />
            <stop offset="100%" stopColor="#8C2A0A" />
          </radialGradient>

          {/* Path stroke gradient */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#FF5A1F" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Connection paths — trigger → core */}
        {triggers.map((t, i) => {
          const id = `trig-${i}`;
          return (
            <g key={id}>
              <path
                d={trigToCorePath(t.y)}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="1.25"
              />
              {/* Travelling dot */}
              <circle r="3.5" fill="#FF5A1F" filter="url(#glow)">
                <animateMotion
                  dur={`${2.2 + i * 0.4}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                  path={trigToCorePath(t.y)}
                />
              </circle>
            </g>
          );
        })}

        {/* Connection paths — core → output */}
        {outputs.map((o, i) => {
          const id = `out-${i}`;
          return (
            <g key={id}>
              <path
                d={coreToOutputPath(o.y)}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="1.25"
              />
              <circle r="3.5" fill="#FF5A1F" filter="url(#glow)">
                <animateMotion
                  dur={`${2.4 + i * 0.4}s`}
                  repeatCount="indefinite"
                  begin={`${0.8 + i * 0.45}s`}
                  path={coreToOutputPath(o.y)}
                />
              </circle>
            </g>
          );
        })}

        {/* AI core — pulsing rings */}
        <g transform={`translate(${CORE_X}, ${CORE_Y})`}>
          <circle r={CORE_R + 18} fill="none" stroke="#FF5A1F" strokeOpacity="0.18" strokeWidth="1">
            <animate attributeName="r" values={`${CORE_R + 12};${CORE_R + 28};${CORE_R + 12}`} dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.25;0.05;0.25" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r={CORE_R + 6} fill="none" stroke="#FF5A1F" strokeOpacity="0.3" strokeWidth="1">
            <animate attributeName="r" values={`${CORE_R + 4};${CORE_R + 14};${CORE_R + 4}`} dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.35;0.1;0.35" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Core orb */}
          <circle r={CORE_R} fill="url(#coreGradient)" filter="url(#bigglow)" />
          {/* Inner spark */}
          <circle r={CORE_R - 14} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 6">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite" />
          </circle>
          {/* AI label */}
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="var(--font-space), Space Grotesk, sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#ffffff"
            letterSpacing="2"
          >
            AI CORE
          </text>
        </g>
      </svg>

      {/* Trigger nodes (HTML overlays so we can use lucide icons) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="relative w-full h-full max-w-[640px] mx-auto" style={{ aspectRatio: "600 / 350" }}>
          {triggers.map((t) => (
            <NodeCard
              key={t.label}
              label={t.label}
              Icon={t.Icon}
              left={`${(LEFT_X / 600) * 100}%`}
              top={`${(t.y / 350) * 100}%`}
              widthPct={(NODE_W / 600) * 100}
              heightPct={(NODE_H / 350) * 100}
              accent="orange"
            />
          ))}
          {outputs.map((o) => (
            <NodeCard
              key={o.label}
              label={o.label}
              Icon={o.Icon}
              left={`${(RIGHT_X / 600) * 100}%`}
              top={`${(o.y / 350) * 100}%`}
              widthPct={(NODE_W / 600) * 100}
              heightPct={(NODE_H / 350) * 100}
              accent="green"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NodeCard({
  label,
  Icon,
  left,
  top,
  widthPct,
  heightPct,
  accent,
}: {
  label: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  left: string;
  top: string;
  widthPct: number;
  heightPct: number;
  accent: "orange" | "green";
}) {
  const accentClasses =
    accent === "orange"
      ? "border-[#FF5A1F]/40 shadow-[0_0_24px_rgba(255,90,31,0.18)]"
      : "border-[#00E676]/40 shadow-[0_0_24px_rgba(0,230,118,0.14)]";
  const iconClasses = accent === "orange" ? "text-[#FF5A1F]" : "text-[#00E676]";
  return (
    <div
      className={`absolute bg-[#16181D]/80 backdrop-blur border ${accentClasses} flex items-center gap-3 px-4`}
      style={{
        left,
        top,
        width: `${widthPct}%`,
        height: `${heightPct}%`,
      }}
    >
      <span className={`flex-shrink-0 ${iconClasses}`}>
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </span>
      <span className="text-[11px] uppercase tracking-widest text-[#F3F4F6] font-semibold leading-tight">
        {label}
      </span>
    </div>
  );
}
