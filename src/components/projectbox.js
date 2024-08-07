import React from "react";
import { useState, useEffect, useRef } from "react";
import dataProject from "../assets/data/data-project.json";


export default function ProjectBox ({setShowProject, index, scrollPosition}){


  function closeModal() {
    setShowProject(false);
    let body = document.querySelector('body');
    body.classList.remove('overflow')
}


  return (
   
    <div className="project-overlay" style={{top: scrollPosition}}>
      <div className="project-box" /* onClick={(e) => e.stopPropagation()} */>

      <div className="project-content">
          <h2>{dataProject[index].title}</h2>
          <div className="close-modal-button"
                onClick={() => closeModal()  }
                
              >
          
              </div>
        </div>
        <div className="project-content">

          <div className="project-description">

            <p>{dataProject[index].description}</p>

            <p>Technologies : {dataProject[index].technologies}</p>

            <p>{dataProject[index].year}</p>

          </div>

  

            <img src={'' + dataProject[index].img}/>


        </div>


      </div>
      </div>
  );
};
