"use client";

import { motion } from 'framer-motion';

interface RocketShipProps {
  style: React.CSSProperties;
  animate?: boolean;
}

export function RocketShip({ style, animate = true }: RocketShipProps) {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={animate ? {
        y: [0, -20, 0],
        x: animate ? [0, 20, 0] : undefined,
      } : undefined}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={style}
    >
      <div 
        className="absolute w-full h-3/4 bg-gradient-to-b from-purple-500 to-blue-600 rounded-t-full"
        style={{ boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }} 
      />
      <div 
        className="absolute w-1/2 h-1/6 bg-cyan-300 rounded-full left-1/4 top-1/4"
        style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)' }} 
      />
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/4 bg-blue-700 skew-x-[45deg]" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/4 bg-blue-700 skew-x-[-45deg]" />
      <motion.div
        className="absolute -bottom-16 left-1/3 w-16 h-32"
        animate={{
          scaleY: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 0.85,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full opacity-75" />
      </motion.div>
    </motion.div>
  );
} 