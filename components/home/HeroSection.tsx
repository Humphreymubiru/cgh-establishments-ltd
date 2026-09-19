"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[620px] sm:min-h-[680px] md:min-h-[760px] flex items-center justify-center overflow-hidden bg-cgh-charcoal text-white">
      {/* Background Image with Ken Burns */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.06] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <Image
          src="/images/hero/hero-grader.jpg"
          alt="Motor grader working on a red laterite road in Uganda"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <div className="absolute inset-y-0 left-0 z-[2] w-full max-w-3xl bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
            className="max-w-3xl"
        >
          {/* Company name badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-7 sm:mb-9"
          >
            <span className="inline-flex items-center gap-3 py-2.5 px-4 sm:px-5 border border-cgh-red/40 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_35px_rgba(200,16,46,0.18)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cgh-red shadow-[0_0_20px_rgba(200,16,46,0.8)] animate-pulse" />
              <span className="text-[10px] sm:text-sm font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-white/90">
                CGH Establishments Ltd
              </span>
            </span>
          </motion.div>

          {/* Giant headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.96] tracking-[-0.045em]">
              <span className="block text-white">BUILDING THE</span>
              <span className="block text-white">INFRASTRUCTURE</span>
              <span className="block">
                <span className="text-white">THAT </span>
                <span className="relative inline-block">
                  <span className="text-cgh-red">MOVES</span>
                  {/* Red underline accent */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-cgh-red"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  />
                </span>
              </span>
              <span className="block text-cgh-yellow">UGANDA.</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-base sm:text-lg text-gray-300 font-body max-w-xl mb-8 sm:mb-10 leading-relaxed">
              Road construction, road maintenance and civil infrastructure works across Uganda.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex w-full sm:w-auto items-center justify-center bg-cgh-red hover:bg-cgh-red-dark text-white px-6 py-3.5 sm:px-8 sm:py-4 font-semibold transition-colors duration-300 uppercase tracking-[0.14em] group"
            >
              Explore Our Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center border border-white/40 bg-black/10 hover:bg-white/10 text-white px-6 py-3.5 sm:px-8 sm:py-4 font-semibold transition-colors duration-300 uppercase tracking-[0.14em] group"
            >
              Contact CGH
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-3 bg-cgh-red rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
