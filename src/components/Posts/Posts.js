import React from "react"
import Post from "./Post"
import { PREFIX } from "../constants"

const Posts = ({ posts }) => (
  <section className={`${PREFIX}-posts`}>
    {posts &&
      posts.map(({ id, frontmatter: { modifier, ...restFrontmatter } }) => (
        <Post key={id} {...restFrontmatter} classModifier={modifier} />
      ))}
  </section>
)

export default Posts
