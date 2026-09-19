import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactCTA from '@/components/ui/ContactCTA';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | CGH Establishments Ltd',
  description: 'Our civil engineering and infrastructure services.',
};

export default function ServicesPage() {
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
                <span className="text-cgh-yellow">Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Our <span className="text-cgh-red">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-cgh-muted font-light max-w-2xl">
                Delivering excellence in road and civil infrastructure across Uganda.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const relatedProjects = service.relatedProjectSlugs
                ? projects.filter(p => service.relatedProjectSlugs?.includes(p.slug))
                : [];

              const imageMap: Record<string, string> = {
                'road-construction': '/images/projects/myanzi-road.jpg',
                'drainage-works': '/images/projects/culvert-work.jpg',
                'culvert-installation': '/images/projects/culvert-work.jpg',
                'earthworks': '/images/projects/earthworks.jpg',
                'bridge-civil': '/images/process/completion.jpg',
              };

              return (
                <ScrollReveal key={service.id}>
                  <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-cgh-red/10 text-cgh-red mb-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-cgh-charcoal mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-cgh-muted mb-8">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-bold tracking-wider text-cgh-charcoal uppercase mb-4">Key Activities</h4>
                        <ul className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-cgh-red mr-3 mt-1">•</span>
                              <span className="text-cgh-muted">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {relatedProjects.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold tracking-wider text-cgh-charcoal uppercase mb-4">Related Projects</h4>
                          <div className="space-y-3">
                            {relatedProjects.map(project => (
                              <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                className="group flex items-center justify-between p-4 bg-cgh-light rounded-lg hover:bg-gray-100 transition-colors"
                              >
                                <span className="font-semibold text-cgh-charcoal">{project.title}</span>
                                <ArrowRight className="w-4 h-4 text-cgh-muted group-hover:text-cgh-red transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                        <Image
                          src={imageMap[service.id] ?? '/images/projects/myanzi-road.jpg'}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                            <Icon className="w-3.5 h-3.5" />
                            {service.shortTitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
