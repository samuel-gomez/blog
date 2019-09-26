import { graphql } from "gatsby"

export default graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`
