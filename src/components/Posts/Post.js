import React from "react"
import { Link } from "gatsby"
import withClassModifier from "../../utils/withClassModifier"
import { PREFIX } from "../constants"

const Post = props => {
  const { title, excerpt, path, lang, className } = props

  return (
    <article className={className}>
      <h1>
        <Link to={`${lang}${path}`}>{title}</Link>
      </h1>
      <p>{excerpt}</p>
    </article>
  )
}

const EnhancedPost = withClassModifier(`${PREFIX}-posts__item`)(Post)
EnhancedPost.displayName = "Post"

export default EnhancedPost
