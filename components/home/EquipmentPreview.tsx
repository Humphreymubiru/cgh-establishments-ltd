"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { equipmentCategories } from "@/data/equipment";

export default function EquipmentPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cgh-red/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-cgh-red font-display text-sm font-semibold tracking-[0.25em] uppercase">
                Our Equipment
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cgh-charcoal mt-3">
                Built for Heavy Infrastructure
              </h2>
            </div>
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-cgh-red font-semibold hover:text-cgh-charcoal transition-colors group shrink-0"
            >
              View All Equipment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Equipment Grid — 2x2 cinematic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipmentCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative rounded-2xl overflow-hidden bg-cgh-charcoal shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating category number */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cgh-red/90 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content over image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {cat.description}
                  </p>

                  {/* Specs tags */}
                  <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.specs.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-sm text-cgh-muted mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Equipment fleet details are illustrative and pending official confirmation by CGH Establishments Ltd.
        </motion.p>
      </div>
    </section>
  );
}
