/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/beatstream.app/' : '', // Prefix for static assets
  basePath: process.env.NODE_ENV === 'production' ? '/beatstream.app' : '', // Base path for GitHub Pages
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
    unoptimized: true, // Ensures images work with static export
  },
};

module.exports = nextConfig;