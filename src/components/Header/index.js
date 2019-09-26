import React from "react"

const Header = ({ metas: { title, description, siteUrl } }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
    <a href={siteUrl} title={title}>
      Link to website
    </a>
  </>
)

export default Header
