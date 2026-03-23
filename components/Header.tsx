"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, DollarSign, Cog, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Pricing", url: "/pricing", icon: DollarSign },
  { name: "How It Works", url: "/how-it-works", icon: Cog },
  { name: "About", url: "/about", icon: Users },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeTab = navigation.find(item => pathname === item.url)?.name || null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 pt-4" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-16 items-center justify-between px-4"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Delegate"
                width={210}
                height={56}
                className="h-14 w-auto mix-blend-screen"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-[#8B8C95] hover:text-[#F3F4F6] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex">
            <div
              className={cn(
                "flex items-center gap-1 py-1.5 px-2 transition-all duration-300",
                scrolled
                  ? "bg-[#16181D]/90 backdrop-blur-xl border border-[#1E2028]"
                  : "bg-[#16181D]/60 backdrop-blur-md border border-[#1E2028]/50"
              )}
            >
              {navigation.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={cn(
                      "relative cursor-pointer text-[13px] font-medium px-5 py-2 tracking-[0.08em] uppercase transition-colors",
                      isActive
                        ? "text-[#F3F4F6]"
                        : "text-[#8B8C95] hover:text-[#F3F4F6]"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-[#FF5A1F] hover:bg-[#FF7040] transition-colors tracking-wide shadow-[0_0_20px_rgba(255,90,31,0.3)] hover:shadow-[0_0_30px_rgba(255,90,31,0.5)]"
            >
              Get In Touch
            </Link>
            <Link
              href="/client-portal"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold text-[#F3F4F6] border border-[#FF5A1F]/40 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 transition-colors tracking-wide"
            >
              Client Portal
            </Link>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              id="mobile-menu"
              className="lg:hidden absolute left-6 right-6 top-full mt-2 bg-[#16181D] border border-[#1E2028] shadow-xl overflow-hidden"
            >
              <div className="py-2">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15, delay: index * 0.03 }}
                    >
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center gap-3 px-5 py-3 text-sm font-medium tracking-[0.08em] uppercase transition-colors",
                          isActive
                            ? "bg-[#1E2028] text-[#F3F4F6] border-l-2 border-[#FF5A1F]"
                            : "text-[#8B8C95] hover:bg-[#1E2028] hover:text-[#F3F4F6]"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon size={16} className={isActive ? "text-[#FF5A1F]" : "text-[#8B8C95]"} />
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="border-t border-[#1E2028] mt-2 pt-2 px-4 pb-3 space-y-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full h-11 text-sm font-semibold text-white bg-[#FF5A1F] hover:bg-[#FF7040] transition-colors tracking-wide"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/client-portal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full h-11 text-sm font-semibold text-[#F3F4F6] border border-[#FF5A1F]/40 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/10 transition-colors tracking-wide"
                  >
                    Client Portal
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
