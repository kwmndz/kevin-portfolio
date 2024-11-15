"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { RocketShip } from './RocketShip';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
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
      <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
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
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 225px, 300px"
                quality={75}
              />
            </div>
          </motion.div>

          <motion.div
            className={`hidden lg:block absolute ${index % 2 === 0 ? 'right-[-950px]' : 'left-[-950px]'} top-1/6 -translate-y-1/2 w-[200px] h-[400px]`}
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { duration: 0.5 }
            }}
            viewport={{ once: false, margin: "-100px" }}
            style={{ transform: 'scale(0.9)' }}
          >
            <RocketShip style={{ transform: 'rotate(0deg)' }} animate={true} />
          </motion.div>
        </div>

        <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? 'lg:pl-40' : ''}`}>
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-purple-300 mb-6 max-w-xl mx-auto md:mx-0"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.description}
          </motion.p>
          <motion.a
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Project <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
} 