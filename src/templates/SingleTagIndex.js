import React from "react"
import { Link } from "gatsby"

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <>
      <h1>Posts about : {tagName}</h1>
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
