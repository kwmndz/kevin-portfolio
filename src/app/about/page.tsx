"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const AnimatedStars = dynamic(() =>
  import('../components/AnimatedStars').then(mod => mod.AnimatedStars), {
    loading: () => <div className="fixed inset-0 z-0 bg-[#1A0321]" />,
    ssr: false
});

const FloatingElements = dynamic(() =>
  import('../components/about/FloatingElements').then(mod => mod.FloatingElements), {
    loading: () => null,
    ssr: false
});

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#1A0321] overflow-hidden relative">
      <AnimatedStars />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        {/* Central Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-4xl w-full"
        >
          <div className="bg-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20
                         shadow-[0_0_50px_rgba(147,51,234,0.15)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30
                          shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              >
                <Image
                  src="/test.png" // Add your image path here
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Bio Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-3xl md:text-4xl font-bold text-purple-300 mb-4"
                >
                  YAP YAP YAP
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-purple-100 text-lg leading-relaxed mb-6"
                >
                 YAP YAP YAP  YAP YAP YAPYAP YAP YAPYAP YAP YAPYAP YAP YAPYAP YAP YAPYAP YAP YAPYAP YAP YAP
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <FloatingElements />
      </div>
    </div>
  );
} 