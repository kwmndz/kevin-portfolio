import { SiPython, SiCplusplus, SiUnity, SiCsharp, SiUnrealengine, SiLinux, SiC, SiDatabricks } from 'react-icons/si';
import { Github, Database, Users, MessageSquare, Lightbulb, Brain } from 'lucide-react';

// =============================================
//              Project Data
// =============================================

export const projects = [
  {
    title: "Book Data Pipeline & Cataloger",
    description: "An iOS app to scan book barcodes or enter ISBNs, with a python backed to pull data like author info and pricing through web scraping. Outputs in a csv format, with optional combining and sorting of the files.",
    image: "/bkDataPipeline.jpeg",
    link: "https://github.com/kwmndz/ISBN-Parser"
  },
  {
    title: "2D Chess Position Detector & Analyzer",
    description: "A Python tool that detects chess piece positions from a board image, converts it to FEN notation, and suggests the next move based on the setup.",
    image: "/test.jpeg", 
    link: "https://github.com/kwmndz/ChessBoardDetection"
  },
  {
    title: "Augmented Reality Connect 4 & AI Bot",
    description: "An AR implementation of Connect 4 for iOS, with realistic physics and a bot opponent. Pieces can be placed via touch interaction and the bot utilizes min-maxing and alpha-beta pruning to never loose!",
    image: "/c4AR.png", 
    link: "https://github.com/kwmndz/ConnectFourAR"
  },
  {
    title: "UGV Path Planning & Local Min Prediction",
    description: "Fill in here",
    image: "/test.jpeg",
    link: "https://github.com/kwmndz/MAVRIC-Lab"
  }
];

// =============================================
//              Skill Constellation
// =============================================

//Skill type definition
interface Skill {
  name: string;
  icon: React.ElementType;
  proficiency: number; // 1-5, affects size and brightness
  position: { x: number; y: number }; // Relative positioning in the constellation
  category: 'technical' | 'interpersonal';
}

export const skills: Skill[] = [
  // Technical Skills 
  { name: 'Python', icon: SiPython, proficiency: 5, position: { x: 8, y: 25 }, category: 'technical' },
  { name: 'C++', icon: SiCplusplus, proficiency: 5, position: { x: 23, y: 20 }, category: 'technical' },
  { name: 'Unity', icon: SiUnity, proficiency: 4, position: { x: 38, y: 25 }, category: 'technical' },
  { name: 'C#', icon: SiCsharp, proficiency: 4, position: { x: 13, y: 40 }, category: 'technical' },
  { name: 'Unreal', icon: SiUnrealengine, proficiency: 3, position: { x: 28, y: 35 }, category: 'technical' },
  { name: 'GitHub', icon: Github, proficiency: 4, position: { x: 8, y: 55 }, category: 'technical' },
  { name: 'Linux', icon: SiLinux, proficiency: 3, position: { x: 21, y: 50 }, category: 'technical' },
  { name: 'C', icon: SiC, proficiency: 3, position: { x: 38, y: 55 }, category: 'technical' },
  { name: 'Databricks', icon: SiDatabricks, proficiency: 3, position: { x: 13, y: 70 }, category: 'technical' },
  { name: 'SQL', icon: Database, proficiency: 3, position: { x: 28, y: 65 }, category: 'technical' },
  // Interpersonal Skills 
  { name: 'Leadership', icon: Users, proficiency: 5, position: { x: 65, y: 25 }, category: 'interpersonal' },
  { name: 'Team Collaboration', icon: Users, proficiency: 5, position: { x: 80, y: 20 }, category: 'interpersonal' },
  { name: 'Curiosity', icon: Lightbulb, proficiency: 4, position: { x: 85, y: 35 }, category: 'interpersonal' },
  { name: 'Communication', icon: MessageSquare, proficiency: 4, position: { x: 70, y: 40 }, category: 'interpersonal' },
  { name: 'Adaptability', icon: Brain, proficiency: 3, position: { x: 75, y: 55 }, category: 'interpersonal' }, // Adjusted position for better hover
];

// =============================================
//              Background Animation
// =============================================

// Generate random star positions for background animation
export const starPositions = Array.from({ length: 50 }, () => ({
  left: `${Math.floor(Math.random() * 100)}%`,
  top: `${Math.floor(Math.random() * 100)}%`, 
  duration: Math.floor(Math.random() * 3) + 2,
})); 