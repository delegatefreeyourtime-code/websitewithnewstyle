"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const planOptions = [
  "Starter",
  "Growth",
  "Scale",
  "Not sure yet",
];

const inputClasses = cn(
  "w-full border border-[#1E2028] bg-[#0B0C10] px-4 py-3",
  "text-[#F3F4F6] placeholder-[#8B8C95]",
  "focus:border-[#FF5A1F] focus:outline-none focus:ring-0",
  "transition-all duration-200"
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center py-12"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
          className="mx-auto w-16 h-16 bg-[#FF5A1F] flex items-center justify-center mb-6"
          aria-hidden="true"
        >
          <CheckCircle2 className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Thank you!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ve received your message and will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@company.com"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <label
          htmlFor="company"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your company name"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <label
          htmlFor="plan"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Which plan are you most interested in?
        </label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select an option</option>
          {planOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(inputClasses, "resize-none")}
          placeholder="Tell us about your automation needs..."
        />
      </motion.div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/10 border border-red-500/30"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-red-400 text-sm">{error}</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
