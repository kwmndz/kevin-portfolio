"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface StarParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export default function StarTrail() {
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring physics for trailing effect
  //const smoothX = useSpring(cursorX, {
  //  damping: 25,
  //  stiffness: 200,
  //  mass: 0.1
  //});
  //const smoothY = useSpring(cursorY, {
  //  damping: 25,
  //  stiffness: 200,
  //  mass: 0.1
  //});
  //
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Create new particle
      const newParticle: StarParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      };

      setParticles(prev => [...prev.slice(-15), newParticle]); // Keep last 15 particles
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  // Cleanup old particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.filter(particle => 
        Date.now() - particle.id < 1000
      ));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            transition: { duration: 1, ease: "easeOut" }
          }}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)'
          }}
        className="w-2 h-2 bg-blue-400 rounded-full"
        //   className="w-1 h-1 bg-blue-400 rounded-full"
        />
      ))}
      {/* <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          position: 'absolute',
          transform: 'translate(-50%, -50%)'
        }}
        className="w-2 h-2 bg-purple-400 rounded-full blur-[2px]"
      /> */}
    </div>
  );
} 
