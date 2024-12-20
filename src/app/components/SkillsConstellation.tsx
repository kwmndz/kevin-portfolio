"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../utils/constants';

export default function SkillsConstellation() {
  return (
    <section className="relative min-h-screen py-32 z-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Skill Constellations
          </span>
        </motion.h2>

        <div className="relative w-full h-[800px]">
          {/* Section Headers */}
          <motion.div 
            className="absolute left-[10%] top-[10%] -translate-x-1/2 text-2xl font-bold hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Technical Constellation
            </span>
          </motion.div>

          <motion.div 
            className="absolute left-[60%] top-[10%] -translate-x-1/2 text-2xl font-bold whitespace-nowrap hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Interpersonal Constellation
            </span>
          </motion.div>

          {/* Constellation Lines */}
          <svg className="absolute inset-0 w-full h-full translate-x-4 translate-y-4 pointer-events-none">
            <defs>
              <linearGradient id="technicalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="interpersonalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F472B6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {skills.map((skill, index) => (
              skills.slice(index + 1).map((nextSkill, nextIndex) => {
                if (skill.category === nextSkill.category) {
                  return (
                    <motion.line
                      key={`${index}-${nextIndex}`}
                      x1={`${skill.position.x}%`}
                      y1={`${skill.position.y}%`}
                      x2={`${nextSkill.position.x}%`}
                      y2={`${nextSkill.position.y}%`}
                      stroke={`url(#${skill.category}Gradient)`}
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  );
                }
                return null;
              })
            ))}
          </svg>

          {/* Skill Nodes */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${skill.position.x}%`,
                top: `${skill.position.y}%`,
                zIndex: 10
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.10 }} // Index mod is hard coded in just change to amount of skills
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.2 }}
              >
                <div 
                  className={`absolute inset-0 rounded-full blur-md bg-gradient-to-r ${
                    skill.category === 'technical' ? 'from-purple-500 to-blue-500' : 'from-pink-500 to-blue-500'
                  }`}
                  style={{ 
                    transform: `scale(${1 + skill.proficiency * 0.1})`,
                    opacity: 0.2 * skill.proficiency
                  }}
                />
                <div className={`
                  relative z-10 p-3 rounded-full 
                  bg-gradient-to-r ${skill.category === 'technical' ? 'from-purple-500 to-blue-500' : 'from-pink-500 to-blue-500'}
                  flex items-center justify-center
                  text-white
                  transition-all duration-300
                  shadow-lg shadow-purple-500/20
                  min-w-[48px] min-h-[48px]
                `}>
                  <skill.icon size={24} />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-gray-900/90 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {skill.name}
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`h-1 w-1 rounded-full mx-0.5 ${i < skill.proficiency ? 'bg-purple-400' : 'bg-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-[-60px] flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            <span className="text-gray-400 text-sm">Technical Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" />
            <span className="text-gray-400 text-sm">Interpersonal Skills</span>
          </div>
        </div>
      </div>
    </section>
  );
} 
