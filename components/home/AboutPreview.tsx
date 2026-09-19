import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Route, HardHat, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const strengths = [
  { icon: Route, label: "Road Works" },
  { icon: HardHat, label: "Civil Works" },
  { icon: Wrench, label: "Maintenance" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-cgh-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal direction="right">
              <div className="relative overflow-hidden rounded-[28px] border border-cgh-border bg-white shadow-[0_22px_60px_rgba(26,26,26,0.08)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero/hero-grader.jpg"
                    alt="Road construction team and machinery working on infrastructure projects"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                      Infrastructure Progress
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                      {strengths.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/15 bg-white/10 px-2 py-2 text-center backdrop-blur-sm"
                        >
                          <Icon className="mx-auto h-4 w-4 text-cgh-yellow sm:h-5 sm:w-5" />
                          <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/90 sm:text-[10px]">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left">
              <div className="mb-5 text-left">
                <span className="inline-block rounded-full border border-cgh-red/20 bg-cgh-red/5 px-4 py-2 text-sm font-semibold tracking-[0.24em] text-cgh-red uppercase sm:text-base">
                  About CGH
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-cgh-charcoal sm:text-4xl lg:text-[3.2rem]">
                Engineering Infrastructure for Better Connectivity
              </h2>

              <div className="mt-6 space-y-6 text-cgh-muted font-body text-base sm:text-lg">
                <div>
                  <p className="text-2xl font-display font-bold tracking-tight text-cgh-charcoal sm:text-3xl">
                    CGH Establishments Ltd
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-cgh-red">
                    Uganda Road & Civil Infrastructure Specialists
                  </p>
                </div>

                <p>
                  CGH Establishments Ltd is a Ugandan construction company specializing in civil infrastructure, road construction, and maintenance works.
                </p>
                <p>
                  We are recognized by the Uganda National Association of Building and Civil Engineering Contractors (UNABCEC) and maintain an active presence in executing critical infrastructure projects.
                </p>

                <div className="flex items-center gap-4 border-y border-gray-200 py-5">
                  <div className="flex h-16 w-16 items-center justify-center bg-cgh-charcoal text-lg font-display font-bold text-white rounded-xl shadow-sm">
                    A-3
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cgh-charcoal">
                      UNABCEC Classification
                    </p>
                    <p className="mt-1 text-sm text-cgh-muted">
                      Documented contractor status for public infrastructure works.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-cgh-red font-semibold hover:text-cgh-red-dark transition-colors group uppercase tracking-[0.18em]"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
