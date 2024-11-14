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

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

// =============================================
//              Work Experience
// =============================================

export const workExperience: WorkExperience[] = [
  {
    company: "MAVRIC Research Lab",
    role: "Research Intern",
    location: "University of Michigan",
    period: "September 2024 - Present",
    description: "Research laboratory focused on autonomous vehicle development and robotics innovation.",
    responsibilities: [
      "Developed python scripts to control the UGV's path planning using the potential field algorithm",
      "Implemented Dynamic Bayesian Filtering to predict when and where the UGV would enter a local minimum",
      "Integrated script functionality within the Unreal Engine 5 simulation and added the ability to dynamically set waypoints"
    ],
    techStack: ["Python", "Unreal Engine 5", "Robotics", "Path Planning", "Bayesian Filtering"]
  },
  {
    company: "Mailinglists.com / Infinite Media, Inc",
    role: "Paid Intern",
    location: "Remote",
    period: "June 2023 - August 2024",
    description: "Infinite Media specializes in high-quality data lists for businesses",
    responsibilities: [
      "Script writing in PySpark & SQL to create queries, refractor libraries, set up & test jobs, and compile data",
      "Management of back-end systems through Databricks, SFTP and Bitbucket",
      "Participated in team meetings while constantly learning new material & software"
    ],
    techStack: ["PySpark", "SQL", "Databricks", "SFTP", "Bitbucket"]
  },
  {
    company: "KutterGroup LLC",
    role: "Paid Intern",
    location: "Remote",
    period: "June 2022 - June 2023",
    description: "KutterGroup LLC specializes in website development and maintenance",
    responsibilities: [
      "Script writing in Python & SQL for data transfer and back-end maintenance",
      "Webpage UI development through Wordpress as well as plug-in management"
    ],
    techStack: ["Python", "SQL", "WordPress", "UI Development"]
  }
]; 