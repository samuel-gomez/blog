import React, { useState } from "react"
import Header from "../components/Header"
import { DEFAULT_LANGUAGE } from "../components/constants"
import "../../node_modules/knacss/css/knacss.css"
import "../../node_modules/knacss/css/grillade-grid.css"
import "./_mixins.scss"
import "./index.scss"

const Layout = ({ children }) => {
  const [stateLang, setStateLang] = useState(DEFAULT_LANGUAGE)
  return (
    <>
      <Header setStateLang={setStateLang} />
      {children}
    </>
  )
}

export default Layout
