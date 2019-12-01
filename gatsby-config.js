require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `JEJE's Log`,
    siteTitleAlt: `JEJE's Log`,
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
    externalLinks: [
      {
        name: `Rocket`,
        url: `https://www.rocketpunch.com/@woojenoh`,
      },
      {
        name: `Github`,
        url: `https://github.com/wjnoh`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-153645923-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JEJE's Log`,
        short_name: `JEJE's Log`,
        description: `JEJE's Log`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `jejelog`
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
