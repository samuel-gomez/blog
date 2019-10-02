import React from "react"
import { graphql, Link } from "gatsby"

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <>
      <h1>{tagName}</h1>
      <ul>
        {posts &&
          posts.map(post => (
            <li key={post.title}>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default SingleTagTemplate
