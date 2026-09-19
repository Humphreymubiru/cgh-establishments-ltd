import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AnimatedExcavator() {
  return (
    <section className="bg-cgh-charcoal py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
        <ScrollReveal direction="right">
          <div className="relative overflow-hidden">
            <Image
              src="/images/equipment/excavator.jpg"
              alt="Excavator used for civil infrastructure works"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-cgh-red" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="max-w-xl">
            <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-cgh-yellow">
              Field capability
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] md:text-5xl">
              Equipment that works at road level.
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
              Civil infrastructure depends on dependable plant, experienced operators and disciplined site work. CGH&apos;s equipment capability supports earthworks, road formation, drainage and maintenance operations.
            </p>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="max-w-md text-sm leading-7 text-gray-400">
                Equipment fleet details are illustrative and pending official confirmation by CGH Establishments Ltd.
              </p>
              <Link
                href="/equipment"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-cgh-yellow"
              >
                View equipment capability
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
