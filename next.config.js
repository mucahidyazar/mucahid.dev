/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const {i18n} = require('./next-i18next.config')

module.exports = withPlugins([
  [withBundleAnalyzer],
  {
    experimental: {
      styledComponents: true,
    },
    reactStrictMode: true,
    images: {
      domains: [
        'picsum.photos',
        'images.unsplash.com',
        'avatars.githubusercontent.com',
        'cdn-images-1.medium.com',
        'instagram.fist4-1.fna.fbcdn.net',
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
    rewrites: async () => [
      {
        source: '/en/sign-in',
        destination: '/en/sign-in',
        locale: false,
      },
      {
        source: '/tr/giris',
        destination: '/tr/sign-in',
        locale: false,
      },
      {
        source: '/en/home',
        destination: '/en',
        locale: false,
      },
      {
        source: '/tr/anasayfa',
        destination: '/tr',
        locale: false,
      },
      {
        source: '/en/about',
        destination: '/en/about',
        locale: false,
      },
      {
        source: '/tr/hakkinda',
        destination: '/tr/about',
        locale: false,
      },
      {
        source: '/en/projects',
        destination: '/en/projects',
        locale: false,
      },
      {
        source: '/tr/projeler',
        destination: '/tr/projects',
        locale: false,
      },
      {
        source: '/en/blog',
        destination: '/en/blog',
        locale: false,
      },
      {
        source: '/tr/blog',
        destination: '/tr/blog',
        locale: false,
      },
      {
        source: '/en/article',
        destination: '/en/article',
        locale: false,
      },
      {
        source: '/tr/yazi',
        destination: '/tr/article',
        locale: false,
      },
      {
        source: '/en/media',
        destination: '/en/media',
        locale: false,
      },
      {
        source: '/tr/medya',
        destination: '/tr/media',
        locale: false,
      },
      {
        source: '/en/contact',
        destination: '/en/contact',
        locale: false,
      },
      {
        source: '/tr/iletisim',
        destination: '/tr/contact',
        locale: false,
      },
      {
        source: '/en/links',
        destination: '/en/links',
        locale: false,
      },
      {
        source: '/tr/linkler',
        destination: '/tr/links',
        locale: false,
      },
    ],
  },
])
