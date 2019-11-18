import React from "react"
import { Link } from "gatsby"
import { PREFIX } from "../constants"
import "./menu.scss"

const Menu = () => (
  <nav className={`${PREFIX}-nav`}>
    <ul className={`${PREFIX}-nav__list`}>
      <li className={`${PREFIX}-nav__item`}>
        <Link
          className={`${PREFIX}-nav__link`}
          to="/"
          activeClassName={`${PREFIX}-nav__link--active`}
        >
          Accueil
        </Link>
      </li>
      <li className={`${PREFIX}-nav__item`}>
        <Link
          className={`${PREFIX}-nav__link`}
          to="/blog"
          activeClassName={`${PREFIX}-nav__link--active`}
        >
          Blog
        </Link>
      </li>
      <li className={`${PREFIX}-nav__item`}>
        <a
          className={`${PREFIX}-nav__link`}
          href="https://github.com/AxaGuilDEv"
          title="Github GuilDevOpen"
          target="blank"
        >
          Github
        </a>
      </li>
      <li className={`${PREFIX}-nav__item`}>
        <a
          className={`${PREFIX}-nav__link`}
          href="https://github.com/axa-group"
          title="Github AxaGroup"
          target="blank"
        >
          Axa Group
        </a>
      </li>
      {/* <li className={`${PREFIX}-nav__item`}>
        <a
          className={`${PREFIX}-nav__link`}
          href="https://medium.com/just-tech-it-now"
          title="Blog Just Tech IT"
          target="blank"
        >
          Blog
        </a>
      </li> */}
    </ul>
  </nav>
)

export default Menu
