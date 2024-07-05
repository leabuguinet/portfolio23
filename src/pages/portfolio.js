import React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";
import "../styles/portfolio.scss";
import "../styles/variables.scss";
import "../styles/base.scss";
//import { Head } from "../components/head"
import { motion } from "framer-motion";


import Project1 from '../assets/jpg/test.jpg';
import Project2 from '../assets/jpg/archipelcontact.png'
import Project3 from '../assets/jpg/dailyorsay.png'
import Project4 from '../assets/jpg/karabafc.png'
import Project5 from '../assets/jpg/ajmariage.png'
import Project6 from '../assets/jpg/lesgrandsespaces.png'
import Project7 from '../assets/jpg/procatination.png'

import NavBurgerButton from "../components/nav-burger-button";

const numbers = [Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project1];


const Portfolio = ({ location }) => {

  const pageUrl = location.pathname;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3
      }
    }
  };
  

  const item = {
    hidden: { y: 20, height: '10px', opacity: 0  },
    visible: {
      y: 0,
      height: '100%',
      opacity: 1
    }
  };

  return (
    <>
    <NavBurgerButton />



    <Layout>
  
      <div className="portfolio-container">

      <Nav pageUrl={pageUrl}></Nav>


        <div className="portfolio-content">

            <motion.div
                className="gallery"
                variants={container}
                initial="hidden"
                animate="visible"
            >


            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <motion.a key={index} className="gallery-item" variants={item} style={{ originX: 0, originZ: 0 }}
                href={"/projet-" + index}
            >  

              <motion.img variants={item} class="test" src={numbers[index]} ></motion.img>
            </motion.a>
            ))}
            </motion.div>

        </div>
    
    </div>
    </Layout>
    </>
  );
};

export default Portfolio;
