"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  {
    value: "61.66",
    label: "KM Road Corridor",
    subtitle: "Documented in recent contract",
  },
  {
    value: "2.17",
    label: "BN UGX Contract",
    subtitle: "Documented contract value",
  },
  {
    value: "A-3",
    label: "UNABCEC Classification",
    subtitle: "Contractor classification",
  },
  {
    value: "3+",
    label: "Documented Projects",
    subtitle: "In this prototype",
  },
];

export default function ProjectStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section className="py-14 md:py-18 bg-cgh-charcoal text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cgh-red-dark/30 via-cgh-charcoal to-cgh-dark" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-10">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center md:text-left flex flex-col items-center md:items-start group border-t border-white/15 hover:border-cgh-red pt-5 transition-colors duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cgh-red mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-body">
                  {stat.subtitle}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
