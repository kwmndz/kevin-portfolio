"use client";

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  type: 'flame' | 'smoke' | 'spark';
  color: string;
}

export default function RocketTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const prevPosition = useRef({ x: 0, y: 0 });

  // Smooth spring physics for rocket movement
  const smoothX = useSpring(cursorX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  });
  const smoothY = useSpring(cursorY, {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  });

  const createParticle = (x: number, y: number, angle: number, type: 'flame' | 'smoke' | 'spark'): Particle => {
    const speed = type === 'spark' ? 5 : 2;
    
    const getRandomColor = () => {
      switch(type) {
        case 'flame':
          return `rgba(${255}, ${Math.random() * 77 + 77}, 0, 0.8)`;
        case 'smoke':
          return `rgba(169, 169, 169, ${Math.random() * 0.5 + 0.2})`;
        case 'spark':
          return `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.5})`;
      }
    };

    return {
      x,
      y,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
      vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 2,
      life: 1,
      maxLife: type === 'spark' ? 0.4 : 0.8,
      type,
      color: getRandomColor()
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create rocket cursor image
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;
    
    tempCanvas.width = 32;
    tempCanvas.height = 32;

    // Draw custom rocket
    const drawRocket = (ctx: CanvasRenderingContext2D) => {
      // Rocket body
      ctx.fillStyle = '#9333EA'; // Purple body
      ctx.beginPath();
      ctx.moveTo(16, 4);
      ctx.lineTo(24, 20);
      ctx.lineTo(20, 24);
      ctx.lineTo(12, 24);
      ctx.lineTo(8, 20);
      ctx.closePath();
      ctx.fill();

      // Nose cone
      ctx.fillStyle = '#A855F7'; // Lighter purple nose
      ctx.beginPath();
      ctx.moveTo(16, 4);
      ctx.lineTo(20, 12);
      ctx.lineTo(12, 12);
      ctx.closePath();
      ctx.fill();

      // Window
      ctx.fillStyle = '#38BDF8'; // Light blue window
      ctx.beginPath();
      ctx.arc(16, 14, 3, 0, Math.PI * 2);
      ctx.fill();

      // Fins
      ctx.fillStyle = '#7C3AED'; // Dark purple fins
      ctx.beginPath();
      ctx.moveTo(8, 20);
      ctx.lineTo(4, 28);
      ctx.lineTo(12, 24);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(24, 20);
      ctx.lineTo(28, 28);
      ctx.lineTo(20, 24);
      ctx.closePath();
      ctx.fill();
    };

    drawRocket(tempCtx);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= particle.maxLife / 60;

        if (particle.life <= 0) {
          particles.current.splice(index, 1);
          return;
        }

        const size = particle.type === 'spark' ? 2 : 6;
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, size * particle.life, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw rocket cursor
      const x = smoothX.get();
      const y = smoothY.get();
      
      // Calculate angle based on movement direction
      const dx = x - prevPosition.current.x;
      const dy = y - prevPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only rotate if moving significantly, with base angle tilted up 
      let angle = -Math.PI / 2; // Default to pointing up
      if (distance > 0.1) {
        angle = Math.atan2(dy, dx) + Math.PI;
      }

      // Calculate trail position (24 pixels behind the rocket, accounting for tilt)
      const trailOffsetX = -Math.cos(angle + Math.PI) * 24;
      const trailOffsetY = -Math.sin(angle + Math.PI) * 24;
      const trailX = x - trailOffsetX;
      const trailY = y - trailOffsetY;

      // Draw rocket with base tilt
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle + Math.PI / 2);
      ctx.drawImage(tempCanvas, -16, -16, 32, 32);
      ctx.restore();

      // Create particles at trail position with adjusted angle
      if (Math.random() > 0.5) {
        particles.current.push(
          createParticle(trailX, trailY, angle + Math.PI, 'flame'),
          createParticle(trailX, trailY, angle + Math.PI, 'smoke'),
          ...(Math.random() > 0.7 ? [createParticle(trailX, trailY, angle + Math.PI, 'spark')] : [])
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      prevPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
