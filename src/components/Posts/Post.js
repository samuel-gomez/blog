import React from "react"
import { Link } from "gatsby"

const Post = ({ title, excerpt, path, lang }) => (
  <article>
    <h1>
      <Link to={`${lang}${path}`}>{title}</Link>
    </h1>
    <p>{excerpt}</p>
  </article>
)

export default Post
