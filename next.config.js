/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['img.icons8.com', 'img.buymeacoffee.com'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
