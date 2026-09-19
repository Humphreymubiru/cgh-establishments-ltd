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
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-cgh-red">
                Equipment
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-cgh-charcoal md:text-5xl">
                Plant and equipment for the work ahead.
              </h2>
            </div>
            <Link
              href="/equipment"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-cgh-red transition-colors hover:text-cgh-red-dark"
            >
              View equipment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {equipmentCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden bg-cgh-charcoal"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center bg-cgh-red">
                  <span className="font-display text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300 md:text-base">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-7 text-cgh-muted">
          Equipment fleet details are illustrative and pending official confirmation by CGH Establishments Ltd.
        </p>
      </div>
    </section>
  );
}
