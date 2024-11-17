// "use client";

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#1A0321] z-50 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Outer wormhole rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-purple-500/30"
            initial={{
              width: '20rem',
              height: '20rem',
              opacity: 0,
              x: '-50%',
              y: '-50%'
            }}
            animate={{
              width: ['20rem', '40rem'],
              height: ['20rem', '40rem'],
              opacity: [0.8, 0],
              scale: [1, 2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 20px rgba(147,51,234,0.3)'
            }}
          />
        ))}

        {/* Central wormhole */}
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-900 to-black"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 360]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 60px 20px rgba(147,51,234,0.4), inset 0 0 40px rgba(0,0,0,0.8)'
          }}
        />

        {/* Stars effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * 800 - 400,
              y: Math.random() * 800 - 400,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Loading text */}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-purple-300 font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Entering Wormhole...
        </motion.div>
      </div>
    </div>
  );
}
