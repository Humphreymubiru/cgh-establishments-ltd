import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactCTA from '@/components/ui/ContactCTA';
import { projects } from '@/data/projects';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | CGH Establishments Ltd',
  description: 'CGH Establishments Ltd is a Ugandan construction company operating in the road and civil infrastructure sector.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-cgh-charcoal text-cgh-light pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="flex items-center text-sm font-medium text-cgh-muted mb-6">
                <Link href="/" className="hover:text-cgh-yellow transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-cgh-yellow">About</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                About CGH <span className="text-cgh-red">Establishments</span>
              </h1>
              <p className="text-xl md:text-2xl text-cgh-muted font-light max-w-2xl">
                A Ugandan construction company operating in the road and civil infrastructure sector.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Overview & What We Do */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionHeading 
                label="Company Overview" 
                title="Infrastructure Focus" 
                subtitle="CGH Establishments Ltd is a Ugandan construction company operating in the road and civil infrastructure sector." 
                align="left" 
              />
              <div className="mt-8 space-y-6 text-lg text-cgh-muted">
                <p>
                  We focus on infrastructure development and mechanized road maintenance, bringing engineering capability to national and regional road networks.
                </p>
                <p>
                  Our documented project experience across mechanised road maintenance demonstrates our capacity to execute large-scale public works projects with precision and reliability.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                  <Image
                    src="/images/projects/myanzi-road.jpg"
                    alt="Road construction work in progress"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="inline-flex items-center rounded-full bg-cgh-red px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Road Works
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-200">
                    <Image
                      src="/images/projects/culvert-work.jpg"
                      alt="Culvert installation and drainage infrastructure"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-cgh-charcoal p-6 flex items-center justify-center text-center shadow-sm">
                    <div className="absolute inset-0 opacity-10">
                      <Image
                        src="/images/projects/earthworks.jpg"
                        alt="Earthworks and site preparation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="relative z-10">
                      <ShieldCheck className="w-14 h-14 text-cgh-yellow mx-auto mb-3" />
                      <h3 className="text-2xl font-display font-bold text-white mb-1">A-3</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-300">UNABCEC</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Evidence Statement */}
      <section className="py-20 bg-cgh-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 bg-cgh-red/10 text-cgh-red font-semibold rounded-full mb-6">
              Documented Record
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-cgh-charcoal mb-6">
              Public Procurement Experience
            </h2>
            <p className="text-lg text-cgh-muted">
              Our capability is evidenced through public procurement and government monitoring records. We have successfully completed significant civil works under scrutiny, maintaining standards in mechanised road maintenance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Milestones"
            title="Documented Project Experience"
            align="center"
          />

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cgh-red via-cgh-red/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-14">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <div className={`relative grid md:grid-cols-2 gap-5 md:gap-10 items-center ${index % 2 === 0 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
                    <div className="md:pl-8">
                      <div className="rounded-2xl border border-gray-200 bg-cgh-light p-5 shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(26,26,26,0.08)] md:p-7">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center rounded-full bg-cgh-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cgh-red">
                            {project.number}
                          </span>
                          <span className="text-sm font-medium text-cgh-muted">{project.commencement} — {project.completion}</span>
                        </div>

                        <h3 className="mb-3 text-xl font-display font-bold text-cgh-charcoal md:text-2xl">
                          <Link href={`/projects/${project.slug}`} className="hover:text-cgh-red transition-colors">
                            {project.title}
                          </Link>
                        </h3>

                        <p className="text-sm leading-relaxed text-cgh-muted md:text-base">
                          {project.scope}
                        </p>
                      </div>
                    </div>

                    <div className="md:pr-8">
                      <div className="relative ml-10 md:ml-0">
                        <div className="absolute -left-10 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-cgh-red md:block" />
                        <div className="absolute -left-[2.15rem] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-cgh-red md:block" />
                        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
                          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cgh-red">Project Type</div>
                          <div className="mt-2 text-lg font-display font-bold text-cgh-charcoal">{project.projectType}</div>
                          <div className="mt-2 text-sm text-cgh-muted">{project.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
