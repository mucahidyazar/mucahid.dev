/** @type {import('next-sitemap').IConfig} */

// For MAC OS script
// "build:post": "next-sitemap",
// For Windows
// "build:post": "cross-env next-sitemap --config next-sitemap.js",

module.exports = {
  siteUrl: 'https://mucahid.dev', // process.env.BASE_URL
  changefreq: 'daily',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
