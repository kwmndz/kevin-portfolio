// Project data
export const projects = [
  {
    title: "Project Nebula",
    description: "A revolutionary AI-powered space exploration simulator",
    image: "/test.jpeg",
    link: "#"
  },
  {
    title: "Cosmic Connect",
    description: "Real-time collaboration platform for distributed teams",
    image: "/test.jpeg", 
    link: "#"
  },
  {
    title: "Cocky Connect",
    description: "Real-time collaboration platform for distributed teams",
    image: "/test.jpeg", 
    link: "#"
  },
  {
    title: "Star Atlas",
    description: "Interactive data visualization dashboard",
    image: "/test.jpeg",
    link: "#"
  }
];

// Generate random star positions for background animation
export const starPositions = Array.from({ length: 50 }, () => ({
  left: `${Math.floor(Math.random() * 100)}%`,
  top: `${Math.floor(Math.random() * 100)}%`, 
  duration: Math.floor(Math.random() * 3) + 2,
})); 