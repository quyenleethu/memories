import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: `/memories`,
  siteMetadata: {
    siteTitle: `Memories of Le Thu Quyen`,
    siteTitleAlt: `Memories of Le Thu Quyen`,
    siteHeadline: `Memories of Le Thu Quyen`,
    siteUrl: `https://quyenleethu.github.io/memories`,
    siteDescription: "The site saves memories of Le Thu Quyen",
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Le Thu Quyen`,
        socialMedia: [
          {
            title: `Instagram`,
            href: `https://www.instagram.com/quyquy.9x`,
          },
        ],
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
        short_name: `Q`,
        description: `Memories of Le Thu Quyen`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
