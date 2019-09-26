/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Blog Samuel Gomez`,
    siteUrl: `https://www.samuelgomez.fr`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
