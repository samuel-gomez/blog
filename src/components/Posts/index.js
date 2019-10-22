import React from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import Posts from "./Posts"

export const queryPosts = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: ASC, fields: id }) {
      nodes {
        id
        frontmatter {
          title
          path
          date
          excerpt
          lang
        }
      }
    }
  }
`

const PostsEnhanced = props => {
  const { lang } = props
  const data = useStaticQuery(queryPosts)
  const posts = get(data, "allMarkdownRemark.nodes", []).filter(
    ({ frontmatter }) => frontmatter.lang === lang
  )
  return <Posts {...props} posts={posts} />
}

export default PostsEnhanced
