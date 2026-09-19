import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactCTA from '@/components/ui/ContactCTA';
import { projects } from '@/data/projects';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const coreValues = [
  ['01', 'Quality', 'We are committed to delivering work that meets required standards and performs reliably in the field.'],
  ['02', 'Integrity', 'We conduct our work with honesty, accountability and professionalism.'],
  ['03', 'Safety', 'We prioritize safe working practices for our people, communities and project environments.'],
  ['04', 'Reliability', 'We approach every project with discipline, responsibility and commitment to delivery.'],
  ['05', 'Teamwork', 'We work collaboratively with clients, partners, communities and our teams to achieve project objectives.'],
  ['06', 'Responsibility', 'We recognize our responsibility to the communities, environment and infrastructure we work within.'],
];

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
                      alt="Drainage infrastructure works"
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

      {/* Direction and proposed values */}
      <section className="bg-cgh-light py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Direction"
              title="Vision, mission and working principles"
              subtitle="Proposed website copy pending confirmation by CGH Establishments Ltd."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-12 border-y border-gray-200 py-10 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <div className="border-l-2 border-cgh-red pl-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-cgh-red">Vision</p>
                <p className="mt-5 max-w-xl font-display text-2xl font-semibold leading-tight text-cgh-charcoal md:text-3xl">
                  To be a trusted leader in road and civil infrastructure development, contributing to safer, more reliable and better-connected communities across Uganda.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="border-l-2 border-cgh-yellow pl-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-cgh-red">Mission</p>
                <p className="mt-5 max-w-xl text-lg leading-8 text-cgh-muted">
                  To deliver quality road and civil infrastructure works through competent people, effective project management and responsible use of equipment and resources.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-14">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-cgh-red">Core Values</p>
            <div className="mt-6 grid border-t border-gray-200 md:grid-cols-2 md:divide-x md:divide-gray-200">
              {coreValues.map(([number, title, description], index) => (
                <ScrollReveal key={number} delay={index * 0.05}>
                  <div className="grid grid-cols-[48px_1fr] gap-5 border-b border-gray-200 py-6 md:px-6 first:md:pl-0">
                    <span className="font-display text-sm font-bold tracking-[0.16em] text-cgh-red">{number}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-cgh-charcoal">{title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-7 text-cgh-muted">{description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
