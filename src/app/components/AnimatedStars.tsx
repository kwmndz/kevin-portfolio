"use client";

import { motion } from 'framer-motion';
import { starPositions } from '../utils/constants';

export const AnimatedStars = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 z-0"
  >
    {starPositions.map((position, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 bg-white rounded-full"
        style={{
          left: position.left,
          top: position.top,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: position.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </motion.div>
); 