import React from "react"
import { PREFIX } from "../constants"
import "./header.scss"

const Header = ({ metas: { title, description, siteUrl } }) => (
  <header className={`${PREFIX}-header`}>
    <h1 className={`${PREFIX}-header__title`}>
      <a href={siteUrl} title={title}>
        {title}
      </a>
    </h1>
    <nav className={`${PREFIX}-nav`}>
      <ul className={`${PREFIX}-nav__list`}>
        <li className={`${PREFIX}-nav__item`}>
          <a className={`${PREFIX}-nav__link`} href="#/" title="Open Source">
            Open Source
          </a>
        </li>
      </ul>
    </nav>
    <p>{description}</p>
  </header>
)

export default Header
