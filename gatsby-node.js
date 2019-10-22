const path = require("path")

exports.DEFAULT_LANGUAGE = "fr"

const createTagPage = (createPage, postsByLang) => {
  const AllTagsIndexTemplate = path.resolve("src/templates/AllTagsIndex.js")
  const SingleTagIndexTemplate = path.resolve("src/templates/SingleTagIndex.js")
  const postByTags = {}

  postsByLang.forEach(({ edges }) => {
    edges.forEach(({ node }, index) => {
      const { frontmatter } = node
      if (frontmatter.tags) {
        frontmatter.tags.forEach(tag => {
          if (!postByTags[tag]) {
            postByTags[tag] = []
          }
          postByTags[tag].push(node)
        })
      }
    })
  })

  const tags = Object.keys(postByTags)

  createPage({
    path: "tags",
    component: AllTagsIndexTemplate,
    context: { tags: tags.sort() },
  })

  tags.forEach(tagName => {
    const postsByTagName = postByTags[tagName]

    createPage({
      path: `tags/${tagName}`,
      component: SingleTagIndexTemplate,
      context: { posts: postsByTagName, tagName },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js")

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: frontmatter___date }
            ) {
              group(field: frontmatter___lang) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      tags
                      path
                      lang
                      excerpt
                      date
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const postsByLang = result.data.allMarkdownRemark.group
        createTagPage(createPage, postsByLang)

        postsByLang.forEach(({ edges }) => {
          edges.forEach(({ node }, index) => {
            const { lang, path } = node.frontmatter

            createPage({
              path: `${lang}${path}`,
              component: blogPostTemplate,
              context: {
                pathSlug: path,
                lang,
                prev: index === 0 ? null : edges[index - 1].node,
                next: index === edges.length - 1 ? null : edges[index + 1].node,
              },
            })
          })

          resolve()
        })
      })
    )
  })
}
