import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./Layout"
import Tags from "../components/Tags"
import Meta from "../components/Meta"
import withClassModifier from "../utils/withClassModifier"
import { PREFIX } from "../components/constants"

const Article = ({ className, title, tags, next, prev, html, lang, stars }) => (
  <article className={className}>
    <h1 className={`${PREFIX}-post__title`}>{title}</h1>
    {stars && <h2>{stars}</h2>}
    <Tags tags={tags} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
    {prev && <Link to={`${lang}${prev.frontmatter.path}`}>Prev</Link>}
    {next && <Link to={`${lang}${next.frontmatter.path}`}>Next</Link>}
  </article>
)

const EnhancedArticle = withClassModifier(`${PREFIX}-post`)(Article)
EnhancedArticle.displayName = "Article"

const TemplatePost = ({ data, pageContext }) => {
  const { title, tags, meta, path, modifier } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const { next, prev, lang, siteUrl, repoInfo } = pageContext
  return (
    <Layout>
      <Meta {...meta} path={`${siteUrl}/${lang}${path}`} />
      <EnhancedArticle
        classModifier={modifier}
        title={title}
        tags={tags}
        html={html}
        next={next}
        prev={prev}
        lang={lang}
        stars={repoInfo.stargazers_count}
      />
    </Layout>
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
        modifier
      }
    }
  }
`

export default TemplatePost
