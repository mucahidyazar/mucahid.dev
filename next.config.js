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
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_FROM: process.env.SMTP_FROM,
    SECRET: process.env.SECRET,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    PORT: process.env.PORT,
  },
}
