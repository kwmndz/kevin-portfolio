"use client";

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValue} from 'framer-motion';
import Debris from './Debris';

interface DebrisObject {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'satellite' | 'asteroid' | 'computer' | 'alien';
}

export const DEBRIS_OBJECTS = [
  {
    type: 'satellite',
    path: 'M12 1.5c.39 0 .74.24.89.6l2.7 6.6 6.6 2.7c.36.15.6.5.6.89s-.24.74-.6.89l-6.6 2.7-2.7 6.6c-.15.36-.5.6-.89.6s-.74-.24-.89-.6l-2.7-6.6-6.6-2.7c-.36-.15-.6-.5-.6-.89s.24-.74.6-.89l6.6-2.7 2.7-6.6c.15-.36.5-.6.89-.6z'
  },
  {
    type: 'asteroid',
    path: 'M15.86 4.39c2.35 2.35 2.35 6.17 0 8.52-2.35 2.35-6.17 2.35-8.52 0-2.35-2.35-2.35-6.17 0-8.52 2.35-2.35 6.17-2.35 8.52 0z'
  },
  {
    type: 'computer',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z'
  },
  {
    type: 'alien',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm4 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z'
  }
] as const;

export default function SpaceDebrisField() {
  const [debris, setDebris] = useState<DebrisObject[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  // Generate initial debris
  useEffect(() => {
    const newDebris: DebrisObject[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1.5,
      type: DEBRIS_OBJECTS[Math.floor(Math.random() * DEBRIS_OBJECTS.length)].type,
    }));
    setDebris(newDebris);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
    >
      {debris.map((item) => (
        <Debris
          key={item.id}
          item={item}
          mouseX={mouseX}
          mouseY={mouseY}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
} 
