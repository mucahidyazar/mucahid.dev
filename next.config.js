/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const {i18n} = require('./next-i18next.config')
const {rewrites} = require('./config')

module.exports = withPlugins([
  [withBundleAnalyzer],
  {
    experimental: {
      styledComponents: true,
    },
    future: {
      webpack5: true,
    },
    reactStrictMode: true,
    images: {
      domains: [
        'picsum.photos',
        'images.unsplash.com',
        'avatars.githubusercontent.com',
        'cdn-images-1.medium.com',
        'instagram.fist13-1.fna.fbcdn.net',
        'i.giphy.com',
      ],
    },
    eslint: {
      dirs: ['pages', 'src'],
    },
    env: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GITHUB_SECRET: process.env.GITHUB_SECRET,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      SMTP_FROM: process.env.SMTP_FROM,
      SECRET: process.env.SECRET,
      PORT: process.env.PORT,
    },
    i18n,
    rewrites: async () => rewrites,
  },
])
