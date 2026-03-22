"use client";

export default function GlobalLiquidBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-screen pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Obsidian Kinetic dark base with 100px engineered grid overlay */}
      <div className="absolute inset-0 bg-[#0B0C10]" />
      <div className="absolute inset-0 grid-overlay" />
      {/* Subtle ambient radial glow — keeps depth without distraction */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,90,31,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
