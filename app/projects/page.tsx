import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactCTA from '@/components/ui/ContactCTA';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ChevronRight, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Projects | CGH Establishments Ltd',
  description: 'Documented project experience across mechanised road maintenance.',
};

export default function ProjectsPage() {
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
                <span className="text-cgh-yellow">Projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Our <span className="text-cgh-red">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-cgh-muted font-light max-w-2xl">
                Documented project experience demonstrating our capability to execute civil works with precision.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Listing */}
      <section className="py-20 bg-cgh-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} index={index} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 bg-white p-6 rounded-xl border border-gray-200 flex items-start">
              <Info className="w-6 h-6 text-cgh-muted mr-4 shrink-0 mt-0.5" />
              <p className="text-cgh-muted text-sm md:text-base">
                These projects represent publicly documented records as detailed in government monitoring reports and UNABCEC classifications. They do not represent CGH Establishments Ltd&apos;s complete portfolio.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
