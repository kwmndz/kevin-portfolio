"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Telescope, Atom, Binary, FlaskConical } from 'lucide-react';

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-20"
    >
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1)_0%,transparent_60%)]"
          style={{ opacity }}
        />
        <motion.div
          className="absolute w-1 h-1 bg-purple-300 rounded-full"
          style={{
            top: '20%',
            left: '25%',
            boxShadow: '0 0 20px 2px rgba(147,51,234,0.3)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Add more ambient stars/effects as needed */}
      </div>

      {/* Main Content Container */}
      <motion.div
        style={{ opacity, scale }}
        className="relative max-w-6xl w-full mx-4 space-y-8"
      >
        {/* University Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-purple-300 mb-2">
            University of Michigan
          </h2>
          <p className="text-purple-200 text-lg">
            B.S. in Computer Science and Interdisciplinary Physics
          </p>
          <p className="text-purple-400">
            Expected Graduation: August 2024
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Left Column - Academic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Research Scholars Badge */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Telescope className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-300">
                  Michigan Research and Discovery Scholars
                </h3>
              </div>
              <p className="text-purple-200">
                Selected among top 150 students out of 8,500
              </p>
            </div>

            {/* Notable Classes */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                Notable Coursework
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Binary className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-200">EECS 280: Programming and Data Structures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Binary className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-200">EECS 203: Discrete Mathematics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Atom className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-200">PHYSICS 160 & 161: Physics I & Lab</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - CLAWS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-300">
                  Research & Innovation
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-purple-300 mb-2">
                    Collaborative Lab For Advancing Work in Space (CLAWS)
                  </h4>
                  <p className="text-purple-200">
                    AR Subteam Member
                  </p>
                  <a 
                    href="https://claws.engin.umich.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm mt-2 inline-block"
                  >
                    claws.engin.umich.edu →
                  </a>
                </div>

                {/* Animated Research Visual */}
                <motion.div 
                  className="w-full h-48 rounded-lg bg-purple-800/20 relative overflow-hidden"
                  animate={{
                    background: [
                      'radial-gradient(circle at 30% 30%, rgba(147,51,234,0.2) 0%, rgba(88,28,135,0.1) 50%, transparent 100%)',
                      'radial-gradient(circle at 70% 70%, rgba(147,51,234,0.2) 0%, rgba(88,28,135,0.1) 50%, transparent 100%)',
                      'radial-gradient(circle at 30% 30%, rgba(147,51,234,0.2) 0%, rgba(88,28,135,0.1) 50%, transparent 100%)',
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Add some floating particles or research-related animations */}
                  <motion.div
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    animate={{
                      x: [0, 100, 0],
                      y: [0, 50, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 