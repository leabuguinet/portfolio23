import React from "react"
import Layout from "../components/layout"
import Portrait from "../components/portrait"
import Window from "../components/window"
import Nav from "../components/nav"
import "../styles/main.scss"
import DarkMode from "../components/darkmodetoggle"
import Footer from "../components/footer"

//import { Head } from "../components/head"

const Index = ({ pageUrl }) => {

  let footerColor = "#E8B298";

  return (

    <>

  
    <Layout pageUrl={pageUrl}>
        <div className="homepage-container">
        <Portrait></Portrait>
        <Window></Window>
        <Nav pageUrl={pageUrl}></Nav>


        </div>

    </Layout>
    <Footer footerColor={footerColor} />

    </>
  )
}

export default Index

