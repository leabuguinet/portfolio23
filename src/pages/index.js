import React from "react"
import Layout from "../components/layout"
import Portrait from "../components/portrait"
import Window from "../components/window"
import Nav from "../components/nav"
import "../styles/main.scss"
import DarkMode from "../components/darkmodetoggle"
import Footer from "../components/footer"
import Seo from "../components/seo"
//import { Head } from "../components/head"

const Index = ({ pageUrl }) => {

  let footerColor = "#E8B298";
  let homePage = true;

  return (

    <>

  
    <Layout pageUrl={pageUrl}>
        <div className="homepage-container">
        <Portrait></Portrait>
        <Window homePage={homePage}> </Window>
        <Nav homePage={homePage}></Nav>


        </div>

    </Layout>
    <Footer footerColor={footerColor} homePage={homePage} isFooter={true} />

    </>
  )
}

export const Head = () => <Seo title="Accueil" description="Léa Buguinet - Développeuse Web Front-End" />

export default Index

