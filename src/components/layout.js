import React from "react"
import Header from "./header"
//import "../styles/style.scss"

const Layout = props => {
  return (
    <>
      {/* <Header /> */}
      {props.children}
    </>
  )
}

export default Layout