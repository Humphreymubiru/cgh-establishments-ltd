"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

export default function ServiceGrid() {
  const displayServices = services;

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading 
            label="OUR SERVICES" 
            title="What We Do" 
            subtitle="Providing comprehensive road construction and civil engineering services across Uganda."
            align="center" 
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div className="group h-full bg-cgh-light border border-gray-100 p-7 hover:border-cgh-red/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col">
                  {/* Left accent border on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cgh-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                  
                  <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-sm mb-6 text-cgh-red group-hover:bg-cgh-red group-hover:text-white transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-display font-bold text-cgh-charcoal group-hover:text-cgh-red transition-colors">
                      {service.title}
                    </h3>
                    <span className="shrink-0 font-display text-xs font-bold tracking-[0.16em] text-cgh-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <p className="text-sm leading-7 text-cgh-muted font-body mb-8 flex-grow">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}

          <ScrollReveal delay={displayServices.length * 0.1}>
            <div className="h-full border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-8 text-center hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-display font-bold text-cgh-charcoal mb-4">
                Explore All Services
              </h3>
              <p className="text-cgh-muted font-body mb-6">
                Discover our full range of civil engineering capabilities.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center bg-cgh-charcoal hover:bg-black text-white px-6 py-3 font-semibold transition-colors duration-300 uppercase tracking-wide text-sm group"
              >
                View Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
