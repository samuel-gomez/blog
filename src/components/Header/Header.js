import React from "react"

const Header = ({ metas: { title, description, siteUrl } }) => (
  <>
    <h1>
      <a href={siteUrl} title={title}>
        {title}
      </a>
    </h1>
    <p>{description}</p>
  </>
)

export default Header
