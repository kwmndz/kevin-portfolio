"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

interface VoidAnomalyProps {
  onActivate: () => void;
  isActive: boolean;
}

export function VoidAnomaly({ onActivate, isActive }: VoidAnomalyProps) {
  const handleClick = () => {
    onActivate();
  };

  return (
    <div className="absolute right-[10%] top-[120px]">
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 2, duration: 1 }}
        onClick={handleClick}
        className="relative group cursor-pointer"
        // whileHover={{ scale: 1.1 }}
      >
        {/* Main anomaly */}
        <motion.div
          className="w-32 h-32 rounded-full bg-purple-900/40 backdrop-blur-sm relative flex items-center justify-center"
          animate={{
            // opacity: isActive ? 0.9 : 0.3,
            scale: isActive ? [1, 1.1, 1] : [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 40% 40%, 
                rgba(147,51,234,0.4) 0%, 
                rgba(126,34,206,0.2) 30%, 
                rgba(88,28,135,0.1) 60%, 
                transparent 100%)`,
              boxShadow: isActive 
                ? '0 0 40px 10px rgba(147,51,234,0.3)' 
                : '0 0 20px 5px rgba(147,51,234,0.1)'
            }}
          />
          
          {/* Click Me text */}
          <motion.div
            className="text-purple-300/60 text-sm z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Click Me!
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 