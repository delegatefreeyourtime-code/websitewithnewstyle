"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lightbulb, DollarSign, Cog, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GlassFilter } from "@/components/ui/liquid-glass";

const navigation = [
  { name: "Solutions", url: "/solutions", icon: Lightbulb },
  { name: "Pricing", url: "/pricing", icon: DollarSign },
  { name: "How It Works", url: "/how-it-works", icon: Cog },
  { name: "About", url: "/about", icon: Users },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const activeTab = navigation.find(item => pathname === item.url)?.name || null;
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const glassContainerStyle = isHomePage ? {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05)",
  } : undefined;

  return (
    <header className="sticky top-0 z-50">
      <GlassFilter />

      <nav className="mx-auto max-w-7xl px-6 lg:px-8 pt-4" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "flex h-16 items-center justify-between rounded-full px-4",
            isHomePage && "relative overflow-hidden"
          )}
          style={glassContainerStyle}
        >
          {isHomePage && (
            <>
              <div
                className="absolute inset-0 z-0 overflow-hidden rounded-full"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  filter: "url(#glass-distortion)",
                  isolation: "isolate",
                }}
              />
              <div
                className="absolute inset-0 z-10 rounded-full"
                style={{ background: "rgba(255, 255, 255, 0.6)" }}
              />
              <div
                className="absolute inset-0 z-20 rounded-full overflow-hidden"
                style={{
                  boxShadow:
                    "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.7), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
                }}
              />
            </>
          )}

          <div className={cn("flex lg:flex-1", isHomePage && "relative z-30")}>
            <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Delegate"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className={cn("flex lg:hidden", isHomePage && "relative z-30")}>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
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

          <div className={cn("hidden lg:flex", isHomePage && "relative z-30")}>
            <div className="flex items-center gap-1 bg-white/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={cn(
                      "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors",
                      "text-foreground/80 hover:text-foreground",
                      isActive && "text-foreground"
                    )}
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-muted rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-foreground rounded-t-full">
                          <div className="absolute w-12 h-6 bg-foreground/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-foreground/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-foreground/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={cn("hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3", isHomePage && "relative z-30")}>
            <Button asChild className="rounded-full">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => window.location.href = '/contact'}
            >
              Client Portal
            </Button>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              id="mobile-menu"
              className="lg:hidden absolute left-6 right-6 top-full mt-2 bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden"
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
                          "flex items-center gap-3 px-5 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-neutral-100 text-foreground"
                            : "text-foreground/70 hover:bg-neutral-50 hover:text-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon size={18} className={isActive ? "text-foreground" : "text-foreground/50"} />
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="border-t border-neutral-100 mt-2 pt-2 px-4 pb-3 space-y-2">
                  <Button asChild className="w-full rounded-full h-11">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-full h-11"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.location.href = '/contact';
                    }}
                  >
                    Client Portal
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
