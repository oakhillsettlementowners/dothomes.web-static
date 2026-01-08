/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'export' to enable API routes on Vercel
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
