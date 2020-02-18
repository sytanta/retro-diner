import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../css/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
