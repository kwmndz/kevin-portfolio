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
      {/* Main rocket body */}
      <div 
        className="absolute w-full h-3/4 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-t-full"
        style={{ 
          boxShadow: '0 0 30px rgba(124, 58, 237, 0.0), inset -10px 0 20px rgba(0,0,0,0.4)',
          clipPath: 'polygon(20% 100%, 80% 100%, 100% 30%, 100% 0%, 0% 0%, 0% 30%)'
        }} 
      />
      
      {/* Cockpit window with metallic rim */}
      <div className="absolute w-1/2 h-1/6 left-1/4 top-1/4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" 
             style={{ transform: 'scale(1.1)', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400"
             style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3), 0 0 15px rgba(34,211,238,0.4)' }} />
      </div>

      {/* Wing fins with metallic accents */}
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/4 bg-gradient-to-br from-blue-700 to-purple-700 skew-x-[45deg]"
           style={{ boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.4)' }}>
        <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-b from-gray-300 to-gray-500" />
      </div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/4 bg-gradient-to-bl from-blue-700 to-purple-700 skew-x-[-45deg]"
           style={{ boxShadow: 'inset 5px -5px 15px rgba(0,0,0,0.4)' }}>
        <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-b from-gray-300 to-gray-500" />
      </div>

      {/* Enhanced rocket exhaust */}
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
        <div className="w-full h-full bg-gradient-to-t from-orange-600 via-yellow-400 to-transparent rounded-b-full opacity-90"
             style={{ boxShadow: '0 0 40px rgba(255,165,0,0.6)' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-orange-400 to-transparent rounded-b-full opacity-70" />
        </div>
      </motion.div>
    </motion.div>
  );
} 