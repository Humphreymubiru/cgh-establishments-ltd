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
  title = "Discuss your next road or infrastructure project.",
  subtitle = "Share the scope, location and programme. The CGH team can discuss the right construction or maintenance approach.",
  buttonText = "Contact CGH",
  buttonHref = "/contact",
}: ContactCTAProps) {
  return (
    <section className="bg-cgh-charcoal py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl border-t border-white/15 px-4 pt-10 sm:px-6 md:pt-14 lg:px-8">
        <ScrollReveal>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.04em] md:text-6xl">
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
            {subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <motion.div className="mt-8 inline-block" whileHover="hover">
            <Link
              href={buttonHref}
              className="group inline-flex items-center gap-3 bg-cgh-red px-8 py-4 text-sm font-display font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-cgh-red-dark"
            >
              {buttonText}
              <motion.span
                variants={{ hover: { x: 6 } }}
                transition={{ duration: 0.25 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
