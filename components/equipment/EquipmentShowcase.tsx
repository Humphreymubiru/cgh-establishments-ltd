"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface EquipmentCategory {
  id: string;
  name: string;
  description: string;
  note: string;
  image: string;
  specs: string[];
}

interface EquipmentShowcaseProps {
  categories: EquipmentCategory[];
}

export function EquipmentShowcase({ categories }: EquipmentShowcaseProps) {
  const customEase = [0, 0, 0.2, 1] as const;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <ScrollReveal key={category.id} delay={index * 0.1} direction="up" distance={30}>
          <div className="group overflow-hidden bg-white shadow-md transition-shadow hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-cgh-light">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: customEase }}
                className="h-full w-full"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-display text-2xl font-bold text-cgh-charcoal">
                {category.name}
              </h3>
              <p className="mb-4 text-cgh-muted">
                {category.description}
              </p>
              {category.specs && category.specs.length > 0 && (
                <ul className="space-y-2">
                  {category.specs.map((spec, i) => (
                    <li key={i} className="flex items-start text-sm text-cgh-charcoal">
                      <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-cgh-red" />
                      {spec}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
