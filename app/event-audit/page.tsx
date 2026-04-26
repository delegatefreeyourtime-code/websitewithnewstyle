"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Answers = Record<number, string>;

interface Question {
  question: string;
  hint: string;
  options: { label: string; sub?: string }[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    question: "What's your trade?",
    hint: "Pick the one that best fits your work",
    options: [
      { label: "Plumbing & Heating" },
      { label: "Electrical" },
      { label: "Roofing & Cladding" },
      { label: "Building / Contractor" },
      { label: "Joinery & Carpentry" },
      { label: "Plastering & Painting" },
      { label: "Glazing & Windows" },
      { label: "HVAC / Aircon" },
      { label: "Groundworks" },
      { label: "Other Trade" },
    ],
  },
  {
    question: "Do you take calls after hours?",
    hint: "After 6pm and weekends",
    options: [
      { label: "Yes, always", sub: "Phone's always on" },
      { label: "Sometimes", sub: "Depends on the day" },
      { label: "No — we miss them", sub: "Off when we're off" },
    ],
  },
  {
    question: "How fast do you call back missed leads?",
    hint: "On average, how quickly do you respond?",
    options: [
      { label: "Within the hour", sub: "Fast response" },
      { label: "Same day", sub: "Usually that evening" },
      { label: "Next day or later", sub: "When you get a moment" },
    ],
  },
  {
    question: "How many calls do you miss per week?",
    hint: "Be honest — it's usually more than you think",
    options: [
      { label: "0–2", sub: "Very few" },
      { label: "3–5", sub: "A handful" },
      { label: "6–10", sub: "Quite a few" },
      { label: "10+", sub: "Losing count" },
    ],
  },
  {
    question: "What's your average job value?",
    hint: "Typical call-out or project value",
    options: [
      { label: "Under £500", sub: "Repairs & call-outs" },
      { label: "£500–£2,000", sub: "Standard jobs" },
      { label: "£2,000–£5,000", sub: "Bigger projects" },
      { label: "Over £5,000", sub: "Full installs / builds" },
    ],
  },
];

// ─── Calculation ─────────────────────────────────────────────────────────────

function calcLostPerYear(answers: Answers): number {
  const missedMap: Record<string, number> = {
    "0–2": 1,
    "3–5": 4,
    "6–10": 8,
    "10+": 14,
  };
  const jobMap: Record<string, number> = {
    "Under £500": 350,
    "£500–£2,000": 1200,
    "£2,000–£5,000": 3500,
    "Over £5,000": 8000,
  };
  const afterHoursMultiplier: Record<string, number> = {
    "Yes, always": 1.0,
    "Sometimes": 1.1,
    "No — we miss them": 1.3,
  };
  const callbackMultiplier: Record<string, number> = {
    "Within the hour": 1.0,
    "Same day": 1.2,
    "Next day or later": 1.5,
  };

  const missed = missedMap[answers[3]] ?? 4;
  const jobVal = jobMap[answers[4]] ?? 1200;
  const ahm = afterHoursMultiplier[answers[1]] ?? 1.1;
  const cbm = callbackMultiplier[answers[2]] ?? 1.2;

  const base = missed * 52 * 0.3 * jobVal;
  const result = base * ahm * cbm;
  return Math.round(result / 100) * 100;
}

// ─── Animated counter hook ───────────────────────────────────────────────────

function useCounter(target: number, active: boolean, duration = 2200) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, active, duration]);

  return value;
}

// ─── Step variants ───────────────────────────────────────────────────────────

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

// ─── Particle burst ──────────────────────────────────────────────────────────

const PARTICLE_COUNT = 12;

function ParticleBurst({ active }: { active: boolean }) {
  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = (i / PARTICLE_COUNT) * 2 * Math.PI;
    const distance = 80 + Math.random() * 120;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      delay: i * 0.04,
    };
  });

  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute w-1 h-1 bg-[#FF5A1F]"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Progress bar ────────────────────────────────────────────────────────────

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="relative flex-1 h-0.5 bg-[#E5E5E4]">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#FF5A1F]"
            animate={{ width: i < current ? "100%" : "0%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Intro screen ────────────────────────────────────────────────────────────

interface IntroScreenProps {
  onBegin: () => void;
}

function IntroScreen({ onBegin }: IntroScreenProps) {
  return (
    <motion.div
      key="intro"
      custom={1}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full text-center"
    >
      {/* Event badge */}
      <div className="inline-flex items-center gap-2 border border-[#FF5A1F]/30 bg-[#FF5A1F]/5 px-4 py-1.5 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-[#FF5A1F] opacity-75" />
          <span className="relative inline-flex h-2 w-2 bg-[#FF5A1F]" />
        </span>
        <span className="text-xs font-bold text-[#FF5A1F] uppercase tracking-[0.15em]">
          UK CONSTRUCTION WEEK — EXCLUSIVE OFFER
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#0B0C10] uppercase tracking-tight leading-tight mb-8">
        COMPLETE THE AUDIT TO UNLOCK
      </h1>

      {/* Discount callout */}
      <div className="bg-white border border-[#FF5A1F]/30 shadow-[0_0_40px_rgba(255,90,31,0.12)] p-10 mb-8 max-w-md mx-auto">
        <div className="text-xs font-bold text-[#FF5A1F] uppercase tracking-[0.15em] mb-3">
          YOUR LIMITED-TIME DISCOUNT
        </div>
        <div
          className="text-6xl md:text-7xl font-bold text-[#FF5A1F] mb-2 leading-none"
          style={{ textShadow: "0 0 60px rgba(255,90,31,0.25)" }}
        >
          50% OFF
        </div>
        <div className="text-base text-[#0B0C10] font-semibold uppercase tracking-wide">
          ANY PLAN — FOREVER
        </div>
      </div>

      <p className="text-[#6B6B70] text-base mb-10 max-w-md mx-auto">
        Takes 2 minutes. 5 quick questions. Personalised AI audit result.
      </p>

      {/* CTA */}
      <button
        onClick={onBegin}
        className="w-full max-w-md mx-auto bg-[#FF5A1F] text-white py-5 font-bold text-lg uppercase tracking-wide shadow-[0_0_30px_rgba(255,90,31,0.4)] hover:bg-[#FF7040] transition-colors block"
      >
        BEGIN →
      </button>
    </motion.div>
  );
}

// ─── Question screen ─────────────────────────────────────────────────────────

interface QuestionScreenProps {
  step: number;
  direction: number;
  onAnswer: (answer: string) => void;
  onBack: () => void;
  selected: string | undefined;
}

function QuestionScreen({ step, direction, onAnswer, onBack, selected }: QuestionScreenProps) {
  const q = QUESTIONS[step];

  return (
    <motion.div
      key={step}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full"
    >
      {/* Step label */}
      <p className="text-xs font-bold text-[#6B6B70] uppercase tracking-[0.15em] mb-6 text-center">
        STEP {step + 1} OF 5
      </p>

      {/* Question */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C10] uppercase tracking-tight text-center leading-tight mb-3">
        {q.question}
      </h2>
      <p className="text-[#6B6B70] text-center mb-8 text-sm">{q.hint}</p>

      {/* Answer tiles */}
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt) => {
          const isSelected = selected === opt.label;
          return (
            <motion.button
              key={opt.label}
              onClick={() => onAnswer(opt.label)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              className={[
                "min-h-[80px] border flex flex-col items-center justify-center gap-1 px-4 py-5 transition-all duration-200 cursor-pointer",
                isSelected
                  ? "border-[#FF5A1F] bg-[#FF5A1F]/10 shadow-[0_0_25px_rgba(255,90,31,0.25)]"
                  : "bg-white border-[#E5E5E4] hover:border-[#FF5A1F]/60 hover:shadow-[0_0_20px_rgba(255,90,31,0.15)]",
              ].join(" ")}
            >
              <span className="font-semibold text-[#0B0C10] text-base">{opt.label}</span>
              {opt.sub && (
                <span className="text-[#6B6B70] text-sm">{opt.sub}</span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Back button */}
      {step > 0 && (
        <div className="mt-8 flex justify-start">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-[#6B6B70] text-sm hover:text-[#0B0C10] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ─── Reveal screen ───────────────────────────────────────────────────────────

interface RevealScreenProps {
  direction: number;
  lostPerYear: number;
  onContinue: () => void;
}

function RevealScreen({ direction, lostPerYear, onContinue }: RevealScreenProps) {
  const [burstActive, setBurstActive] = useState(false);
  const [counterActive, setCounterActive] = useState(false);
  const count = useCounter(lostPerYear, counterActive);

  useEffect(() => {
    // Trigger particle burst immediately
    setBurstActive(true);
    // Start counter slightly after mount
    const t = setTimeout(() => setCounterActive(true), 300);
    return () => clearTimeout(t);
  }, []);

  const formatted = `£${count.toLocaleString("en-GB")}`;

  const bullets = [
    "AI answers every call 24/7 — never miss a lead again",
    "Instant callback via SMS when you're on the tools",
    "Bookings confirmed without you picking up the phone",
  ];

  return (
    <motion.div
      key="reveal"
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full text-center relative"
    >
      <ParticleBurst active={burstActive} />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-[#FF5A1F]/30 bg-[#FF5A1F]/5 px-4 py-1.5 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-[#FF5A1F] opacity-75" />
          <span className="relative inline-flex h-2 w-2 bg-[#FF5A1F]" />
        </span>
        <span className="text-xs font-bold text-[#FF5A1F] uppercase tracking-[0.15em]">
          YOUR AI AUDIT RESULT
        </span>
      </div>

      {/* Counter */}
      <div className="mb-3">
        <span
          className="text-6xl md:text-8xl font-bold text-[#FF5A1F] block"
          style={{ textShadow: "0 0 60px rgba(255,90,31,0.5)" }}
        >
          {formatted}
        </span>
        <p className="text-[#6B6B70] text-sm uppercase tracking-[0.15em] mt-3">
          LOST TO MISSED CALLS THIS YEAR
        </p>
      </div>

      {/* Fix bullets — animate in after counter */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        className="mt-10 space-y-3 text-left max-w-sm mx-auto"
      >
        {bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#00E676] flex-shrink-0 mt-0.5" />
            <span className="text-[#0B0C10] text-sm leading-relaxed">{b}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="mt-8"
      >
        <button
          onClick={onContinue}
          className="w-full bg-[#FF5A1F] text-white py-5 font-bold text-lg uppercase tracking-wide shadow-[0_0_30px_rgba(255,90,31,0.4)] hover:bg-[#FF7040] transition-colors"
        >
          GET MY PERSONALISED BREAKDOWN →
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Capture screen ──────────────────────────────────────────────────────────

interface CaptureScreenProps {
  direction: number;
  lostPerYear: number;
  answers: Answers;
  onSuccess: () => void;
}

function CaptureScreen({ direction, lostPerYear, answers, onSuccess }: CaptureScreenProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/event-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          tradeType: answers[0],
          answers,
          lostPerYear,
        }),
      });
      if (res.ok) {
        onSuccess();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-[#E5E5E4] px-4 py-3 text-[#0B0C10] placeholder-[#9CA0A6] focus:outline-none focus:border-[#FF5A1F]/60 transition-colors text-sm";

  return (
    <motion.div
      key="capture"
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C10] uppercase tracking-tight text-center leading-tight mb-3">
        ENTER YOUR DETAILS TO CLAIM
      </h2>
      <p className="text-[#6B6B70] text-center mb-8 text-sm">
        Your 50% discount and personalised breakdown, sent straight to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="07700 900000"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@yourbusiness.co.uk"
          className={inputClass}
        />

        {status === "error" && (
          <p className="text-red-600 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#FF5A1F] text-white py-5 font-bold text-lg uppercase tracking-wide shadow-[0_0_30px_rgba(255,90,31,0.4)] hover:bg-[#FF7040] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {status === "submitting" ? "CLAIMING…" : "CLAIM THE DISCOUNT →"}
        </button>
      </form>

      <p className="text-[#6B6B70] text-sm text-center mt-4">
        Your discount is locked in. No spam, ever.
      </p>
    </motion.div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────

interface SuccessScreenProps {
  direction: number;
  onReset: () => void;
}

function SuccessScreen({ direction, onReset }: SuccessScreenProps) {
  return (
    <motion.div
      key="success"
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full text-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center mb-6"
      >
        <CheckCircle2 className="w-20 h-20 text-[#00E676]" style={{ filter: "drop-shadow(0 0 20px rgba(0,230,118,0.4))" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-[#0B0C10] uppercase tracking-tight mb-4">
          DISCOUNT CLAIMED
        </h2>
        <p className="text-[#6B6B70] text-base mb-10">
          Your 50% off code and personalised breakdown are on their way.
        </p>

        <button
          onClick={onReset}
          className="text-[#6B6B70] text-sm border border-[#E5E5E4] px-6 py-2.5 hover:border-[#FF5A1F]/40 hover:text-[#0B0C10] transition-colors"
        >
          Start Again
        </button>

        <p className="text-[#6B6B70] text-xs mt-12 tracking-wider">
          delegate-me.com
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function EventAuditPage() {
  const [step, setStep] = useState(-1);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [lostPerYear, setLostPerYear] = useState(0);

  // step -1 = intro, 0–4 = questions, 5 = reveal, 6 = capture, 7 = success

  const advance = (nextStep: number) => {
    setDirection(1);
    setStep(nextStep);
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const handleAnswer = (answer: string) => {
    const next = { ...answers, [step]: answer };
    setAnswers(next);

    if (step < 4) {
      advance(step + 1);
    } else {
      // All questions answered — compute and reveal
      const lost = calcLostPerYear(next);
      setLostPerYear(lost);
      advance(5);
    }
  };

  const reset = () => {
    setDirection(-1);
    setAnswers({});
    setLostPerYear(0);
    setStep(-1);
  };

  const isQuestion = step >= 0 && step <= 4;
  const progressStep = isQuestion ? step : step >= 5 ? 5 : step;

  return (
    <div className="relative min-h-screen bg-[#FAFAF9] flex flex-col">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay-light pointer-events-none" />

      {/* Orange ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,90,31,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Progress bar — only visible during questions */}
      {step >= 0 && step <= 4 && (
        <div className="relative z-10 px-6 pt-8 max-w-2xl mx-auto w-full">
          <ProgressBar current={progressStep} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            {step === -1 && (
              <IntroScreen
                key="intro"
                onBegin={() => advance(0)}
              />
            )}

            {step >= 0 && step <= 4 && (
              <QuestionScreen
                key={`q-${step}`}
                step={step}
                direction={direction}
                onAnswer={handleAnswer}
                onBack={goBack}
                selected={answers[step]}
              />
            )}

            {step === 5 && (
              <RevealScreen
                key="reveal"
                direction={direction}
                lostPerYear={lostPerYear}
                onContinue={() => advance(6)}
              />
            )}

            {step === 6 && (
              <CaptureScreen
                key="capture"
                direction={direction}
                lostPerYear={lostPerYear}
                answers={answers}
                onSuccess={() => advance(7)}
              />
            )}

            {step === 7 && (
              <SuccessScreen
                key="success"
                direction={direction}
                onReset={reset}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
