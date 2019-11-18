import React, { useContext } from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import { Context } from "../../templates/Context"
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

const ReposEnhanced = () => {
  const { stateLang } = useContext(Context)
  const data = useStaticQuery(queryRepos)
  const repos = get(data, "allGithubRepo.nodes", [])
  return <Repos repos={repos} lang={stateLang} />
}

export default ReposEnhanced
