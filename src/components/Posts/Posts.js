import React from "react"
import Post from "./Post"

const Posts = ({ posts }) => (
  <section>
    {posts &&
      posts.map(({ id, frontmatter }) => <Post key={id} {...frontmatter} />)}
  </section>
)

export default Posts
