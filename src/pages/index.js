import React from "react"
import Layout from "../components/layout"
import Portrait from "../components/portrait"
import Window from "../components/window"
import Nav from "../components/nav"
import "../styles/homepage.scss"
import "../styles/variables.scss"
import "../styles/base.scss"
//import { Head } from "../components/head"

const Index = () => {
  return (
    <Layout>
      <main>
        <Portrait></Portrait>
        <Window></Window>
        <Nav></Nav>
      </main>


    </Layout>
  )
}

export default Index
