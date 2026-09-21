"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/equipment", label: "EQUIPMENT" },
  { href: "/contact", label: "CONTACT" },
];

type ThemeMode = "light" | "dark" | "system";

const themeOptions: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function ThemePicker({
  themeMode,
  isDarkMode,
  isScrolled,
  onChange,
}: {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  isScrolled: boolean;
  onChange: (mode: ThemeMode) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = themeMode === "system" ? Monitor : themeMode === "dark" ? Moon : Sun;
  const themeLabel = themeOptions.find((option) => option.value === themeMode)?.label;

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={`Theme: ${themeLabel}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? "border-white/10 bg-slate-900 text-slate-100 hover:bg-slate-800"
              : "border-gray-200 bg-white text-cgh-charcoal hover:bg-gray-50"
            : "border-white/30 bg-white/5 text-white hover:bg-white/10"
        }`}
      >
        <Icon className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute right-0 top-14 w-36 overflow-hidden rounded-lg border border-gray-200 bg-white p-1 shadow-xl dark:border-white/10 dark:bg-slate-900"
          >
            {themeOptions.map((option) => {
              const OptionIcon = option.value === "system" ? Monitor : option.value === "dark" ? Moon : Sun;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    themeMode === option.value
                      ? "bg-cgh-red text-white"
                      : "text-slate-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <OptionIcon className="h-4 w-4" />
                  {option.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("cgh-theme");
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      setThemeMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const dark = themeMode === "dark" || (themeMode === "system" && mediaQuery.matches);
      const resolvedTheme = dark ? "dark" : "light";
      setResolvedTheme(resolvedTheme);
      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.style.colorScheme = resolvedTheme;
    };

    applyTheme();
    window.localStorage.setItem("cgh-theme", themeMode);

    if (themeMode === "system") {
      mediaQuery.addEventListener("change", applyTheme);
      return () => mediaQuery.removeEventListener("change", applyTheme);
    }
  }, [themeMode]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDarkMode
              ? "bg-slate-950/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.45)] border-b border-white/10"
              : "bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(17,17,17,0.08)] border-b border-gray-200/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span
                  className={`font-display text-2xl font-bold tracking-tight transition-colors duration-500 sm:text-[1.7rem] ${
                    isScrolled ? "text-cgh-red" : "text-white"
                  }`}
                >
                  CGH
                </span>
                <span
                  className={`font-display text-[11px] font-semibold tracking-[0.18em] uppercase -mt-1 transition-colors duration-500 sm:text-[11.5px] ${
                    isScrolled ? "text-cgh-charcoal" : "text-cgh-yellow"
                  }`}
                >
                  Establishments Ltd
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-sm font-medium tracking-wider transition-colors duration-300 ${
                    pathname === link.href
                      ? isScrolled
                        ? "text-cgh-red"
                        : "text-cgh-yellow"
                      : isScrolled
                        ? "text-cgh-charcoal hover:text-cgh-red"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? "bg-cgh-red" : "bg-cgh-yellow"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <ThemePicker
                themeMode={themeMode}
                isDarkMode={isDarkMode}
                isScrolled={isScrolled}
                onChange={setThemeMode}
              />

              <Link
                href="/contact"
                className={`group inline-flex items-center gap-2 font-display text-sm font-semibold tracking-[0.18em] px-6 py-3 transition-all duration-300 shadow-[0_12px_30px_rgba(200,16,46,0.18)] ${
                  isScrolled
                    ? "bg-cgh-red text-white hover:bg-cgh-red-dark"
                    : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-cgh-charcoal"
                }`}
              >
                LET&apos;S WORK
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemePicker
                themeMode={themeMode}
                isDarkMode={isDarkMode}
                isScrolled={isScrolled}
                onChange={setThemeMode}
              />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? "text-cgh-charcoal" : "text-white"
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-cgh-charcoal lg:hidden"
          >
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-6 p-2 text-white transition-colors hover:text-cgh-yellow"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-display text-2xl font-bold tracking-wider transition-colors ${
                      pathname === link.href
                        ? "text-cgh-yellow"
                        : "text-white hover:text-cgh-yellow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-3 bg-cgh-red text-white font-display font-semibold text-lg px-8 py-4 tracking-wider hover:bg-cgh-red-dark transition-colors"
                >
                  LET&apos;S BUILD
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
