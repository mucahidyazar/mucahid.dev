/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'images.unsplash.com',
      'cdn-images-1.medium.com',
      'instagram.fist13-1.fna.fbcdn.net',
    ],
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
}
