/** @type {import('next').NextConfig} */
const nextConfig = {
  // Changed from 'export' to support API routes for AI chat
  // Pages are still statically generated, but API routes run serverless
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

