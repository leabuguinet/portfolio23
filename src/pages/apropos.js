import React from "react"
import Layout from "../components/layout"
import Portrait from "../components/portrait"
import Window from "../components/window"
import Nav from "../components/nav"
import "../styles/homepage.scss"
import "../styles/variables.scss"
import "../styles/base.scss"
//import { Head } from "../components/head"

const Apropos = () => {
  return (
    <Layout>


      <div className="about-container">
        <div className="about-content">

          <div className="pilea-container">

            <div className="pot"></div>
            <div className="pilea-center"></div>
            <div className="stem"></div>
            <div className="stem-2"></div>
            <div className="stem-3"></div>
            <div className="stem-4"></div>
            <div className="stem-5"></div>
            <div className="stem-6"></div>
            <div className="stem-7"></div>
            <div className="stem-8"></div>
            <div className="stem-9"></div>
            <div className="stem-10"></div>
            <div className="stem-11"></div>
            <div className="stem-12"></div>
            <div className="stem-13"></div>
            <div className="stem-14"></div>

          </div>


          <div className="curriculum-paper">

            <div className="curriculum-content">

              <h1>Léa Buguinet</h1>

              <h2><span>&#10022; </span>Expériences professionnelles</h2>

              <div className="exp-pro">
                <div>
                  <p>Depuis 2022</p>
                </div>
                <div>
                  <p>Agence Taurine</p>
                </div>
              </div>

              <div className="exp-pro">
                <div>
                  <p>Depuis 2021</p>
                </div>
                <div>
                  <p>Freelance pour : </p>
                </div>
              </div>

              <div className="exp-pro">
                <div>
                  <p>2018 - 2021</p>
                </div>
                <div>
                  <p>LA CONSTELLATION - Opérateur culturel & compagnie de théâtre </p>
                  <p>Assistante de communication - gestion de projets culturels artistiques  - 91
• Création de visuels tout support, rédaction et PAO, site internet Wix</p>
                </div>
              </div>

              <h2><span>&#10022; </span>Compétences</h2>


              <h2><span>&#10022; </span>DIPLÔMES & FORMATIONS</h2>


              <h2><span>&#10022; </span>Centres d'intérêt</h2>

              



            </div>


          </div>

        </div>
      </div>
      
       

    </Layout>
  )
}

export default Apropos
