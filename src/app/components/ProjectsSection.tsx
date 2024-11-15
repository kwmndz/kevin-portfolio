"use client";

import { motion, useTransform, useScroll } from 'framer-motion';
import { projects } from '../utils/constants';
import { ProjectCard } from './ProjectCard';
import { useRef } from 'react';

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const projectsTitleOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-32" 
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-16"
          style={{ opacity: 1 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Project Belt
          </span>
        </motion.h2>

        <div className="space-y-32 sm:space-y-64">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 