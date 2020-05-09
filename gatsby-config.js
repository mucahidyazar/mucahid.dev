module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/contents/images/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/contents/images/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/contents/images/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `equipments`,
        path: `${__dirname}/contents/images/equipments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/contents/images/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `illustrators`,
        path: `${__dirname}/contents/images/illustrators`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/contents/images/links`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `myown`,
        path: `${__dirname}/contents/images/myown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/contents/images/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quotes`,
        path: `${__dirname}/contents/images/quotes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `random`,
        path: `${__dirname}/contents/images/random`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cvgkxip7hthf`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `hHUUZisKRWAe5tJV0kTHygjP2CukX1tMuNF2LasBS5w`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /contents/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-dark-mode",
    "gatsby-transformer-remark",
  ],
}
