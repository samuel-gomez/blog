const path = require("path")
const { isEmpty } = require("lodash")

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
                      modifier
                    }
                  }
                }
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
            allGithubRepo {
              nodes {
                id
                name
                description
                url
                stargazers_count
              }
            }
          }
        `
      ).then(result => {
        const { allMarkdownRemark, allGithubRepo, site } = result.data
        const siteUrl = site.siteMetadata.siteUrl
        const postsByLang = allMarkdownRemark.group
        createTagPage(createPage, postsByLang)

        /*  console.log(
          "result",
          allGithubRepo.nodes
            .filter(repo => repo.name === "react-toolkit")
            .shift()
        ) */

        postsByLang.forEach(({ edges }) => {
          edges.forEach(({ node }, index) => {
            const { lang, path, modifier } = node.frontmatter

            const filtreName = repo => {
              const pathName = `/${repo.name}`
              return pathName === path
            }

            const repoInfo = allGithubRepo.nodes.filter(filtreName)

            console.log("repoInfo", repoInfo)

            createPage({
              path: `${lang}${path}`,
              component: blogPostTemplate,
              classModifier: modifier,
              context: {
                classModifier: modifier,
                pathSlug: path,
                lang,
                siteUrl,
                prev: index === 0 ? null : edges[index - 1].node,
                next: index === edges.length - 1 ? null : edges[index + 1].node,
                repoInfo: !isEmpty(repoInfo) ? repoInfo.shift() : repoInfo,
              },
            })
          })

          resolve()
        })
      })
    )
  })
}
