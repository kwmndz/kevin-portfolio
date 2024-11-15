"use client";

import { motion, MotionValue } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  planetTextOpacity: MotionValue<number>;
}

const ScrollIndicator = ({ planetTextOpacity }: ScrollIndicatorProps) => (
  <>
    <motion.div
      style={{ opacity: planetTextOpacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center translate-y-[-50%] hidden md:block"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Explore My Universe
      </h2>
      <div className="flex flex-col items-center justify-center">
        <span className="text-white text-lg mb-2"></span>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.3 },
            y: { duration: 1.5, repeat: Infinity }
          }}
          className="flex items-center gap-1"
        >
          <ChevronDown className="text-gray-400 w-4 h-4" />
          <ChevronDown className="text-gray-400 w-4 h-4" />
          <ChevronDown className="text-gray-400 w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>

    {/* Mobile version in center of viewport */}
    <motion.div
      style={{ opacity: planetTextOpacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-20 text-center"
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Explore My Universe
      </h2>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 1.5, repeat: Infinity }
          }}
          className="flex items-center gap-1"
        >
          <ChevronDown className="text-gray-400 w-4 h-4" />
          <ChevronDown className="text-gray-400 w-4 h-4" />
          <ChevronDown className="text-gray-400 w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  </>
);

interface PlanetIllustrationProps {
  planetScale: MotionValue<number>;
  planetY: MotionValue<string>;
  //planetOpacity: MotionValue<number>;
  planetTextOpacity: MotionValue<number>;
}

export function PlanetIllustration({ 
  planetScale, 
  planetY, 
  //planetOpacity, 
  planetTextOpacity 
}: PlanetIllustrationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: "40%" }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2.2 }}
      className="absolute bottom-0 left-[40%] xs:left-[42%] sm:left-1/2 -translate-x-1/2 w-[90vw] sm:w-[800px] h-[90vw] sm:h-[800px] rounded-full bg-gradient-to-b from-[#1a4487] to-[#051c2c] flex items-center justify-center"
      style={{
        scale: planetScale,
        y: planetY,
        opacity: 1,
        boxShadow: '0 -10px 50px rgba(41, 98, 255, 0.3)',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <ScrollIndicator planetTextOpacity={planetTextOpacity} />
    </motion.div>
  );
}
