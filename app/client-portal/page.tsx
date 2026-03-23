"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ClientPortalPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional - just prevents form submission
  };

  const handleGoogleLogin = () => {
    // Non-functional
  };

  return (
    <section className="relative min-h-screen py-24 pt-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />

      <div className="mx-auto max-w-md px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/logo.png"
              alt="Delegate"
              width={150}
              height={40}
              className="h-10 w-auto mx-auto mix-blend-screen"
            />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Client Portal
          </h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to access your dashboard
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#16181D] border border-[#1E2028] shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-12 w-full border border-[#1E2028] bg-[#0B0C10] px-4 py-2 text-sm text-[#F3F4F6] placeholder:text-[#8B8C95] focus:outline-none focus:border-[#FF5A1F] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-12 w-full border border-[#1E2028] bg-[#0B0C10] px-4 py-2 text-sm text-[#F3F4F6] placeholder:text-[#8B8C95] focus:outline-none focus:border-[#FF5A1F] transition-colors"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-full"
            >
              Log in
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1E2028]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#16181D] px-4 text-[#8B8C95]">
                or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full h-12 rounded-full"
            onClick={handleGoogleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Log in with Google
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Not a client yet?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            Get in touch
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
