"use client";

import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#1A0321] z-50 flex items-center justify-center">
      {/* Black hole effect */}
      <div className="relative">
        <motion.div
          className="w-32 h-32 rounded-full bg-black"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 100px 20px rgba(0,0,0,0.8), 0 0 200px 40px rgba(147,51,234,0.3)'
          }}
        />

        {/* Loading text */}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-purple-300 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Transferring Systems...
        </motion.div>
      </div>
    </div>
  );
} 