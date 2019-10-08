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
    {
      resolve: "gatsby-source-pixabay",
      options: {
        key: "13413439-f2e77375a5e4bfc5e4076a13c",
        q: "yellow flowers",
      },
    },
  ],
}
