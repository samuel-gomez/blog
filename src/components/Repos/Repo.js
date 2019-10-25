import React from "react"

const Repo = ({ name, description, stargazers_count, url }) => (
  <article>
    <h1>
      <a href={url} target="blank">
        {name}
      </a>
    </h1>
    <span>{stargazers_count}</span>
    <p>{description}</p>
  </article>
)

export default Repo
