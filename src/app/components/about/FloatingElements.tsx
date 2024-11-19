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
  details: string[];
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
      duration: 8,
      details: [
        "Full-stack Development",
        "AI/ML Enthusiast",
        "Open Source Contributor"
      ]
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      label: "Gaming",
      description: "Avid gamer and game dev enthusiast",
      color: "rgb(59, 130, 246)", // Blue
      position: { top: '25%', right: '15%' },
      delay: 0.4,
      duration: 7,
      details: [
        "Game Development",
        "Competitive Gaming",
        "Virtual Reality"
      ]
    },
    {
      icon: <Music className="w-6 h-6" />,
      label: "Music",
      description: "Love creating and listening",
      color: "rgb(236, 72, 153)", // Pink
      position: { bottom: '30%', left: '12%' },
      delay: 0.6,
      duration: 9,
      details: [
        "Music Production",
        "Piano & Guitar",
        "Electronic Music"
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      label: "Photography",
      description: "Capturing moments in pixels",
      color: "rgb(234, 179, 8)", // Yellow
      position: { bottom: '25%', right: '10%' },
      delay: 0.8,
      duration: 8.5,
      details: [
        "Digital Photography",
        "Photo Editing",
        "Astrophotography"
      ]
    },
    {
      icon: <Book className="w-6 h-6" />,
      label: "Learning",
      description: "Always curious, always growing",
      color: "rgb(34, 197, 94)", // Green
      position: { top: '45%', right: '8%' },
      delay: 1,
      duration: 7.5,
      details: [
        "Tech Exploration",
        "Science & Space",
        "Continuous Growth"
      ]
    },
    {
      icon: <Plane className="w-6 h-6" />,
      label: "Travel",
      description: "Exploring new horizons",
      color: "rgb(239, 68, 68)", // Red
      position: { top: '40%', left: '8%' },
      delay: 1.2,
      duration: 8.2,
      details: [
        "World Explorer",
        "Culture Enthusiast",
        "Adventure Seeker"
      ]
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map((element) => (
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
          <motion.div 
            className="relative group pointer-events-auto cursor-pointer"
            style={{ color: element.color }}
            whileHover="hover"
          >
            <motion.div 
              className="absolute -inset-4 rounded-xl bg-purple-900/30 backdrop-blur-md 
                        border border-purple-500/30 opacity-0 group-hover:opacity-100 
                        transition-all duration-500 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              variants={{
                hover: {
                  scale: 1.2,
                  opacity: 1
                }
              }}
            />
            <div className="relative flex flex-col items-center">
              <motion.div 
                className="p-3 rounded-full bg-purple-900/40 backdrop-blur-sm border border-purple-500/30
                          shadow-[0_0_20px_rgba(147,51,234,0.2)]"
                variants={{
                  hover: {
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                {element.icon}
              </motion.div>
              
              <motion.div 
                className="absolute pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          text-center min-w-[200px]"
                variants={{
                  hover: {
                    y: 10,
                    transition: { duration: 0.3 }
                  }
                }}
              >
                <div className="text-sm font-bold mb-2">{element.label}</div>
                <div className="text-xs text-purple-200/90 mb-3">{element.description}</div>
                <div className="space-y-1">
                  {element.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="text-xs bg-purple-900/50 backdrop-blur-sm rounded-full px-3 py-1
                               border border-purple-500/30"
                    >
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
