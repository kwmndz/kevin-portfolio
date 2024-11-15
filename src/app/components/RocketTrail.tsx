"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  type: 'flame' | 'smoke' | 'spark';
  color: string;
}

export default function RocketTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });

  // Smooth spring physics for rocket movement
  const smoothX = useSpring(cursorX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  });
  const smoothY = useSpring(cursorY, {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  });

  const createParticle = (mouseX: number, mouseY: number, type: 'flame' | 'smoke' | 'spark') => {
    const angle = Math.atan2(mouseY - prevPosition.y, mouseX - prevPosition.x);
    const velocity = Math.hypot(mouseX - prevPosition.x, mouseY - prevPosition.y);
    
    const getRandomColor = () => {
      switch(type) {
        case 'flame':
          return ['#FF4D00', '#FF9900', '#FFD700'][Math.floor(Math.random() * 3)];
        case 'smoke':
          return ['#8B8B8B', '#A9A9A9', '#D3D3D3'][Math.floor(Math.random() * 3)];
        case 'spark':
          return ['#FFD700', '#FFF', '#87CEEB'][Math.floor(Math.random() * 3)];
      }
    };

    return {
      id: Date.now() + Math.random(),
      x: mouseX + (Math.random() - 0.5) * 10,
      y: mouseY + (Math.random() - 0.5) * 10,
      scale: type === 'flame' ? 1.5 + Math.random() : 0.5 + Math.random(),
      rotation: angle * (180 / Math.PI) + Math.random() * 30,
      type,
      color: getRandomColor()
    };
  };

  useEffect(() => {
    let frameId: number;
    let lastTime = 0;
    const particleLimit = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime > 16) { // Limit to ~60fps
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);

        // Create multiple particle types
        const newParticles = [
          createParticle(e.clientX, e.clientY, 'flame'),
          createParticle(e.clientX, e.clientY, 'smoke'),
          ...(Math.random() > 0.7 ? [createParticle(e.clientX, e.clientY, 'spark')] : [])
        ];

        setParticles(prev => [...prev, ...newParticles].slice(-particleLimit));
        setPrevPosition({ x: e.clientX, y: e.clientY });
        lastTime = currentTime;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Cleanup old particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.filter(particle => Date.now() - particle.id < 1000));
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              opacity: particle.type === 'spark' ? 1 : 0.8,
              scale: particle.scale,
              rotate: particle.rotation
            }}
            animate={{
              opacity: 0,
              scale: particle.type === 'smoke' ? particle.scale * 2 : 0,
              y: particle.type === 'spark' ? particle.y - 50 : particle.y + 20,
              x: particle.type === 'spark' 
                ? particle.x + (Math.random() - 0.5) * 50 
                : particle.x + (Math.random() - 0.5) * 20,
              rotate: particle.rotation + (Math.random() - 0.5) * 180
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: particle.type === 'spark' ? 0.4 : 0.8,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              left: particle.x,
              top: particle.y,
              transform: 'translate(-50%, -50%)',
              backgroundColor: particle.color
            }}
            className={`
              rounded-full
              ${particle.type === 'flame' ? 'blur-[1px]' : ''}
              ${particle.type === 'smoke' ? 'blur-[3px]' : ''}
              ${particle.type === 'spark' ? 'w-1 h-1' : 'w-3 h-3'}
            `}
          />
        ))}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            position: 'absolute',
            transform: 'translate(-50%, -50%) rotate(-45deg)'
          }}
          className="w-6 h-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform rotate-45 shadow-lg shadow-purple-500/50" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-md shadow-blue-500/50" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 