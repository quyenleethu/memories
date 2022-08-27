module.exports = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Memories of Le Thu Quyen`,
    siteTitleAlt: `Memories of Le Thu Quyen`,
    siteHeadline: `Memories of Le Thu Quyen`,
    siteUrl: `https://quyenleethu.github.io/memories`,
    siteDescription: "Minimalistic portfolio/photography site with masonry grid, page transitions and big images",
    siteLanguage: `en`,
    author: `@quyenleethu`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Le Thu Quyen`,
        socialMedia: [{
          title: `Instagram`,
          href: `https://www.instagram.com/quyquy.9x`
        }],
        location: `Vietnam`,
      },
    },
  ],
}
