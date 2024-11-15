import { motion, useTransform, useSpring, MotionValue } from 'framer-motion';
import React from 'react';
import { DEBRIS_OBJECTS } from './SpaceDebrisField';

interface DebrisObject {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  type: 'satellite' | 'asteroid' | 'computer' | 'alien';
}

interface DebrisProps {
  item: DebrisObject;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

export default function Debris({ item, mouseX, mouseY, scrollYProgress }: DebrisProps) {
  // Initialize motion values using hooks
  const xMotion = useTransform(mouseX, [0, 1], [item.x - 10, item.x + 10]);
  const yMotion = useTransform(mouseY, [0, 1], [item.y - 10, item.y + 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        x: useSpring(xMotion, { stiffness: 100, damping: 30 }),
        y: useSpring(yMotion, { stiffness: 100, damping: 30 }),
        rotate: item.rotation,
        scale: item.scale,
        opacity,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: item.id * 0.1 }}
    >
      <svg
        className={`w-8 h-8 ${getDebrisColor(item.type)}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={DEBRIS_OBJECTS.find(obj => obj.type === item.type)?.path} />
      </svg>
    </motion.div>
  );
}

// Reuse the getDebrisColor function
function getDebrisColor(type: string): string {
  switch (type) {
    case 'satellite':
      return 'text-cyan-500/30';
    case 'asteroid':
      return 'text-amber-500/30';
    case 'computer':
      return 'text-purple-500/30';
    case 'alien':
      return 'text-green-500/30';
    default:
      return 'text-white/30';
  }
} 