import React from "react"
import Repo from "./Repo"

const Repos = ({ repos }) => (
  <section className="grid-6-small-3 has-gutter af-repos">
    {repos && repos.map(({ id, ...rest }) => <Repo key={id} {...rest} />)}
  </section>
)

export default Repos
