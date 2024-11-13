"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, ChevronDown, Rocket, Code, User } from 'lucide-react';
import { projects, starPositions } from './utils/constants';

const AnimatedStars = () => (
  <div className="fixed inset-0 z-0">
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
  </div>
);

const PlanetIllustration = ({ planetScale, planetY, planetOpacity, planetTextOpacity }) => (
  <motion.div 
    className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#1a4487] to-[#051c2c] z-10 flex items-center justify-center"
    style={{
      scale: planetScale,
      y: planetY,
      opacity: planetOpacity,
      boxShadow: '0 -10px 50px rgba(41, 98, 255, 0.3)',
    }}
  >
    <motion.div
      style={{ opacity: planetTextOpacity }}
      className="text-center translate-y-[-50%]"
    >
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Explore My Universe
      </h2>
      <div className="flex flex-col items-center justify-center">
        <span className="text-white text-lg mb-2"></span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-1"
        >
          <ChevronDown className="text-gray-400 w-4 h-4" />
          <ChevronDown className="text-gray-400 w-4 h-4" />
          <ChevronDown className="text-gray-400 w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

const RocketShip = ({ style, animate = true }) => (
  <motion.div
    className="relative w-full h-full"
    animate={animate ? {
      y: [0, -20, 0],
      x: animate ? [0, 20, 0] : undefined,
    } : undefined}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={style}
  >
    <div className="absolute w-full h-3/4 bg-gradient-to-b from-purple-500 to-blue-600 rounded-t-full"
         style={{ boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }} />
    <div className="absolute w-1/2 h-1/6 bg-cyan-300 rounded-full left-1/4 top-1/4"
         style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)' }} />
    <div className="absolute bottom-1/4 left-0 w-1/3 h-1/4 bg-blue-700 skew-x-[45deg]" />
    <div className="absolute bottom-1/4 right-0 w-1/3 h-1/4 bg-blue-700 skew-x-[-45deg]" />
    <motion.div
      className="absolute -bottom-16 left-1/3 w-16 h-32"
      animate={{
        scaleY: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 0.85,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full opacity-75" />
    </motion.div>
  </motion.div>
);

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.5 }}
    className="flex justify-center gap-6 mt-8"
  >
    {[
      { icon: Github, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Mail, href: "#" }
    ].map((item, index) => (
      <motion.a
        key={index}
        href={item.href}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <item.icon size={24} />
      </motion.a>
    ))}
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    key={project.title}
    className="relative"
    initial={{ opacity: 0, y: 100, scale: 0.8 }}
    whileInView={{ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
      <div className="w-[400px] h-[400px] relative">
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-600 to-blue-800"
          animate={{
            rotate: 360,
            scale: [1, 1.01, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            boxShadow: '0 0 50px rgba(124, 58, 237, 0.3)',
          }}
        />

        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-3/4 h-3/4 rounded-full overflow-hidden relative">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className={`absolute ${index % 2 === 0 ? 'right-[-950px]' : 'left-[-950px]'} top-1/6 -translate-y-1/2 w-[200px] h-[400px]`}
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { duration: 0.5 }
          }}
          viewport={{ once: false, margin: "-100px" }}
          style={{ scale: 0.9 }}
        >
          <RocketShip style={{ rotate: 0 }} animate={false} />
        </motion.div>
      </div>

      <div className="flex-1">
        <motion.h3 
          className="text-3xl font-bold text-white mb-4"
          initial={{ x: index % 2 === 0 ? 50 : 190, opacity: 0 }}
          whileInView={{ x: index % 2 === 0 ? 0 : 140, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-purple-300 mb-6 max-w-xl"
          initial={{ x: index % 2 === 0 ? 50 : 190, opacity: 0 }}
          whileInView={{ x: index % 2 === 0 ? 0 : 140, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        <motion.a
          href={project.link}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
          whileInView={{ x: index % 2 === 0 ? 0 : 140, opacity: 1 }}
          transition={{ duration: 0, delay: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Project <ExternalLink size={18} />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [text, setText] = useState('');
  const fullText = "HELLO, I'M KEVIN";
  const fullSubText = "A Software Engineer charting the edge of what's possible, with code as my compass and curiosity as my guide.";
  
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const { scrollY } = useScroll();

  const planetScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const planetY = useTransform(scrollYProgress, [0, 0.2], ['40%', '0%']);
  const planetOpacity = useTransform(scrollYProgress, [0.15, 0.2], [1, 0]);
  const planetTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const projectsTitleOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  const initialRocketX = useTransform(scrollY, [0, 500], ['15%', '15%']);
  const initialRocketOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const initialRocketRotate = useTransform(scrollY, [0, 500], [155, 155]);

  useEffect(() => {
    setIsMounted(true);
    let index = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        
        if (index > fullText.length) {
          clearInterval(interval);
        }
      }, 80);

      return () => clearInterval(interval);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#1A0321] overflow-hidden relative" ref={scrollRef}>
      <AnimatedStars />
      <PlanetIllustration 
        planetScale={planetScale}
        planetY={planetY}
        planetOpacity={planetOpacity}
        planetTextOpacity={planetTextOpacity}
      />

      <section className="relative min-h-screen flex items-start justify-center px-6 pt-32">
        <motion.div
          className="fixed left-[15%] top-1/2 -translate-y-1/2 z-20 w-[200px] h-[400px]"
          style={{ 
            x: initialRocketX,
            rotate: initialRocketRotate,
            opacity: initialRocketOpacity,
            scale: 0.9
          }}
        >
          <RocketShip style={undefined} />
        </motion.div>

        <div className="text-center z-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <motion.div 
              className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Transmission Incoming...
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold text-white relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {text}
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto relative font-mono text-purple-400"
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

        <motion.div
          className="absolute right-[15%] top-[30%] z-20"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      <section className="relative min-h-screen py-32" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-16"
            style={{ opacity: projectsTitleOpacity }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              System 1: Projects
            </span>
          </motion.h2>

          <div className="space-y-64">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
