import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stages = [
  {
    number: "01",
    name: "Prepare",
    description: "Site clearance, earthworks and formation establish the working corridor.",
    image: "/images/process/earthworks.jpg",
  },
  {
    number: "02",
    name: "Build",
    description: "Drainage, grading and material placement shape a durable road surface.",
    image: "/images/process/grading.jpg",
  },
  {
    number: "03",
    name: "Complete",
    description: "Compaction, finishing and handover return the corridor to service.",
    image: "/images/process/completion.jpg",
  },
];

export default function MotionProcess() {
  return (
    <section className="bg-cgh-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <ScrollReveal>
            <div className="max-w-sm">
              <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-cgh-red">
                How we work
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-cgh-charcoal md:text-5xl">
                From ground preparation to finished road.
              </h2>
              <p className="mt-6 text-base leading-8 text-cgh-muted">
                Our work follows the practical sequence required to deliver and maintain reliable road corridors.
              </p>
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cgh-red transition-colors hover:text-cgh-red-dark"
              >
                Explore services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {stages.map((stage, index) => (
              <ScrollReveal key={stage.number} delay={index * 0.08}>
                <article className="grid gap-6 py-7 md:grid-cols-[120px_1fr] md:items-center md:gap-8 md:py-9">
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-square">
                    <Image
                      src={stage.image}
                      alt={stage.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 120px"
                    />
                  </div>
                  <div className="grid gap-3 md:grid-cols-[72px_1fr] md:items-start md:gap-6">
                    <span className="font-display text-sm font-bold tracking-[0.16em] text-cgh-red">
                      {stage.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-cgh-charcoal">
                        {stage.name}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-cgh-muted md:text-base">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
