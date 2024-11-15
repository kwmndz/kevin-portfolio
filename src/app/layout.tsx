"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import './globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 px-6 py-4">
          <div className="max-w-8xl mx-auto flex justify-between items-center md">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>

            {/* Navigation links */}
            <motion.div 
              className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex gap-8 items-center`}
              initial={{ opacity: 0.55, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {['Projects', 'Experience', 'Home', 'About'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Home' ? '/' :
                    item === 'About' ? `/${item.toLowerCase()}` : 
                    `#${item.toLowerCase()}`
                  }
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full" />
                </a>
              ))}
            </motion.div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
} 