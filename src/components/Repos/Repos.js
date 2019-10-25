import React from "react"
import Repo from "./Repo"

const Repos = ({ repos }) => (
  <section>
    {repos && repos.map(({ id, ...rest }) => <Repo key={id} {...rest} />)}
  </section>
)

export default Repos
