"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Conversation } from "@elevenlabs/client";
import { Phone, PhoneOff, X, Mic } from "lucide-react";

type CallStatus = "idle" | "connecting" | "connected" | "disconnecting";
type ConvMode = "speaking" | "listening";

interface TranscriptLine {
  id: string;
  role: "agent" | "user";
  text: string;
}

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_5101kq5h2w2vfgrv6e26yq4qcdws";

export default function VoiceWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<CallStatus>("idle");
  const [mode, setMode] = useState<ConvMode>("listening");
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [outputVol, setOutputVol] = useState(0);
  const [inputVol, setInputVol] = useState(0);

  const convRef = useRef<Conversation | null>(null);
  const volIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
    } else {
      if (volIntervalRef.current) clearInterval(volIntervalRef.current);
      setOutputVol(0);
      setInputVol(0);
    }
    return () => {
      if (volIntervalRef.current) clearInterval(volIntervalRef.current);
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

  const handleClose = useCallback(async () => {
    if (status !== "idle") {
      await endCall();
    }
    setOpen(false);
  }, [status, endCall]);

  const orbScale =
    status === "connected"
      ? mode === "speaking"
        ? 1 + outputVol * 0.5
        : 1 + inputVol * 0.2
      : 1;

  return (
    <>
      {/* Floating launcher */}
      {!open && (
        <button
          data-theme="dark"
          onClick={() => setOpen(true)}
          aria-label="Talk to Maya"
          className="font-sans fixed bottom-6 right-6 z-[60] group flex items-center gap-3 pl-4 pr-5 py-3 bg-[#1C1E26] hover:bg-[#23252E] text-[#F3F4F6] border border-[#2A2C36] shadow-2xl shadow-black/40 transition-all hover:shadow-[#FF5A1F]/30 hover:-translate-y-0.5 rounded-full"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#FF8C5A] to-[#FF5A1F] text-white shadow-md shadow-[#FF5A1F]/40">
            <Mic className="w-4 h-4" />
            <span className="absolute inset-0 rounded-full border border-[#FF5A1F]/50 animate-ping opacity-70" />
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[11px] uppercase tracking-widest text-[#8B8C95] font-medium">
              Talk to
            </span>
            <span className="text-sm font-semibold">Maya · Delegate AI</span>
          </span>
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div data-theme="dark" className="font-sans fixed bottom-6 right-6 z-[60] w-[360px] max-w-[calc(100vw-2rem)] bg-[#1C1E26] border border-[#2A2C36] shadow-2xl shadow-black/60 flex flex-col text-[#F3F4F6] animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2C36]">
            <div className="flex items-center gap-3">
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#FF8C5A] to-[#FF5A1F] text-white">
                <Mic className="w-4 h-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-widest text-[#FF5A1F] font-semibold">
                  Delegate AI
                </p>
                <p className="text-sm font-semibold">Maya · Voice Consultant</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="p-1.5 hover:bg-[#2A2C36] text-[#8B8C95] hover:text-[#F3F4F6] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Orb + status */}
          <div className="flex flex-col items-center gap-3 px-5 pt-6 pb-4">
            <div className="relative flex items-center justify-center h-[110px]">
              {status === "connected" && (
                <>
                  <div
                    className="absolute rounded-full border border-[#FF5A1F]/25 transition-all duration-100"
                    style={{
                      width: `${100 + outputVol * 60}px`,
                      height: `${100 + outputVol * 60}px`,
                    }}
                  />
                  <div
                    className="absolute rounded-full border border-[#FF5A1F]/15 transition-all duration-150"
                    style={{
                      width: `${130 + outputVol * 80}px`,
                      height: `${130 + outputVol * 80}px`,
                    }}
                  />
                </>
              )}
              {status === "connecting" && (
                <div className="absolute w-24 h-24 rounded-full border-2 border-[#FF5A1F]/40 animate-ping" />
              )}
              <div
                className="relative flex items-center justify-center rounded-full transition-all duration-75"
                style={{
                  width: 76,
                  height: 76,
                  background:
                    status === "connected"
                      ? `radial-gradient(circle at 35% 30%, #FFB089, #FF5A1F ${
                          50 + outputVol * 25
                        }%, #8C2A0A)`
                      : "radial-gradient(circle at 35% 30%, #FF8C5A, #FF5A1F 65%, #8C2A0A)",
                  transform: `scale(${orbScale})`,
                  boxShadow:
                    status === "connected"
                      ? `0 0 ${30 + outputVol * 40}px rgba(255,90,31,${
                          0.45 + outputVol * 0.4
                        })`
                      : "0 0 24px rgba(255,90,31,0.35)",
                  opacity: status === "idle" ? 0.95 : 1,
                }}
              >
                {status === "idle" && (
                  <Phone
                    className="w-7 h-7 text-white drop-shadow-sm"
                    strokeWidth={1.75}
                  />
                )}
              </div>
            </div>

            <StatusPill status={status} mode={mode} />
          </div>

          {/* Transcript */}
          <div className="flex-1 px-5 pb-3 overflow-y-auto space-y-2 max-h-[220px] min-h-[120px]">
            {transcript.length === 0 && status === "idle" && (
              <p className="text-center text-xs text-[#8B8C95] py-4 leading-relaxed">
                Tap below to speak with Maya — she&apos;ll ask about your business
                and walk through what we&apos;d automate first.
              </p>
            )}
            {transcript.length === 0 && status === "connecting" && (
              <p className="text-center text-xs text-[#8B8C95] py-4 animate-pulse">
                Connecting to Maya…
              </p>
            )}
            {transcript.map((line) => (
              <div
                key={line.id}
                className={`flex ${
                  line.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 text-sm leading-snug ${
                    line.role === "user"
                      ? "bg-[#FF5A1F] text-white"
                      : "bg-[#23252E] border border-[#2A2C36] text-[#F3F4F6]"
                  }`}
                >
                  {line.text}
                </div>
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>

          {/* Action button */}
          <div className="px-5 pb-5 pt-2 border-t border-[#2A2C36] bg-[#1C1E26]">
            {status === "idle" && (
              <button
                onClick={startCall}
                className="w-full flex items-center justify-center gap-2 bg-[#FF5A1F] hover:bg-[#e84e18] text-white font-semibold py-3 transition-colors shadow-md shadow-[#FF5A1F]/30"
              >
                <Phone className="w-4 h-4" /> Start Voice Call
              </button>
            )}
            {status === "connecting" && (
              <button
                disabled
                className="w-full bg-[#23252E] text-[#8B8C95] py-3 font-medium cursor-wait"
              >
                Connecting…
              </button>
            )}
            {status === "connected" && (
              <button
                onClick={endCall}
                className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-red-500/10 border border-red-500/40 text-red-400 font-semibold py-3 transition-colors"
              >
                <PhoneOff className="w-4 h-4" /> End Call
              </button>
            )}
            {status === "disconnecting" && (
              <button
                disabled
                className="w-full bg-[#23252E] text-[#8B8C95] py-3 font-medium"
              >
                Ending call…
              </button>
            )}
            <p className="text-[10px] text-[#8B8C95] text-center mt-2 leading-snug">
              Microphone access required
            </p>
          </div>

          {error && (
            <div className="px-5 pb-3 -mt-1">
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-2">
                {error}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function StatusPill({ status, mode }: { status: CallStatus; mode: ConvMode }) {
  if (status === "idle") {
    return (
      <span className="text-[11px] uppercase tracking-widest text-[#8B8C95] bg-[#23252E] border border-[#2A2C36] px-3 py-1 rounded-full">
        Ready
      </span>
    );
  }
  if (status === "connecting") {
    return (
      <span className="text-[11px] uppercase tracking-widest text-amber-300 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full animate-pulse">
        Connecting
      </span>
    );
  }
  if (status === "connected") {
    if (mode === "speaking") {
      return (
        <span className="text-[11px] uppercase tracking-widest text-[#FF5A1F] bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 px-3 py-1 rounded-full">
          Maya is speaking
        </span>
      );
    }
    return (
      <span className="text-[11px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 rounded-full">
        Listening…
      </span>
    );
  }
  return (
    <span className="text-[11px] uppercase tracking-widest text-[#8B8C95] bg-[#23252E] border border-[#2A2C36] px-3 py-1 rounded-full">
      Ending…
    </span>
  );
}
