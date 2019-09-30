import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
