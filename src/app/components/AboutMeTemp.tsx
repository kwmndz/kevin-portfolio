"use client";

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function AboutMeTemp() {
  const billboardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pre-calculate particle positions to ensure consistency
  const particles = Array.from({ length: 8 }, (_, i) => ({
    top: `${20 + Math.round(Math.sin(i) * 80)}%`,
    left: `${20 + Math.round(Math.cos(i) * 80)}%`
  }));

  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Floating effect elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_60%)]"
      />

      {/* Main Billboard */}
      <motion.div
        ref={billboardRef}
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: [0, -20, 0],
          opacity: 1,
          rotateX: [-1, 1, -1],
          rotateY: [1, -1, 1]
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotateX: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotateY: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 1
          }
        }}
        className="relative bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-xl p-16 
                   rounded-2xl border border-purple-500/20 shadow-[0_0_100px_rgba(147,51,234,0.15)]
                   max-w-3xl w-full mx-4 overflow-hidden transform-gpu"
      >
        {/* Glass reflections */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/10 via-transparent to-transparent rotate-12" />

        {/* Content */}
        <div className="text-center relative z-10">
          <motion.h2
            animate={{
              opacity: [0.7, 1, 0.7],
              textShadow: [
                "0 0 20px rgba(147,51,234,0.5)",
                "0 0 30px rgba(147,51,234,0.7)",
                "0 0 20px rgba(147,51,234,0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-5xl font-bold bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent mb-6"
          >
            Coming Soon
          </motion.h2>
          <p className="text-purple-200 text-xl font-light">
            Preparing for launch...
          </p>
        </div>

        {/* Enhanced floating particles */}
        {particles.map((position, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 rounded-full bg-purple-400 blur-[1px]"
            style={{
              top: position.top,
              left: position.left
            }}
          />
        ))}

        {/* Floating effect shadow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-purple-500/20 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
} 