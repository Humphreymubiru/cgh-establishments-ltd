import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Ruler } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            label="Our portfolio"
            title="Selected project experience"
            subtitle="A sample of road maintenance and civil infrastructure work documented across Uganda."
          />
          <ScrollReveal delay={0.15} direction="left">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-cgh-red transition-colors hover:text-cgh-red-dark"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {featuredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.08}
              className={index === 0 ? "lg:row-span-2" : ""}
            >
              <article className={`group relative overflow-hidden bg-cgh-charcoal ${index === 0 ? "h-[520px]" : "h-[250px]"}`}>
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute left-6 top-6 z-10 font-display text-sm font-bold tracking-[0.18em] text-white/70">
                  {project.number}
                </div>

                <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 md:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cgh-yellow">
                    {project.projectType}
                  </p>
                  <h3 className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"} font-display font-bold leading-tight text-white`}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition-colors hover:text-cgh-yellow before:absolute before:inset-0"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/75">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4 text-cgh-red" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Ruler className="mr-1 h-4 w-4 text-cgh-red" />
                      <span>{project.roadLength}</span>
                    </div>
                  </div>
                  <span className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-cgh-yellow">
                    View project <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
