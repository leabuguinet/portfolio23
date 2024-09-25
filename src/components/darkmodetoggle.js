import React from "react";
import { useState, useEffect } from "react";

/* Functions to display/none */
function add_display(target) {
  target.classList.add("displayblock");
}

function remove_display(target) {
  target.classList.remove("displayblock");
}

export default function DarkMode({ homePage }) {
  //const [isDark, setIsDark] = useState();
  const [isDark, setIsDark] = useState();

  // This runs when the page is loaded.
  useEffect(() => {
    if (localStorage.getItem("darkmode")) {
      if (localStorage.getItem("darkmode") === "true") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }
  }, []);

  const changeLightMode = () => {
    if (localStorage.getItem("darkmode")) {
      localStorage.setItem("darkmode", !isDark);
      setIsDark(!isDark);
    } else {
      localStorage.setItem("darkmode", !isDark);
      setIsDark(!isDark);
    }
  };

  useEffect(() => {


    /* GENERAL */
    if (isDark === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    /* HOMEPAGE CHANGE*/
    if (document.querySelector(".homepage-container")) {
      let lightray = document.querySelector(".lightray");
      let clouds = document.querySelectorAll(".clouds");
      let moon = document.querySelector(".moon");
      let star1 = document.querySelector(".star");
      let star2 = document.querySelector(".star-2");
      let star3 = document.querySelector(".star-3");
      let footer = document.querySelector(".footer");


      if (isDark === true) {

        footer.classList.add("home-dark-footer");

        //Sky
        add_display(lightray);
        add_display(moon);
        add_display(star1);
        add_display(star2);
        add_display(star3);
        for (let c = 0; c < clouds.length; c++) {
          clouds[c].classList.add("displaynone");
        }
      } else {

        footer.classList.remove("home-dark-footer");

        //Sky
        remove_display(lightray);
        remove_display(moon);
        remove_display(star1);
        remove_display(star2);
        remove_display(star3);
        for (let c = 0; c < clouds.length; c++) {
          clouds[c].classList.remove("displaynone");
        }
      }
    }

    /* ABOUT PAGE */
    if (document.querySelector(".about-container")) {
      let footer = document.querySelector(".footer");


      if (isDark === true) {
        footer.classList.add("home-dark-footer");
      } else {
        footer.classList.remove("home-dark-footer");
      }
    }

    /* PORTFOLIO PAGE */
    if (document.querySelector(".portfolio-container")) {
      let footer = document.querySelector(".footer");
      let galleryImgs = document.querySelectorAll(".gallery-item-img");
     

      if (isDark === true) {
        footer.classList.add("home-dark-footer");
       

        for (let g = 0; g < galleryImgs.length; g++) {
          galleryImgs[g].classList.add("gallery-item-img-darkmode");
        }

      } else {
        footer.classList.remove("home-dark-footer");


        for (let g = 0; g < galleryImgs.length; g++) {
          galleryImgs[g].classList.remove("gallery-item-img-darkmode");
        }
      }
    }

    /* MENTIONS */
    if (document.querySelector(".mentions-container")) {
      let footer = document.querySelector(".footer");


      if (isDark === true) {
        footer.classList.add("home-dark-footer");
      } else {
        footer.classList.remove("home-dark-footer");
      }
    }


  }, [isDark]);

  return <button className={homePage === true ? `lamp` : `darkmodetoggle`} onClick={changeLightMode}></button>;
}
