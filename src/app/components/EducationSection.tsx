"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Radio, Atom, Binary, Telescope } from 'lucide-react';

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-20"
    >
      {/* Section Header with Space Theme */}
      <motion.div 
        style={{ opacity, y }}
        className="text-center mb-16 relative"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-purple-500" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Rocket className="w-12 h-12 text-purple-400 mx-auto" />
        </motion.div>
        <h2 className="text-4xl font-bold text-purple-300 mb-4">
          Mission Control Center
        </h2>
        <p className="text-purple-400 text-lg">
          Educational Trajectory and Research Operations
        </p>
      </motion.div>

      {/* Main Mission Control Display */}
      <motion.div
        style={{ opacity }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {/* Mission Status Display */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-75" />
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse delay-150" />
            </div>
            <div className="text-purple-300 font-mono text-sm">
              MISSION STATUS: ACTIVE
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-purple-400 font-mono text-sm mb-1">INSTITUTION:</div>
              <div className="text-2xl font-bold text-purple-300">University of Michigan</div>
            </div>
            <div>
              <div className="text-purple-400 font-mono text-sm mb-1">MISSION DURATION:</div>
              <div className="text-2xl font-bold text-purple-300">2024 - Present</div>
            </div>
          </div>
        </div>

        {/* Mission Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Terminal */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Primary Mission */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">PRIMARY MISSION</h3>
              </div>
              <div className="space-y-3 font-mono">
                <div className="text-purple-200">
                  {'>'}{'>'} B.S. Computer Science and Interdisciplinary Physics
                </div>
                <div className="text-purple-200">
                  {'>'}{'>'} Location: Ann Arbor, MI
                </div>
                <div className="text-purple-200">
                  {'>'}{'>'} Status: In Progress
                </div>
              </div>
            </div>

            {/* Current Operations */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Binary className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">CURRENT OPERATIONS</h3>
              </div>
              <div className="space-y-3 font-mono">
                <div className="text-purple-200">
                  {'>'}{'>'} EECS 280: Programming and Data Structures
                </div>
                <div className="text-purple-200">
                  {'>'}{'>'} EECS 203: Discrete Mathematics
                </div>
                <div className="text-purple-200">
                  {'>'}{'>'} PHYSICS 160 & 161: Physics I & Lab
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Terminal */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Research Division */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Telescope className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">RESEARCH DIVISION</h3>
              </div>
              <div className="space-y-3">
                <div className="text-purple-200 font-mono">
                  {'>'}{'>'} Michigan Research and Discovery Scholars
                </div>
                <div className="text-purple-400 text-sm">
                  Elite Research Program (Top 150 of 8500 Students)
                </div>
              </div>
            </div>

            {/* Special Operations */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Atom className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">SPECIAL OPERATIONS</h3>
              </div>
              <div className="space-y-3">
                <div className="text-purple-200 font-mono">
                  {'>'}{'>'} CLAWS Research Initiative
                </div>
                <div className="text-purple-400 text-sm mb-2">
                  Collaborative Lab For Advancing Work in Space
                </div>
                <div className="text-purple-200 font-mono">
                  {'>'}{'>'} Role: AR Development Division
                </div>
                <a 
                  href="https://claws.engin.umich.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors inline-block mt-2 font-mono text-sm"
                >
                  {'>'}{'>'} Access Research Portal
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Control Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center font-mono text-sm text-purple-400"
        >
          -- END OF MISSION CONTROL DISPLAY --
        </motion.div>
      </motion.div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" 
             style={{ boxShadow: '0 0 20px 10px rgba(147,51,234,0.2)' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" 
             style={{ boxShadow: '0 0 20px 10px rgba(59,130,246,0.2)' }} />
      </div>
    </section>
  );
} 