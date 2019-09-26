import { graphql } from "gatsby"

export default `
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
`
