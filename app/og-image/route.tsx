import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0C10",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orange radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(255,90,31,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              background: "#FF5A1F",
              borderRadius: "50%",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8B8C95",
            }}
          >
            Delegate AI Services Ltd
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#F3F4F6",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: "900px",
          }}
        >
          AI Automation
          <br />
          <span style={{ color: "#FF5A1F" }}>for UK Businesses</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#8B8C95",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Done-for-you AI solutions. Built, deployed, and managed by us.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "48px",
          }}
        >
          {[
            { value: "34hrs", label: "Saved weekly" },
            { value: "100%", label: "Client retention" },
            { value: "6 weeks", label: "Avg. deployment" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#00E676",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#8B8C95",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "14px",
            color: "#4A4B55",
            letterSpacing: "0.05em",
          }}
        >
          delegate-me.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
