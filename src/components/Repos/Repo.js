import React from "react"
import { Link } from "gatsby"
import { PREFIX } from "../constants"
import "./repo.css"

const Repo = ({ name, description, stargazers_count, url, lang, path }) => (
  <article className={`${PREFIX}-repo`}>
    <h2 className={`${PREFIX}-repo__title`}>{name}</h2>
    <span className={`${PREFIX}-repo__stars`}>{stargazers_count}</span>
    <p className={`${PREFIX}-repo__description`}>{description}</p>
    <a className={`${PREFIX}-repo__github`} href={url} target="blank">
      Voir sur Github
    </a>
    <Link className={`${PREFIX}-repo__details`} to={`${lang}${path}`}>
      Voir détail
    </Link>
  </article>
)

export default Repo
