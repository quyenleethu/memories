module.exports = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Memories of Le Thu Quyen`,
    siteTitleAlt: `Memories of Le Thu Quyen`,
    siteHeadline: `Memories of Le Thu Quyen`,
    siteUrl: `https://quyenleethu.github.io/memories`,
    siteDescription: "Minimalistic portfolio/photography site with masonry grid, page transitions and big images",
    siteImage: `/banner.jpg`,
    author: `@retro90s`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Le Thu Quyen`,
        socialMedia: [{
          title: `Instagram`,
          href: `https://www.instagram.com/quyquy.9x`
        }],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Memories of Le Thu Quyen`,
        short_name: `Memories of Q`,
        description: `Memories of Le Thu Quyen`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`
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
  ].filter(Boolean),
}
