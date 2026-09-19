'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Ruler } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { projects } from '@/data/projects';

// Extract all unique project types
const categories = ['All', ...Array.from(new Set(projects.map(p => p.projectType)))];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter projects by category, limit to 4 for the home page
  const filteredProjects = projects
    .filter(p => activeCategory === 'All' || p.projectType === activeCategory)
    .slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-cgh-light/50 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <SectionHeading 
            label="OUR PORTFOLIO"
            title="Featured Projects"
            subtitle="Explore our track record of successful road infrastructure projects delivered across Uganda, specializing in District and Community Access Roads (DUCAR)."
          />
          
          <ScrollReveal delay={200} direction="left">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-cgh-red font-semibold hover:text-cgh-red-dark transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
        
        {/* Category Filter */}
        <ScrollReveal delay={300} direction="up" className="mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 whitespace-nowrap text-sm font-semibold transition-all ${
                  activeCategory === category 
                    ? 'bg-cgh-red text-white' 
                    : 'bg-cgh-light text-cgh-charcoal/70 hover:bg-gray-200 hover:text-cgh-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] overflow-hidden bg-cgh-charcoal flex flex-col justify-end"
              >
                {/* Background Image/Gradient */}
                {project.heroImage ? (
                  <Image 
                    src={project.heroImage} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-cgh-charcoal via-cgh-charcoal to-cgh-red/30 group-hover:scale-105 transition-transform duration-700" />
                )}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Red accent line that appears on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cgh-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                
                {/* Project Number */}
                <div className="absolute top-6 right-6 font-display text-3xl font-bold text-white/10 z-10">
                  {project.number}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 w-full transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cgh-red text-white text-xs font-bold tracking-wider uppercase mb-3">
                      {project.projectType}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-2">
                      <Link href={`/projects/${project.slug}`} className="hover:text-cgh-yellow transition-colors before:absolute before:inset-0">
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-cgh-light/80 text-sm font-medium mt-auto">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-cgh-red" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-1 text-cgh-red" />
                      <span>{project.roadLength}</span>
                    </div>
                  </div>
                  
                  {/* Hover revealing text/arrow */}
                  <div className="mt-6 flex items-center text-cgh-yellow font-medium opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Project Details</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
