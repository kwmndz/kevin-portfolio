"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { PlanetIllustration } from './components/PlanetIllustration';
import { RocketShip } from './components/RocketShip';

// Dynamically import heavy components with proper default exports
const AnimatedStars = dynamic(() =>
  import('./components/AnimatedStars').then(mod => mod.AnimatedStars), {
    loading: () => (
      <div className="fixed inset-0 z-0 bg-[#1A0321]" />
    ),
    ssr: false
});

const ProjectsSection = dynamic(() => 
  import('./components/ProjectsSection').then(mod => mod.default), {
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="text-purple-400 font-mono animate-pulse">
          Initializing projects module...
        </div>
      </div>
    ),
    ssr: false
});

const SkillsConstellation = dynamic(() => 
  import('./components/SkillsConstellation').then(mod => mod.default), {
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="text-purple-400 font-mono animate-pulse">
          Mapping skill constellations...
        </div>
      </div>
    ),
    ssr: false
});

const ExperienceSection = dynamic(() => 
  import('./components/ExperienceSection').then(mod => mod.default), {
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="text-purple-400 font-mono animate-pulse">
          Loading experience data...
        </div>
      </div>
    ),
    ssr: false
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const { scrollY } = useScroll();

  const planetScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const planetY = useTransform(scrollYProgress, [0, 0.2], ['40%', '0%']);
  const planetOpacity = useTransform(scrollYProgress, [0.05, 0.1], [1, 0]);
  const planetTextOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const initialRocketX = useTransform(scrollY, [0, 500], ['15%', '15%']);
  const initialRocketOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const initialRocketRotate = useTransform(scrollY, [0, 500], [155, 155]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#1A0321] overflow-hidden relative" ref={scrollRef}>
      <AnimatedStars />      

      <div className="relative z-10">
        <section className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 pt-20 sm:pt-32">
          <motion.div
            className="hidden lg:block absolute left-[15%] top-1/2 -translate-y-1/2 z-20 w-[200px] h-[400px]"
            style={{ 
              x: initialRocketX,
              rotate: initialRocketRotate,
              opacity: initialRocketOpacity,
              scale: 0.9
            }}
          >
            <RocketShip style={{}} animate={true} />
          </motion.div>

          <HeroSection />

          <PlanetIllustration 
            planetScale={planetScale}
            planetY={planetY}
            planetOpacity={planetOpacity}
            planetTextOpacity={planetTextOpacity}
          />
        </section>

        {/* Lazy load the rest of the sections */}
        <ProjectsSection />
        <SkillsConstellation />
        <ExperienceSection />
      </div>
    </div>
  );
}
