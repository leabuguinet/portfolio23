import React from "react";

import { useState, useRef, useEffect } from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";

import ProjectBox from "../components/projectbox";

import { motion } from "framer-motion";

import Project1 from "../assets/jpg/karabafc.png";
import Project2 from "../assets/jpg/ajmariage.png";
import Project3 from "../assets/jpg/dailyorsay.png";
import Project4 from "../assets/jpg/archipelcontact.png";
import Project5 from "../assets/jpg/lesgrandsespaces.png";
import Project6 from "../assets/jpg/procatination.png";
import Project7 from "../assets/jpg/procatination.png";

import NavBurgerButton from "../components/nav-burger-button";
//import ProjectBox from "../components/projectbox";

const numbers = [Project1, Project2, Project3, Project4, Project5, Project6];
let indexproject;

const Portfolio = ({ location }) => {

  const pageUrl = location.pathname;
  const [showProject, setShowProject] = useState(false);

  function openModal(index) {
    indexproject = index;
    setShowProject(!showProject);
    let body = document.querySelector('body');
    body.classList.add('overflow')
}



  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };



  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      height: "100%",
      opacity: 1,
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <Layout>
        <div className="portfolio-container">
          <NavBurgerButton />
          <Nav pageUrl={pageUrl}></Nav>

          <div className="portfolio-content">
            <motion.div
              className="gallery"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <motion.button
                
                  key={index}
                  className="gallery-item"
                  variants={item}
                  style={{ originX: 0, originZ: 0 }}
                  onClick={() => openModal(index)}
                  index={index}

                >
                  <motion.img
                    variants={item}
                    className="gallery-item-img"
                    src={numbers[index]}
                  ></motion.img>
                </motion.button>
              ))}

              
            </motion.div>
            
          </div>
        </div>
        {showProject && <ProjectBox setShowProject={setShowProject} index={indexproject} scrollPosition={scrollPosition}/>}

      </Layout>
    </>
  );
};

export default Portfolio;
