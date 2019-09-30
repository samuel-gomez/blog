import React from "react"
import { Link } from "gatsby"

const Post = ({ title, excerpt, path }) => (
  <article>
    <h1>
      <Link to={path}>{title}</Link>
    </h1>
    <p>{excerpt}</p>
  </article>
)

export default Post
