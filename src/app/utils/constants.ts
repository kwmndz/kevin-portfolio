import { SiPython, SiCplusplus, SiUnity, SiCsharp, SiUnrealengine, SiLinux, SiC, SiDatabricks } from 'react-icons/si';
import { Github, Database, Users, MessageSquare, Lightbulb, Brain } from 'lucide-react';

// =============================================
//              Project Data
// =============================================

export const projects = [
  {
    title: "Book Data Pipeline & Cataloger",
    description: "An iOS app to scan book barcodes or enter ISBNs, with a python backed to pull data like author info and pricing through web scraping. Outputs in a csv format, with optional combining and sorting of the files.",
    image: "/kevinmendez/bkDataPipeline.jpeg",
    link: "https://github.com/kwmndz/ISBN-Parser"
  },
  {
    title: "Augmented Reality Connect 4 & AI Bot",
    description: "An AR implementation of Connect 4 for iOS, with realistic physics and a bot opponent. Pieces can be placed via touch interaction and the bot utilizes min-maxing and alpha-beta pruning to never loose!",
    image: "/kevinmendez/c4AR.png", 
    link: "https://github.com/kwmndz/ConnectFourAR"
  },
  {
    title: "2D Physics Engine & Simulator",
    description: "A 2D physics engine and simulator developed from scratch in C++. It employs Verlet integration for physics calculations and utilizes the SFML library for rendering visuals. The engine is fully deterministic, and is still currently in its early stages of development.",
    image: "/kevinmendez/snowman_pfp_physics_sim.png",
    link: "https://github.com/kwmndz/2D-Physics-Simulator"
  },
  {
    title: "UGV Path Planning & Local Min Prediction",
    description: "This project is a customizable simulation initially developed in Python and later optimized with C++ for improved performance. It enables users to configure obstacles, waypoints, and size, with options for randomizing various aspects. The simulation utilizes the potential field algorithm for UGV navigation and Dynamic Bayesian Filtering to predict local minima. Results are saved in organized folders with concise logs and graphs for easy visualization. The implementation supports multi-threading to run multiple simulations simultaneously.",
    image: "/kevinmendez/potentialalg_pfp.png",
    link: "https://github.com/kwmndz/MAVRIC-Lab"
  },
  {
    title: "Chess Position Detector & Analyzer",
    description: "A Python tool that detects chess piece positions from a board image, converts it to FEN notation, and suggests the next move based on the setup.",
    image: "/kevinmendez/chess_pfp.png", 
    link: "https://github.com/kwmndz/ChessBoardDetection"
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

// Hard coded star positions for background animation
// export const starPositions = [
//   { left: '15%', top: '23%', duration: 3 },
//   { left: '82%', top: '12%', duration: 4 },
//   { left: '45%', top: '76%', duration: 2 },
//   { left: '67%', top: '34%', duration: 3 },
//   { left: '28%', top: '89%', duration: 4 },
//   { left: '93%', top: '45%', duration: 2 },
//   { left: '8%', top: '67%', duration: 3 },
//   { left: '52%', top: '21%', duration: 4 },
//   { left: '73%', top: '56%', duration: 2 },
//   { left: '31%', top: '43%', duration: 3 },
//   { left: '88%', top: '78%', duration: 4 },
//   { left: '12%', top: '34%', duration: 2 },
//   { left: '64%', top: '90%', duration: 3 },
//   { left: '41%', top: '15%', duration: 4 },
//   { left: '95%', top: '67%', duration: 2 },
//   { left: '25%', top: '54%', duration: 3 },
//   { left: '78%', top: '32%', duration: 4 },
//   { left: '19%', top: '87%', duration: 2 },
//   { left: '59%', top: '43%', duration: 3 },
//   { left: '36%', top: '65%', duration: 4 },
//   { left: '83%', top: '21%', duration: 2 },
//   { left: '14%', top: '76%', duration: 3 },
//   { left: '68%', top: '45%', duration: 4 },
//   { left: '42%', top: '89%', duration: 2 },
//   { left: '91%', top: '34%', duration: 3 },
//   { left: '27%', top: '67%', duration: 4 },
//   { left: '75%', top: '12%', duration: 2 },
//   { left: '16%', top: '54%', duration: 3 },
//   { left: '62%', top: '78%', duration: 4 },
//   { left: '38%', top: '32%', duration: 2 },
//   { left: '85%', top: '65%', duration: 3 },
//   { left: '22%', top: '43%', duration: 4 },
//   { left: '71%', top: '87%', duration: 2 },
//   { left: '45%', top: '23%', duration: 3 },
//   { left: '93%', top: '56%', duration: 4 },
//   { left: '11%', top: '89%', duration: 2 },
//   { left: '58%', top: '34%', duration: 3 },
//   { left: '33%', top: '76%', duration: 4 },
//   { left: '81%', top: '45%', duration: 2 },
//   { left: '17%', top: '67%', duration: 3 },
//   { left: '64%', top: '21%', duration: 4 },
//   { left: '39%', top: '54%', duration: 2 },
//   { left: '87%', top: '89%', duration: 3 },
//   { left: '24%', top: '32%', duration: 4 },
//   { left: '72%', top: '65%', duration: 2 },
//   { left: '48%', top: '43%', duration: 3 },
//   { left: '95%', top: '78%', duration: 4 },
//   { left: '13%', top: '12%', duration: 2 },
//   { left: '61%', top: '87%', duration: 3 },
//   { left: '35%', top: '56%', duration: 4 }
// ];

// Generate random star positions for background animation
export const starPositions = Array.from({ length: 50 }, () => ({
  left: `${Math.floor(Math.random() * 100)}%`,
  top: `${Math.floor(Math.random() * 100)}%`, 
  duration: Math.floor(Math.random() * 3) + 2,
})); 

// =============================================
//              Work Experience
// =============================================

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

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

// If you have any hardcoded paths, update them like this:
export const STATIC_PATHS = {
  images: '/kevinmendez/images/',
  assets: '/kevinmendez/assets/',
} 