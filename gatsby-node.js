const path = require("path")

const createTagPage = (createPage, posts) => {
  const AllTagsIndexTemplate = path.resolve("src/templates/AllTagsIndex.js")
  const SingleTagIndexTemplate = path.resolve("src/templates/SingleTagIndex.js")
  const postByTags = {}

  posts.forEach(({ node }) => {
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
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges

        createTagPage(createPage, posts)

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })

          resolve()
        })
      })
    )
  })
}
