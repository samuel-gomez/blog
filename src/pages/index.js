import React from "react"
import { get } from "lodash"
import { useStaticQuery, graphql } from "gatsby"
import queryMetaData from "../queries/metaData"
import Header from "../components/Header"

const Layout = props => {
  const data = useStaticQuery(queryMetaData)
  const metas = get(data, "site.siteMetadata", {})
  return <Header metas={metas} />
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
          date
          excerpt
        }
      }
    }
  }
`

export default Layout
