/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 