"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Send, Mail } from 'lucide-react';
import { useInView } from 'framer-motion';

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(terminalRef, { once: true, margin: "-100px" });
  
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [initializationStep, setInitializationStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  // Initialization sequence
  useEffect(() => {
    if (isInView) {
      const steps = [
        ">> System boot sequence initiated...",
        ">> Establishing secure connection...",
        ">> Loading terminal interface...",
        ">> Connection established.",
        ">> Terminal ready for transmission."
      ];

      const initSequence = async () => {
        for (let i = 0; i <= steps.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 600));
          setInitializationStep(i);
        }
      };

      initSequence();
    }
  }, [isInView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => setIsSending(false), 2000);
  };

  const terminalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const initMessages = [
    ">> System boot sequence initiated...",
    ">> Establishing secure connection...",
    ">> Loading terminal interface...",
    ">> Connection established.",
    ">> Terminal ready for transmission."
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-20"
    >
      {/* Space Station Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#1A0321] to-[#0D0111]"
        style={{ opacity }}
      >
        <motion.div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_100%)]" />
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]"
          />
        </motion.div>
      </motion.div>

      {/* Terminal Interface */}
      <motion.div 
        ref={terminalRef}
        variants={terminalVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-4xl w-full mx-4 bg-black/60 backdrop-blur-md rounded-lg border border-purple-500/30
                   overflow-hidden"
        style={{
          boxShadow: isInView 
            ? "0 0 50px rgba(147,51,234,0.2), inset 0 0 30px rgba(147,51,234,0.1)"
            : "none"
        }}
      >
        {/* Terminal Header with initialization effect */}
        <motion.div 
          className="bg-purple-900/30 px-4 py-2 flex items-center gap-2"
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="w-3 h-3 rounded-full bg-red-500/70"
            animate={isInView ? { scale: [0, 1] } : {}}
            transition={{ delay: 0.8 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-yellow-500/70"
            animate={isInView ? { scale: [0, 1] } : {}}
            transition={{ delay: 1 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-green-500/70"
            animate={isInView ? { scale: [0, 1] } : {}}
            transition={{ delay: 1.2 }}
          />
          <motion.span 
            className="ml-2 text-purple-300 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
          >
            contact_terminal_v1.0
          </motion.span>
        </motion.div>

        {/* Terminal Content */}
        <div className="p-6 font-mono">
          {/* Initialization Messages */}
          <div className="mb-6 text-purple-300 space-y-2">
            {initMessages.slice(0, initializationStep).map((message, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm"
              >
                {message}
              </motion.p>
            ))}
          </div>

          {/* Form and contact info only show after initialization */}
          {initializationStep >= 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-purple-300 text-sm mb-1 block">
                    {">"} Enter identification:
                  </label>
                  <input
                    type="text"
                    value={messageData.name}
                    onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                    className="w-full bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 text-purple-100
                             focus:outline-none focus:border-purple-500/60 placeholder-purple-300/30"
                    placeholder="name.initialize()"
                  />
                </div>

                <div>
                  <label className="text-purple-300 text-sm mb-1 block">
                    {">"} Communication channel:
                  </label>
                  <input
                    type="email"
                    value={messageData.email}
                    onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                    className="w-full bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 text-purple-100
                             focus:outline-none focus:border-purple-500/60 placeholder-purple-300/30"
                    placeholder="email.connect()"
                  />
                </div>

                <div>
                  <label className="text-purple-300 text-sm mb-1 block">
                    {">"} Transmission content:
                  </label>
                  <textarea
                    value={messageData.message}
                    onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 text-purple-100
                             focus:outline-none focus:border-purple-500/60 placeholder-purple-300/30"
                    placeholder="message.transmit()"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30
                           text-purple-300 rounded px-4 py-2 flex items-center justify-center gap-2
                           transition-colors duration-200"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-purple-300/30 border-t-purple-300 rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Initialize Transmission
                    </>
                  )}
                </button>
              </form>

              {/* Contact Information */}
              <motion.div className="mt-8 pt-6 border-t border-purple-500/30">
                <p className="text-purple-300 text-sm mb-4">{'>'} Alternative communication channels:</p>
                <div className="space-y-2">
                  <a href="mailto:kwmndz@umich.edu" 
                     className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">kwmndz@umich.edu</span>
                  </a>
                  <a href="mailto:kevinmendez2706@gmail.com"
                     className="flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">kevinmendez2706@gmail.com</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
} 