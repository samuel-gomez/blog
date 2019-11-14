import React from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import Repos from "./Repos"

export const queryRepos = graphql`
  query ReposQuery {
    allGithubRepo(sort: { order: DESC, fields: stargazers_count }) {
      nodes {
        id
        name
        description
        url
        stargazers_count
      }
    }
  }
`

const ReposEnhanced = props => {
  const data = useStaticQuery(queryRepos)
  const repos = get(data, "allGithubRepo.nodes", [])
  return <Repos {...props} repos={repos} />
}

export default ReposEnhanced
