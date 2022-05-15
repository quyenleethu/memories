module.exports = {
  pathPrefix: "/memories",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `📷 of Le Thu Quyen`,
    siteTitleAlt: `📷 of Le Thu Quyen`,
    siteHeadline: `📷 of Le Thu Quyen`,
    siteUrl: `https://quyenleethu.github.io/memories/`,
    siteDescription: "Memories of Le Thu Quyen",
    siteLanguage: `en`,
    author: `@quyenleethu`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2022`,
        socialMedia: [{}],
        location: `Vietnam`,
      },
    },
  ],
}
