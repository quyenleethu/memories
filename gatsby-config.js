module.exports = {
  pathPrefix: "/gatsby-starter-emilia",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Gatsby Starter Emilia`,
    siteTitleAlt: `Gatsby Starter Emilia | 📷 from AREA44`,
    siteHeadline: `Gatsby Starter Emilia | 📷 from AREA44`,
    siteUrl: `https://area44.github.io/gatsby-starter-emilia/`,
    siteDescription: "📷 from AREA44",
    siteLanguage: `en`,
    author: `@area44`,
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
