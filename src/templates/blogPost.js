import React from "react"
import { graphql, Link } from "gatsby"
import Tags from "../components/Tags"
import Meta from "../components/Meta"

const Template = ({ data, pageContext }) => {
  const { title, tags, meta, path } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const { next, prev, lang, siteUrl } = pageContext
  return (
    <>
      <Meta {...meta} path={`${siteUrl}/${lang}${path}`} />
      <div>
        <h1>{title}</h1>
        <Tags tags={tags} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {prev && <Link to={`${lang}${prev.frontmatter.path}`}>Prev</Link>}
        {next && <Link to={`${lang}${next.frontmatter.path}`}>Next</Link>}
      </div>
    </>
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
        meta {
          description
          keywords
          title
        }
        path
      }
    }
  }
`

export default Template
