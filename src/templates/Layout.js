import React, { useState } from "react"
import Header from "../components/Header"
import Container from "./Container"
import { DEFAULT_LANGUAGE } from "../components/constants"
import { Provider } from "./Context"
import "./index.scss"

const Layout = ({ children }) => {
  const [stateLang, setStateLang] = useState(DEFAULT_LANGUAGE)
  return (
    <Provider value={{ stateLang, setStateLang }}>
      <main>
        <Header />
        <Container classModifier="layout">{children}</Container>
      </main>
    </Provider>
  )
}

export default Layout
