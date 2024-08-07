import React from "react"
import Layout from "../components/layout"
import Portrait from "../components/portrait"
import Window from "../components/window"
import Nav from "../components/nav"
import "../styles/main.scss"
import DarkMode from "../components/darkmodetoggle"

//import { Head } from "../components/head"

const Index = ({ location }) => {

  const pageUrl = location.pathname;


  return (

    <>

  
    <Layout pageUrl={pageUrl}>
        <div className="homepage-container">
        <Portrait></Portrait>
        <Window></Window>
        <Nav pageUrl={pageUrl}></Nav>


        </div>

    </Layout>
    </>
  )
}

export default Index

