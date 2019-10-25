import React, { useState } from "react"
import Header from "../components/Header"
import Posts from "../components/Posts"
import { DEFAULT_LANGUAGE } from "../components/constants"

const Layout = props => {
  const [stateLang, setStateLang] = useState(DEFAULT_LANGUAGE)
  return (
    <>
      <Header setStateLang={setStateLang} />
      <Posts lang={stateLang} />
    </>
  )
}

export default Layout
