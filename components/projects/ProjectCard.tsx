"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ArrowRight, MapPin, Calendar, CheckSquare } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const numberStr = (index + 1).toString().padStart(2, '0');

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="relative rounded-2xl overflow-hidden bg-cgh-charcoal text-white shadow-xl isolate min-h-[400px] md:min-h-[450px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
          {/* Red hover overlay */}
          <div className="absolute inset-0 bg-cgh-red/0 group-hover:bg-cgh-red/10 transition-colors duration-500 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-30 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="hidden md:block w-32 shrink-0">
            <span className="text-7xl font-display font-bold text-white/15 group-hover:text-cgh-red/30 transition-colors duration-500">
              {numberStr}
            </span>
          </div>
          
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white group-hover:text-cgh-yellow transition-colors duration-300">
                {project.title}
              </h3>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-cgh-red group-hover:border-cgh-red transition-all duration-300 shrink-0">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl line-clamp-2 md:line-clamp-none">
              {project.scope}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-cgh-red" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-cgh-red" />
                {project.commencement} — {project.completion}
              </div>
              <div className="flex items-center">
                <CheckSquare className="w-4 h-4 mr-2 text-cgh-red" />
                {project.contractValue}
              </div>
              {project.roadLength && (
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-cgh-red font-bold flex items-center justify-center">L</span>
                  {project.roadLength}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Red accent line on hover */}
        <div className="absolute bottom-0 left-0 h-1 bg-cgh-red w-0 group-hover:w-full transition-all duration-700 ease-out z-30"></div>
      </div>
    </Link>
  );
}
