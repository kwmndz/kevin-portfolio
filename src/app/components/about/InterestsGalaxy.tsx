"use client";

import { motion } from 'framer-motion';

interface Interest {
  name: string;
  description: string;
  icon: string;
}

export function InterestsGalaxy() {
  const interests: Interest[] = [
    {
      name: "Technology",
      description: "Passionate about emerging tech and innovation",
      icon: "💻"
    },
    {
      name: "Gaming",
      description: "Enthusiastic gamer and game development hobbyist",
      icon: "🎮"
    },
    // Add more interests here
  ];

  return (
    <div className="max-w-6xl mx-auto my-24">
      <h2 className="text-3xl font-bold text-purple-300 text-center mb-12">
        Interest Nebula
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-800/30 transition-colors"
          >
            <div className="text-4xl mb-4">{interest.icon}</div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              {interest.name}
            </h3>
            <p className="text-purple-100">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 