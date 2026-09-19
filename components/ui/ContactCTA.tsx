"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ContactCTA({
  title = "Have a Project in Mind?",
  subtitle = "Get in touch with CGH Establishments to discuss your road and infrastructure project requirements.",
  buttonText = "LET'S TALK",
  buttonHref = "/contact",
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 md:py-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #C8102E 25%, transparent 25%), linear-gradient(-45deg, #C8102E 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #C8102E 75%), linear-gradient(-45deg, transparent 75%, #C8102E 75%)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, 30px 0px",
          }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cgh-red via-cgh-yellow to-cgh-red" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.02] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-12">
          <ScrollReveal>
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-xl">
              {subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div className="mt-10 inline-block" whileHover="hover">
              <Link
                href={buttonHref}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-cgh-red to-cgh-red-dark px-8 py-4 text-lg font-display font-semibold tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(200,16,46,0.35)] transition-all duration-300 hover:brightness-110 md:px-10"
              >
                {buttonText}
                <motion.span
                  variants={{
                    hover: { x: 8 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
