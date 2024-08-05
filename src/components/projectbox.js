import React from "react";
import { useState, useEffect, useRef } from "react";
import dataProject from "../assets/data/data-project.json";


export default function ProjectBox ({setShowProject, index}){


  console.log(index)
  return (
   
      <div className="project-box" /* onClick={(e) => e.stopPropagation()} */>

        <div className="project-content">

          <div className="project-description">

            <h2>{dataProject[index].title}</h2>

            <p>{dataProject[index].description}</p>

          </div>

          <div className="project-img">

            <p>{dataProject[index].subtitle}</p>

          </div>
        </div>

          <div
            onClick={() => setShowProject(false)}
          >
            Cancel 
          </div>
      </div>

  );
};
