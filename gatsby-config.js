/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetaData: {
    title: "Samuel Blog Title",
    description: "Samuel Blog Description"
  },
  plugins: [
    `gatsby-transformer-remark`,
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `page`,
      path: `${__dirname}/src/pages`
    }
  ]
}
