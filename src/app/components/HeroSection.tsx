"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.2 }}
    className="flex justify-center gap-6 mt-8"
  >
    {[
      { icon: Github, href: "https://github.com/kwmndz" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/kwmndz" },
      { icon: Mail, href: "mailto:kwmndz@umich.edu" }
    ].map((item, index) => (
      <motion.a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <item.icon size={24} />
      </motion.a>
    ))}
  </motion.div>
);

export function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "HELLO, I'M KEVIN";
  const fullSubText = "A student following his interests in computer science and astrophysics to explore and make an impact in a universe with endless questions.";

  useEffect(() => {
    const initialDelay = 800; // Delay in milliseconds
    let index = 0;
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center z-20 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <motion.div 
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-purple-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Transmission Incoming...
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-7xl font-bold text-white relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text inline-block">
            {text}
          </span>
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-mono text-purple-400"
        style={{
          textShadow: '0 0 10px rgba(124, 58, 237, 0.5)',
          letterSpacing: '0.05em',
          border: '2px solid transparent',
          borderImage: 'linear-gradient(45deg, #7c3aed 0%, #3730a3 100%)',
          borderImageSlice: 1,
          padding: '1rem',
          backgroundColor: 'rgba(13, 14, 37, 0.7)',
          backdropFilter: 'blur(2px)',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {fullSubText}
        <span className="inline-block mx-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">🚀</span>
      </motion.p>

    <SocialLinks />

    </div>
  );
} 