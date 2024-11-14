"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { workExperience } from '../utils/constants';
import { Calendar, MapPin, Rocket, Code, Briefcase } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section className="relative min-h-screen py-32 z-20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            System 3: Career Trajectory
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />

          {workExperience.map((experience, index) => (
            <motion.div
              key={experience.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 top-0 md:transform md:-translate-x-1/2 w-4 h-4">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
              </div>

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-[#1A0321]/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  {/* Company and role */}
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {experience.company}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {experience.role}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-purple-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Rocket className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 flex items-center gap-1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Code className="w-3 h-3" />
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 