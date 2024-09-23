import React from "react";
import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import dataProject from "../assets/data/data-project.json";
import Fleche from "../assets/svg/fleche.inline.svg";
import Fleche2 from "../assets/svg/fleche.inline.svg";

export default function ProjectBox({
  setShowProject,
  index,
  scrollPosition,
  showProject,
}) {
  function closeModal() {
    setShowProject(false);
    let body = document.querySelector("body");
    body.classList.remove("overflow");
  }

  return (

    <motion.div className="project-box"
    initial={{ opacity: 0, top: scrollPosition, y: -100 }}
    animate={{ opacity: 1, top: scrollPosition, y: 0}}
    exit={{ y: 200 }}
    >
      <div className="project-content">
        <h2>{dataProject[index].title}</h2>
        <div
          className="close-modal-button"
           onClick={() => closeModal()}
        ></div>
      </div>
      <div className="project-content">
        <div className="project-description">
          <div>
            <p>{dataProject[index].description}</p>

            <p>Technologies : {dataProject[index].technologies}</p>

            <p>{dataProject[index].year}</p>
          </div>
          <div>
            <a
              className="button"
              target="_blank"
              href={dataProject[index].link}
              style={{ 'background': dataProject[index].bgcolor, 'color': dataProject[index].color, }}
            >
              <span className="button__icon-wrapper">
                <Fleche />

                <Fleche2 className="button__icon-svg--copy" />
              </span>
              Voir le site
            </a>
          </div>
        </div>
        <img src={"" + dataProject[index].img} />
      </div>
    </motion.div>
  /* </div> */
  );
}
