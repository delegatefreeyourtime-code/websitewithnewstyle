"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Conversation } from "@elevenlabs/client";
import { Phone, PhoneOff, Mic } from "lucide-react";

type CallStatus = "idle" | "connecting" | "connected" | "disconnecting";
type ConvMode = "speaking" | "listening";

interface TranscriptLine {
  id: string;
  role: "agent" | "user";
  text: string;
  timestamp: number;
}

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_5101kq5h2w2vfgrv6e26yq4qcdws";

export default function TalkPage() {
  const [status, setStatus] = useState<CallStatus>("idle");
  const [mode, setMode] = useState<ConvMode>("listening");
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [outputVol, setOutputVol] = useState(0);
  const [inputVol, setInputVol] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const convRef = useRef<Conversation | null>(null);
  const volIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  useEffect(() => {
    if (status === "connected" && convRef.current) {
      volIntervalRef.current = setInterval(() => {
        setOutputVol(convRef.current?.getOutputVolume() ?? 0);
        setInputVol(convRef.current?.getInputVolume() ?? 0);
      }, 50);
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      if (volIntervalRef.current) clearInterval(volIntervalRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
      setOutputVol(0);
      setInputVol(0);
      if (status === "idle") setSeconds(0);
    }
    return () => {
      if (volIntervalRef.current) clearInterval(volIntervalRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  const startCall = useCallback(async () => {
    if (!AGENT_ID) {
      setError("Voice agent not configured");
      return;
    }
    setStatus("connecting");
    setError(null);
    setTranscript([]);
    setSeconds(0);

    try {
      const conv = await Conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
        onMessage: ({ message, source }) => {
          setTranscript((prev) => [
            ...prev,
            {
              id: `${source}-${Date.now()}-${Math.random()}`,
              role: source === "ai" ? "agent" : "user",
              text: message,
              timestamp: Date.now(),
            },
          ]);
        },
        onStatusChange: ({ status }) => {
          if (status === "connected") setStatus("connected");
          if (status === "disconnected") setStatus("idle");
        },
        onModeChange: ({ mode }) => {
          setMode(mode === "speaking" ? "speaking" : "listening");
        },
        onError: (message) => {
          setError(message);
          setStatus("idle");
        },
      });
      convRef.current = conv;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect");
      setStatus("idle");
    }
  }, []);

  const endCall = useCallback(async () => {
    setStatus("disconnecting");
    await convRef.current?.endSession();
    convRef.current = null;
  }, []);

  const orbScale =
    status === "connected"
      ? mode === "speaking"
        ? 1 + outputVol * 0.5
        : 1 + inputVol * 0.2
      : 1;

  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Page intro */}
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FF5A1F] font-semibold mb-3">
            Live Voice Demo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Have a real conversation with Delegate&apos;s AI
          </h1>
          <p className="text-base md:text-lg text-[#8B8C95] max-w-2xl mx-auto">
            Maya is one of our voice agents. Tell her what your business does
            and what&apos;s eating up your time — she&apos;ll walk you through
            what we&apos;d automate first.
          </p>
        </div>

        {/* Console */}
        <div data-theme="dark" className="bg-[#0F1117]/95 backdrop-blur border border-[#1E2028] shadow-2xl shadow-black/60 text-[#F3F4F6] flex flex-col">
          {/* Header strip */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E2028]">
            <div className="flex items-center gap-3">
              <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FF8C5A] to-[#FF5A1F] text-white">
                <Mic className="w-4 h-4" />
                {status === "connected" && (
                  <span className="absolute inset-0 rounded-full border border-[#FF5A1F]/40 animate-ping" />
                )}
              </span>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-widest text-[#FF5A1F] font-semibold">
                  Delegate AI
                </p>
                <p className="text-base font-semibold">Maya · Voice Consultant</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StatusPill status={status} mode={mode} />
              {status === "connected" && (
                <span className="text-sm font-mono tabular-nums text-[#8B8C95]">
                  {m}:{s}
                </span>
              )}
            </div>
          </div>

          {/* Transcript area — the centrepiece */}
          <div className="px-6 md:px-10 py-8 min-h-[420px] max-h-[60vh] overflow-y-auto">
            {transcript.length === 0 && status === "idle" && (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <Orb
                  status={status}
                  outputVol={outputVol}
                  scale={orbScale}
                  size={140}
                />
                <p className="mt-8 text-lg font-medium text-[#F3F4F6]">
                  Press the button below to start a live voice call
                </p>
                <p className="mt-2 text-sm text-[#8B8C95]">
                  Microphone access required · Conversation transcribed live
                </p>
              </div>
            )}

            {transcript.length === 0 && status === "connecting" && (
              <div className="h-full flex flex-col items-center justify-center py-20">
                <Orb
                  status={status}
                  outputVol={outputVol}
                  scale={orbScale}
                  size={140}
                />
                <p className="mt-8 text-lg font-medium text-[#F3F4F6] animate-pulse">
                  Connecting to Maya…
                </p>
              </div>
            )}

            {transcript.length > 0 && (
              <div className="space-y-6">
                {transcript.map((line, i) => (
                  <TranscriptTurn
                    key={line.id}
                    line={line}
                    isLatest={i === transcript.length - 1}
                    speaking={
                      status === "connected" &&
                      i === transcript.length - 1 &&
                      line.role === "agent" &&
                      mode === "speaking"
                    }
                  />
                ))}
                <div ref={transcriptEndRef} />
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="px-6 md:px-10 py-5 border-t border-[#1E2028] flex items-center justify-between gap-4 bg-[#0F1117]">
            <div className="flex items-center gap-4 text-sm text-[#8B8C95]">
              {status === "connected" && (
                <>
                  <VolumeBar level={inputVol} label="You" />
                  <VolumeBar level={outputVol} label="Maya" />
                </>
              )}
              {status === "idle" && (
                <span className="text-xs text-[#8B8C95] hidden md:inline">
                  Microphone access required
                </span>
              )}
            </div>

            {status === "idle" && (
              <button
                onClick={startCall}
                className="flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e84e18] text-white font-semibold px-7 py-3 transition-colors shadow-lg shadow-[#FF5A1F]/30"
              >
                <Phone className="w-4 h-4" /> Start Voice Call
              </button>
            )}
            {status === "connecting" && (
              <button
                disabled
                className="bg-[#1E2028] text-[#8B8C95] px-7 py-3 font-medium cursor-wait"
              >
                Connecting…
              </button>
            )}
            {status === "connected" && (
              <button
                onClick={endCall}
                className="flex items-center gap-2 bg-transparent hover:bg-red-500/10 border border-red-500/40 text-red-400 font-semibold px-7 py-3 transition-colors"
              >
                <PhoneOff className="w-4 h-4" /> End Call
              </button>
            )}
            {status === "disconnecting" && (
              <button
                disabled
                className="bg-[#1E2028] text-[#8B8C95] px-7 py-3 font-medium"
              >
                Ending…
              </button>
            )}
          </div>

          {error && (
            <div className="px-6 md:px-10 py-3 border-t border-red-500/30 bg-red-500/10 text-sm text-red-400">
              {error}
            </div>
          )}
        </div>

        {/* Below console — context */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <InfoCard
            label="What she knows"
            body="Delegate's six core verticals, our typical engagement, pricing principles, and how to book a discovery call."
          />
          <InfoCard
            label="What she'll do"
            body="Ask about your business, identify the highest-leverage automation, and offer to send a calendar link if you're keen."
          />
          <InfoCard
            label="What she won't do"
            body="Quote firm prices, invent customer stories, or pretend to be human. She's transparent about being an AI."
          />
        </div>
      </div>
    </div>
  );
}

function Orb({
  status,
  outputVol,
  scale,
  size,
}: {
  status: CallStatus;
  outputVol: number;
  scale: number;
  size: number;
}) {
  return (
    <div className="relative flex items-center justify-center" style={{ height: size }}>
      {status === "connected" && (
        <>
          <div
            className="absolute rounded-full border border-[#FF5A1F]/25 transition-all duration-100"
            style={{
              width: size + outputVol * 80,
              height: size + outputVol * 80,
            }}
          />
          <div
            className="absolute rounded-full border border-[#FF5A1F]/15 transition-all duration-150"
            style={{
              width: size + 40 + outputVol * 100,
              height: size + 40 + outputVol * 100,
            }}
          />
        </>
      )}
      {status === "connecting" && (
        <div
          className="absolute rounded-full border-2 border-[#FF5A1F]/40 animate-ping"
          style={{ width: size, height: size }}
        />
      )}
      <div
        className="relative flex items-center justify-center rounded-full transition-all duration-75"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          background:
            status === "connected"
              ? `radial-gradient(circle at 35% 30%, #FFB089, #FF5A1F ${
                  50 + outputVol * 25
                }%, #8C2A0A)`
              : "radial-gradient(circle at 35% 30%, #FF8C5A, #FF5A1F 65%, #8C2A0A)",
          transform: `scale(${scale})`,
          boxShadow:
            status === "connected"
              ? `0 0 ${40 + outputVol * 50}px rgba(255,90,31,${
                  0.45 + outputVol * 0.4
                })`
              : "0 0 32px rgba(255,90,31,0.35)",
        }}
      >
        {status === "idle" && (
          <Phone className="w-9 h-9 text-white drop-shadow-sm" strokeWidth={1.75} />
        )}
      </div>
    </div>
  );
}

function TranscriptTurn({
  line,
  isLatest,
  speaking,
}: {
  line: TranscriptLine;
  isLatest: boolean;
  speaking: boolean;
}) {
  const isAgent = line.role === "agent";
  return (
    <div className={`flex gap-4 ${isAgent ? "" : "flex-row-reverse"}`}>
      <div
        className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest font-bold ${
          isAgent
            ? "bg-gradient-to-br from-[#FF8C5A] to-[#FF5A1F] text-white"
            : "bg-[#1E2028] border border-[#2A2C36] text-[#F3F4F6]"
        }`}
      >
        {isAgent ? "MA" : "YOU"}
      </div>
      <div className={`flex-1 ${isAgent ? "" : "text-right"}`}>
        <p
          className={`text-[10px] uppercase tracking-widest font-semibold mb-1.5 ${
            isAgent ? "text-[#FF5A1F]" : "text-[#8B8C95]"
          }`}
        >
          {isAgent ? "Maya" : "You"}
          {speaking && (
            <span className="ml-2 inline-flex items-center gap-1">
              <span className="w-1 h-1 bg-[#FF5A1F] rounded-full animate-pulse" />
              <span className="w-1 h-1 bg-[#FF5A1F] rounded-full animate-pulse [animation-delay:150ms]" />
              <span className="w-1 h-1 bg-[#FF5A1F] rounded-full animate-pulse [animation-delay:300ms]" />
            </span>
          )}
        </p>
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            isLatest ? "text-[#F3F4F6]" : "text-[#A8AAB3]"
          }`}
        >
          {line.text}
        </p>
      </div>
    </div>
  );
}

function VolumeBar({ level, label }: { level: number; label: string }) {
  const bars = 5;
  const active = Math.round(level * bars);
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] uppercase tracking-widest text-[#8B8C95] w-8">
        {label}
      </span>
      <div className="flex items-end gap-0.5 h-4">
        {Array.from({ length: bars }).map((_, i) => (
          <span
            key={i}
            className={`w-1 transition-all duration-75 ${
              i < active ? "bg-[#FF5A1F]" : "bg-[#1E2028]"
            }`}
            style={{ height: `${(i + 1) * 3 + 4}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function InfoCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="bg-[#FAF9F5] border border-[#D8D6CD] p-5">
      <p className="text-[10px] uppercase tracking-widest text-[#FF5A1F] font-semibold mb-2">
        {label}
      </p>
      <p className="text-sm text-[#353942] leading-relaxed">{body}</p>
    </div>
  );
}

function StatusPill({ status, mode }: { status: CallStatus; mode: ConvMode }) {
  if (status === "idle") {
    return (
      <span className="text-[10px] uppercase tracking-widest text-[#8B8C95] bg-[#16181D] border border-[#1E2028] px-2.5 py-1 rounded-full">
        Ready
      </span>
    );
  }
  if (status === "connecting") {
    return (
      <span className="text-[10px] uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-400/30 px-2.5 py-1 rounded-full animate-pulse">
        Connecting
      </span>
    );
  }
  if (status === "connected") {
    if (mode === "speaking") {
      return (
        <span className="text-[10px] uppercase tracking-widest text-[#FF5A1F] bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 px-2.5 py-1 rounded-full">
          Maya speaking
        </span>
      );
    }
    return (
      <span className="text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-400/30 px-2.5 py-1 rounded-full">
        Listening
      </span>
    );
  }
  return (
    <span className="text-[10px] uppercase tracking-widest text-[#8B8C95] bg-[#16181D] border border-[#1E2028] px-2.5 py-1 rounded-full">
      Ending
    </span>
  );
}
