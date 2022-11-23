/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.icons8.com', 'img.buymeacoffee.com'],
  },
}

module.exports = nextConfig
