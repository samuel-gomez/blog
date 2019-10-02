import React from "react"
import { Link } from "gatsby"

const Tags = ({ tags }) => (
  <ul>
    {tags &&
      tags.map(tag => (
        <li key={tag}>
          <Link to={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
  </ul>
)

export default Tags
