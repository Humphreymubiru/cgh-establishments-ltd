"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    name: "EARTHWORKS",
    description: "Site preparation, bush clearing and earth movement to establish the road formation",
    image: "/images/process/earthworks.jpg",
  },
  {
    number: "02",
    name: "DRAINAGE",
    description: "Side drain construction, culvert installation and water management systems",
    image: "/images/process/drainage.jpg",
  },
  {
    number: "03",
    name: "GRADING",
    description: "Precision shaping of road surface, camber formation and level establishment",
    image: "/images/process/grading.jpg",
  },
  {
    number: "04",
    name: "GRAVELLING",
    description: "Placement and compaction of murram gravel wearing course material",
    image: "/images/process/gravelling.jpg",
  },
  {
    number: "05",
    name: "COMPLETION",
    description: "Finished road corridor — connectivity restored, communities connected",
    image: "/images/process/completion.jpg",
  },
];

export default function MotionProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-cgh-charcoal py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-cgh-red/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cgh-red">
            CGH In Motion
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
            From Ground to Road
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-cgh-red" />
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {stages.map((stage, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.14 }}
                className="relative"
              >
                {index < stages.length - 1 && (
                  <div className="absolute left-1/2 top-full hidden h-10 w-px -translate-x-1/2 bg-gradient-to-b from-cgh-red/50 to-transparent lg:block" />
                )}

                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch gap-0 overflow-hidden rounded-[28px] border border-white/5 bg-white/3 shadow-[0_25px_80px_rgba(0,0,0,0.28)]`}>
                  <motion.div
                    className="relative lg:w-1/2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={stage.image}
                        alt={stage.name}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        initial={{ opacity: 0.7 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0.7 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                      />

                      <motion.div
                        className="absolute -bottom-4 left-6 text-[4.5rem] font-display font-black leading-none text-white/10 md:text-[6rem]"
                        initial={{ x: -16, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 + index * 0.12 }}
                      >
                        {stage.number}
                      </motion.div>

                      <motion.div
                        className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/20 bg-black/25 backdrop-blur-sm"
                        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                      />
                    </div>
                  </motion.div>

                  <div className="flex items-center bg-cgh-charcoal lg:w-1/2">
                    <div className="w-full p-7 md:p-10 lg:p-12">
                      <div className="mb-6 flex items-center gap-4">
                        <motion.span
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-cgh-red/30 bg-cgh-red/10 text-lg font-display font-bold text-cgh-red"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.6, delay: 0.25 + index * 0.12 }}
                        >
                          {stage.number}
                        </motion.span>
                        <motion.div
                          className="h-px flex-1 bg-gradient-to-r from-cgh-red/60 to-transparent"
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ duration: 0.6, delay: 0.35 + index * 0.12 }}
                        />
                      </div>

                      <motion.h3
                        className="mb-4 font-display text-3xl font-bold tracking-wide text-white md:text-4xl"
                        initial={{ opacity: 0, x: 18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                        transition={{ duration: 0.7, delay: 0.28 + index * 0.12 }}
                      >
                        {stage.name}
                      </motion.h3>

                      <motion.p
                        className="max-w-xl text-base leading-relaxed text-gray-400 md:text-lg"
                        initial={{ opacity: 0, x: 18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                        transition={{ duration: 0.7, delay: 0.38 + index * 0.12 }}
                      >
                        {stage.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cgh-red font-semibold transition-colors hover:text-cgh-yellow group"
          >
            See Our Completed Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
