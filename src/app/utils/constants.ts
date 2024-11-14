// Project data
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

// Generate random star positions for background animation
export const starPositions = Array.from({ length: 50 }, () => ({
  left: `${Math.floor(Math.random() * 100)}%`,
  top: `${Math.floor(Math.random() * 100)}%`, 
  duration: Math.floor(Math.random() * 3) + 2,
})); 