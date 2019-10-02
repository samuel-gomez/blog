import React from "react"
import { graphql, Link } from "gatsby"

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <ul>
      {tags &&
        tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
    </ul>
  )
}

export default AllTagsTemplate
