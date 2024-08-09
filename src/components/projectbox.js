import React from "react";
import { useState, useEffect, useRef } from "react";


import { motion } from "framer-motion";


import dataProject from "../assets/data/data-project.json";
import Fleche from '../assets/svg/fleche.inline.svg';
import Fleche2 from '../assets/svg/fleche.inline.svg';

export default function ProjectBox ({setShowProject, index, scrollPosition}){


  function closeModal() {
    setShowProject(false);
    let body = document.querySelector('body');
    body.classList.remove('overflow')
}

const test = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 0.51,
  },
};
  return (
   
    <motion.div
                
                  className="project-overlay"
                  variants={test}
                  style={{ top: scrollPosition }}
                  onClick={() => closeModal()  }
                >

      <div className="project-box" /* onClick={(e) => e.stopPropagation()} */  >

      <div className="project-content">
          <h2>{dataProject[index].title}</h2>
          <div className="close-modal-button"
                onClick={() => closeModal()  }
                
              >
          
              </div>
        </div>
        <div className="project-content">

          <div className="project-description">

            <div>
            <p>{dataProject[index].description}</p>

            <p>Technologies : {dataProject[index].technologies}</p>

            <p>{dataProject[index].year}</p>

            </div>
            <div>
            <a className="button" target="_blank" href={dataProject[index].link}>
            <span className="button__icon-wrapper">
                <Fleche />

                <Fleche2 className="button__icon-svg--copy"/>
            </span>
            Voir le site
          </a>
          </div>

          </div>
            <img src={'' + dataProject[index].img}/>
        </div>


      </div>
      </motion.div>
  );
};
