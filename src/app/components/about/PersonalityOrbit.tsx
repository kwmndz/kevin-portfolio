"use client";

import { motion } from 'framer-motion';

interface TraitProps {
  text: string;
  angle: number;
  delay: number;
  orbitRadius: number;
  rotationDuration: number;
}

const Trait = ({ text, angle, delay, orbitRadius, rotationDuration }: TraitProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        rotate: [angle, angle + 360]
      }}
      transition={{
        rotate: {
          duration: rotationDuration,
          repeat: Infinity,
          ease: "linear"
        },
        opacity: {
          duration: 0.8,
          delay
        }
      }}
      className="absolute left-1/2 top-1/2"
      style={{
        transformOrigin: `0 0`,
        width: orbitRadius,
        height: 0
      }}
    >
      <div 
        className="absolute -translate-y-1/2 right-0
          bg-purple-600/30 backdrop-blur-sm px-4 py-2 rounded-full 
          border border-purple-500/30 shadow-lg
          hover:bg-purple-600/40 transition-colors"
        style={{
          transform: `rotate(-${angle}deg)`
        }}
      >
        <span className="text-purple-200 whitespace-nowrap font-medium">{text}</span>
      </div>
    </motion.div>
  );
};

export function PersonalityOrbit() {
  const traits = [
    { text: "Creative", angle: 0 },
    { text: "Analytical", angle: 60 },
    { text: "Team Player", angle: 120 },
    { text: "Problem Solver", angle: 180 },
    { text: "Innovative", angle: 240 },
    { text: "Detail-Oriented", angle: 300 },
  ];

  const orbitRadius = 180;
  const rotationDuration = 30;

  return (
    <div className="relative my-32">
      <div className="relative max-w-4xl mx-auto h-[500px]">
        {/* Outer orbit ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: rotationDuration, 
              repeat: Infinity, 
              ease: "linear"
            }}
            className="w-[400px] h-[400px] rounded-full border border-purple-500/20"
            style={{
              boxShadow: '0 0 40px rgba(147, 51, 234, 0.1)'
            }}
          />
        </div>

        {/* Center personality circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-32 h-32 rounded-full bg-purple-600/30 backdrop-blur-sm 
            flex items-center justify-center border border-purple-500/30
            shadow-[0_0_30px_rgba(147,51,234,0.3)]"
        >
          <span className="text-purple-200 font-bold text-lg">Personality</span>
        </motion.div>

        {/* Traits */}
        {traits.map((trait, index) => (
          <Trait
            key={trait.text}
            text={trait.text}
            angle={trait.angle}
            delay={0.2 * index}
            orbitRadius={orbitRadius}
            rotationDuration={rotationDuration}
          />
        ))}
      </div>
    </div>
  );
}