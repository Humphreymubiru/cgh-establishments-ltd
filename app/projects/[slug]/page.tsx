import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactCTA from '@/components/ui/ContactCTA';
import { projects, getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import {
  ChevronRight, ArrowRight, ArrowLeft, MapPin, Calendar, Clock,
  DollarSign, AlertCircle, HardHat, Mountain, Ruler, Layers, Gauge, Droplets
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found | CGH Establishments Ltd' };
  return {
    title: `${project.title} | Projects | CGH Establishments Ltd`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  const specGroups = [
    {
      title: "Site Conditions",
      icon: Mountain,
      items: [
        { label: "Terrain", value: project.technicalSpecs.terrain },
        { label: "Soil Type", value: project.technicalSpecs.soilType },
      ],
    },
    {
      title: "Design Parameters",
      icon: Ruler,
      items: [
        { label: "Design Standard", value: project.technicalSpecs.designStandard },
        { label: "Carriageway Width", value: project.technicalSpecs.carriageWidth },
        { label: "Shoulder Width", value: project.technicalSpecs.shoulderWidth },
      ],
    },
    {
      title: "Materials & Testing",
      icon: Layers,
      items: [
        { label: "Material Specification", value: project.technicalSpecs.materialSpecs },
        { label: "CBR - Subgrade", value: project.technicalSpecs.cbrSubgrade },
        { label: "CBR - Gravel", value: project.technicalSpecs.cbrGravel },
        { label: "Gravel Thickness", value: project.technicalSpecs.gravelThickness },
      ],
    },
    {
      title: "Construction Standards",
      icon: Gauge,
      items: [
        { label: "Camber / Crossfall", value: project.technicalSpecs.camberCrossfall },
        { label: "Compaction Requirement", value: project.technicalSpecs.compaction },
      ],
    },
    {
      title: "Drainage",
      icon: Droplets,
      items: [
        { label: "Drainage Approach", value: project.technicalSpecs.drainageApproach },
      ],
    },
  ];

  return (
    <>
      {/* Project Hero */}
      <section className="relative bg-cgh-charcoal text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[500px]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex items-center text-sm font-medium text-gray-400 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-cgh-yellow">{project.title}</span>
            </div>

            <div className="max-w-4xl">
              <div className="text-cgh-red font-display font-bold text-xl mb-4 tracking-wider">
                PROJECT {project.number}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center text-lg text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-cgh-red" />
                {project.location}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Bar */}
      <div className="bg-cgh-red text-white py-8 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <ScrollReveal delay={0.1}>
              <div className="px-4">
                <div className="text-white/70 text-sm font-semibold tracking-wider uppercase mb-1">Road Length</div>
                <div className="text-xl md:text-2xl font-display font-bold">{project.roadLength}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="px-4">
                <div className="text-white/70 text-sm font-semibold tracking-wider uppercase mb-1">Contract Value</div>
                <div className="text-xl md:text-2xl font-display font-bold">{project.contractValueShort}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="px-4">
                <div className="text-white/70 text-sm font-semibold tracking-wider uppercase mb-1">Commencement</div>
                <div className="text-sm md:text-base font-display font-bold">{project.commencement}</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="px-4">
                <div className="text-white/70 text-sm font-semibold tracking-wider uppercase mb-1">Completion</div>
                <div className="text-sm md:text-base font-display font-bold">{project.completion}</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Project Details Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-display font-bold text-cgh-charcoal mb-6">Project Overview</h2>
                  <p className="text-lg text-cgh-muted leading-relaxed">{project.description}</p>
                </div>
              </ScrollReveal>

              {/* Scope/Activities Timeline */}
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl font-display font-bold text-cgh-charcoal mb-8">Scope of Works</h3>
                  <div className="space-y-6">
                    {project.scopeActivities.map((activity: string, index: number) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-6">
                          <div className="w-8 h-8 rounded-full bg-cgh-red/10 border border-cgh-red/30 flex items-center justify-center text-sm font-bold text-cgh-red z-10 shrink-0">
                            {index + 1}
                          </div>
                          {index !== project.scopeActivities.length - 1 && (
                            <div className="w-px h-full bg-cgh-red/20 my-2" />
                          )}
                        </div>
                        <div className="pb-6 pt-1">
                          <p className="text-cgh-charcoal font-medium">{activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Technical Specifications */}
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl font-display font-bold text-cgh-charcoal mb-2">Technical Specifications</h3>
                  <p className="text-sm text-cgh-muted mb-8">
                    Typical engineering parameters for this class of mechanised road maintenance project. Final specifications subject to CGH confirmation.
                  </p>
                  <div className="space-y-8">
                    {specGroups.map((group) => {
                      const Icon = group.icon;
                      return (
                        <div key={group.title} className="bg-cgh-light rounded-xl p-6 border border-gray-100">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-lg bg-cgh-red/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-cgh-red" />
                            </div>
                            <h4 className="font-display font-bold text-cgh-charcoal text-lg">{group.title}</h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {group.items.map((item) => (
                              <div key={item.label} className="bg-white rounded-lg p-4 border border-gray-100">
                                <div className="text-xs font-semibold text-cgh-muted uppercase tracking-wider mb-1">{item.label}</div>
                                <div className="text-sm font-medium text-cgh-charcoal leading-relaxed">{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <ScrollReveal>
                <div className="bg-cgh-light rounded-xl p-8 border border-gray-100">
                  <h3 className="text-xl font-display font-bold text-cgh-charcoal mb-6 border-b border-gray-200 pb-4">Project Details</h3>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <HardHat className="w-5 h-5 text-cgh-red mr-3 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-cgh-muted font-semibold uppercase tracking-wider">Project Type</div>
                        <div className="font-medium text-cgh-charcoal text-sm">{project.projectType}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-cgh-red mr-3 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-cgh-muted font-semibold uppercase tracking-wider">Contract Value</div>
                        <div className="font-medium text-cgh-charcoal text-sm">{project.contractValue}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-cgh-red mr-3 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-cgh-muted font-semibold uppercase tracking-wider">Commencement</div>
                        <div className="font-medium text-cgh-charcoal text-sm">{project.commencement}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-cgh-red mr-3 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-cgh-muted font-semibold uppercase tracking-wider">Completion</div>
                        <div className="font-medium text-cgh-charcoal text-sm">{project.completion}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {project.monitoringNote && (
                <ScrollReveal delay={0.1}>
                  <div className="bg-cgh-yellow/10 rounded-xl p-6 border border-cgh-yellow/30">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-yellow-700 mr-3 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-yellow-800 uppercase tracking-wider mb-2">Monitoring Note</h4>
                        <p className="text-sm text-yellow-900 leading-relaxed">{project.monitoringNote}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-cgh-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-cgh-charcoal mb-10 text-center">Project Imagery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-sm group">
                <Image src={project.heroImage} alt={`${project.title} - site view`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              {[2, 3].map((item) => (
                <div key={item} className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex flex-col items-center justify-center border border-gray-300 shadow-sm relative overflow-hidden group">
                  <HardHat className="w-10 h-10 text-gray-400 mb-3 group-hover:text-cgh-red transition-colors" />
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Image Pending</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group flex items-center text-left w-full md:w-auto">
                <div className="w-12 h-12 rounded-full bg-cgh-light border border-gray-200 flex items-center justify-center mr-4 group-hover:border-cgh-red group-hover:text-cgh-red transition-colors shrink-0">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-cgh-muted uppercase tracking-wider mb-1">Previous Project</div>
                  <div className="font-display font-bold text-cgh-charcoal group-hover:text-cgh-red transition-colors line-clamp-1">{prev.title}</div>
                </div>
              </Link>
            ) : <div className="hidden md:block" />}

            {next ? (
              <Link href={`/projects/${next.slug}`} className="group flex items-center text-right w-full md:w-auto justify-end md:justify-start">
                <div className="order-2 md:order-1 text-right ml-4 md:mr-4 md:ml-0">
                  <div className="text-sm font-semibold text-cgh-muted uppercase tracking-wider mb-1">Next Project</div>
                  <div className="font-display font-bold text-cgh-charcoal group-hover:text-cgh-red transition-colors line-clamp-1">{next.title}</div>
                </div>
                <div className="order-1 md:order-2 w-12 h-12 rounded-full bg-cgh-light border border-gray-200 flex items-center justify-center group-hover:border-cgh-red group-hover:text-cgh-red transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ) : <div className="hidden md:block" />}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
