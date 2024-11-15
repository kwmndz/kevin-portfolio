"use client";

import { motion } from 'framer-motion';
import { Code, Gamepad2, Music, Camera, Book, Plane } from 'lucide-react';

interface FloatingElement {
  icon: JSX.Element;
  label: string;
  description: string;
  color: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  delay: number;
  duration: number;
}

export function FloatingElements() {
  const elements: FloatingElement[] = [
    {
      icon: <Code className="w-6 h-6" />,
      label: "Programming",
      description: "Passionate about creating elegant solutions",
      color: "rgb(168, 85, 247)", // Purple
      position: { top: '15%', left: '10%' },
      delay: 0.2,
      duration: 8
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      label: "Gaming",
      description: "Avid gamer and game dev enthusiast",
      color: "rgb(59, 130, 246)", // Blue
      position: { top: '25%', right: '15%' },
      delay: 0.4,
      duration: 7
    },
    {
      icon: <Music className="w-6 h-6" />,
      label: "Music",
      description: "Love creating and listening",
      color: "rgb(236, 72, 153)", // Pink
      position: { bottom: '30%', left: '12%' },
      delay: 0.6,
      duration: 9
    },
    {
      icon: <Camera className="w-6 h-6" />,
      label: "Photography",
      description: "Capturing moments in pixels",
      color: "rgb(234, 179, 8)", // Yellow
      position: { bottom: '25%', right: '10%' },
      delay: 0.8,
      duration: 8.5
    },
    {
      icon: <Book className="w-6 h-6" />,
      label: "Learning",
      description: "Always curious, always growing",
      color: "rgb(34, 197, 94)", // Green
      position: { top: '45%', right: '8%' },
      delay: 1,
      duration: 7.5
    },
    {
      icon: <Plane className="w-6 h-6" />,
      label: "Travel",
      description: "Exploring new horizons",
      color: "rgb(239, 68, 68)", // Red
      position: { top: '40%', left: '8%' },
      delay: 1.2,
      duration: 8.2
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={element.label}
          className="absolute"
          style={{
            ...element.position,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: ["0px", "30px", "0px"],
          }}
          transition={{
            opacity: { delay: element.delay, duration: 1 },
            scale: { delay: element.delay, duration: 1 },
            y: {
              delay: element.delay,
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div 
            className="relative group"
            style={{ color: element.color }}
          >
            <div className="absolute -inset-2 rounded-lg bg-purple-900/20 backdrop-blur-sm 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-purple-900/30 backdrop-blur-sm border border-purple-500/30
                            shadow-[0_0_20px_rgba(147,51,234,0.2)]">
                {element.icon}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            text-center whitespace-nowrap">
                <div className="text-sm font-semibold">{element.label}</div>
                <div className="text-xs text-purple-200/80">{element.description}</div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 