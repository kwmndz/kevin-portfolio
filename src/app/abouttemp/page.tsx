"use client";

import { AboutMeTemp } from '../components/AboutMeTemp';
import dynamic from 'next/dynamic';

const AnimatedStars = dynamic(() =>
  import('../components/AnimatedStars').then(mod => mod.AnimatedStars), {
    loading: () => <div className="fixed inset-0 z-0 bg-[#1A0321]" />,
    ssr: false
});

const SpaceDebrisField = dynamic(() => 
  import('../components/SpaceDebrisField').then(mod => mod.default), {
    loading: () => (
      <div className="fixed inset-0 z-0 bg-[#1A0321]" />
    ),
    ssr: false
});

export default function AboutTemp() {
  return (
    <div className="min-h-screen bg-[#1A0321] overflow-hidden relative">
      <AnimatedStars />
      <SpaceDebrisField />
      <AboutMeTemp />
    </div>
  );
} 