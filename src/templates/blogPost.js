import React from "react"
import { graphql, Link } from "gatsby"
import Tags from "../components/Tags"

const Template = ({ data, pageContext }) => {
  console.log(pageContext, data)
  const { title, tags } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const { next, prev, lang } = pageContext
  return (
    <div>
      <h1>{title}</h1>
      <Tags tags={tags} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {prev && <Link to={`${lang}${prev.frontmatter.path}`}>Prev</Link>}
      {next && <Link to={`${lang}${next.frontmatter.path}`}>Next</Link>}
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        tags
        lang
      }
    }
  }
`

export default Template
