import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { PREFIX } from "../constants"
import StarIcon from "../../../static/star.svg"
import "./repo.scss"
import { isNull } from "lodash"

const Repo = ({ name, description = "", stargazers_count, url, lang }) => (
  <article className={`${PREFIX}-repo`}>
    <img
      className={`${PREFIX}-repo__avatar`}
      src={`repos/logo-${name}.svg`}
      alt={name}
    />
    <div className={`${PREFIX}-repo__content`}>
      <h2 className={`${PREFIX}-repo__title`}>{name}</h2>
      <p className={`${PREFIX}-repo__description`}>
        {!isNull(description)
          ? `${description.substring(0, 100)} ...`
          : "No description"}
      </p>
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
    </div>
  </article>
)

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  description: PropTypes.string,
  stargazers_count: PropTypes.number,
}

Repo.defaultProps = {
  description: "No description",
  stargazers_count: 0,
}

export default Repo
