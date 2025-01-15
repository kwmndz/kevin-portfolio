import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kevinmendez',
  assetPrefix: '/kevinmendez',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
