import React from "react"
import { Link } from "gatsby"
import { PREFIX } from "../constants"
import StarIcon from "../../../static/star.svg"
import "./repo.scss"

const Repo = ({ name, description, stargazers_count, url, lang }) => (
  <article className={`${PREFIX}-repo`}>
    <img
      className={`${PREFIX}-repo__avatar`}
      src="https://picsum.photos/300/200"
      alt={name}
    />
    <h2 className={`${PREFIX}-repo__title`}>{name}</h2>
    <p className={`${PREFIX}-repo__description`}>{description}</p>
    <span className={`${PREFIX}-repo__stars`}>
      <StarIcon className={`${PREFIX}-repo__star-icon`} />
      {stargazers_count}
    </span>
    <div className={`${PREFIX}-repo__links`}>
      <a className={`${PREFIX}-repo__github`} href={url} target="blank">
        Voir sur Github
      </a>
      <Link className={`${PREFIX}-repo__details`} to={`${lang}/${name}`}>
        Voir détail
      </Link>
    </div>
  </article>
)

export default Repo
