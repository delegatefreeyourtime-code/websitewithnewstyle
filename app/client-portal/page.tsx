"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || "https://apprentis-delegateos.vercel.app";

export default function ClientPortalPage() {
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
          className="bg-[#16181D] border border-[#1E2028] shadow-lg p-8 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Click below to be taken to the secure portal login page.
          </p>
          <a
            href={PORTAL_URL}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-white bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 transition-colors"
          >
            Access Portal
          </a>
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
