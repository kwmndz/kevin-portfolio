import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kevinmendez',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
