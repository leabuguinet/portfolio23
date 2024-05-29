import React from "react";
import { useState } from "react";
import "../styles/window.scss";


/* Functions to change background colour day/night  */
function set_daynightColor(target, property, colorVar) {

  if(property === "backgroundColor"){
    target.style.backgroundColor = colorVar;
  } else if (property === "color") {
    target.style.color = colorVar;
  } else if (property === "fill") {
    target.style.fill = colorVar;
  } else if (property === "textShadow") {
    target.style.textShadow = colorVar;
  } 

}



/* Functions to display/none */
function add_display(target) {
  target.classList.add('displayblock');
}

function remove_display(target) {
  target.classList.remove('displayblock');
}

const Window = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    let body = document.querySelector(".homepage-container");
    let wall = document.querySelector(".wall");
    let windowtop = document.querySelector(".window-top");
    let windowmain = document.querySelector(".window-main");
    let lightray = document.querySelector(".lightray");
    let clouds = document.querySelectorAll(".clouds");
    let moon = document.querySelector(".moon");
    let star1 = document.querySelector(".star");
    let star2 = document.querySelector(".star-2");
    let star3 = document.querySelector(".star-3");
    let circle = document.querySelector(".circle");
    let footerlogos = document.querySelectorAll('.footer-logos');
    let footer = document.querySelector(".footer");
    let navLi = document.querySelectorAll('.nav-container li');


    if (isClicked === false) {
      setIsClicked(true);

      add_display(lightray);
      add_display(moon);
      add_display(star1);
      add_display(star2);
      add_display(star3);

      set_daynightColor(windowtop, 'backgroundColor', 'var(--sky-night)');
      set_daynightColor(windowmain, 'backgroundColor', 'var(--sky-night)');
      set_daynightColor(body, 'backgroundColor', 'var(--home-bg-night)');
      set_daynightColor(wall, 'backgroundColor', 'var(--home-bg-night)');
      set_daynightColor(circle, 'backgroundColor', 'var(--darkpurpleburgandy)');
      set_daynightColor(body, 'color', 'var(--home-bg)');
      set_daynightColor(footer, 'backgroundColor', 'var(--home-bg-night)');

      for (let l = 0; l < footerlogos.length; l++) {
        set_daynightColor(footerlogos[l], 'fill', 'var(--home-bg)');
      }

      for (let n = 0; n < navLi.length; n++) {
        navLi[n].addEventListener(
          "mouseenter", function() {
            navLi[n].classList.add("hover");
          }
        )

        navLi[n].addEventListener(
          "mouseleave", function() {
            navLi[n].classList.remove("hover");
          }
        )
      }

      for (let c = 0; c < clouds.length; c++) {
        clouds[c].classList.add("displaynone");
      }

    } else {
      setIsClicked(false);

      remove_display(lightray);
      remove_display(moon);
      remove_display(star1);
      remove_display(star2);
      remove_display(star3);

      for (let l = 0; l < footerlogos.length; l++) {
        set_daynightColor(footerlogos[l], 'fill', 'var(--darkgrey)');
      }

      for (let c = 0; c < clouds.length; c++) {
        clouds[c].classList.remove("displaynone");
      }

      set_daynightColor(windowtop, 'backgroundColor', 'var(--sky)');
      set_daynightColor(windowmain, 'backgroundColor', 'var(--sky)');
      set_daynightColor(body, 'backgroundColor', 'var(--home-bg)');
      set_daynightColor(wall, 'backgroundColor', 'var(--home-bg)');
      set_daynightColor(circle, 'backgroundColor', 'var(--purpleburgandy)');
      set_daynightColor(body, 'color', 'var(--darkgrey)');
      set_daynightColor(footer, 'backgroundColor', 'var(--home-bg)');
  
    }
  };



  return (
    <>
      <div className="window-container">

        <div className="lamp-container">
          <div className="top-lamp"></div>
          <div className="lamp" onMouseDown={handleMouseDown}></div>
          <div className="lightray"></div>

        </div>

        <div className="wall">
          <div className="window">
            <div className="window-top">
            <div className="moon"></div>
              <div className="star"></div>
              <div className="star-2"></div>
              <div className="star-3"></div>
            </div>

            <div className="window-main">
              <div className="clouds cloud2"></div>
              <div className="clouds cloud1"></div>
            </div>

            <div className="innerline-center"></div>
            <div className="innerline-hor1"></div>
            <div className="innerline-hor2"></div>
            <div className="innerline-hor3"></div>
          </div>

          <div className="plant1">
            <div className="anim1">
              <div className="branch branch1"></div>
              <div className="leaf leaf1"></div>
            </div>
            <div className="anim2">
              <div className="branch branch2"></div>
              <div className="leaf leaf2"></div>
            </div>
            <div className="anim3">
              <div className="branch branch3"></div>
              <div className="leaf leaf3"></div>
            </div>

            <div className="anim4">
              <div className="branch branch4"></div>
              <div className="leaf leaf4"></div>
            </div>

            <div className="anim5">
              <div className="branch branch5"></div>
              <div className="leaf leaf5"></div>
            </div>

            <div className="pot1"></div>
          </div>

          <div className="plant2">
            <div className="pot2"></div>
            <div className="anim1">
              <div className="branch branch1"></div>
              <div className="flower flower1"></div>
              <div className="leaf leaf1"></div>
            </div>

            <div className="branch branch2"></div>
            <div className="flower flower2"></div>
            <div className="leaf leaf2"></div>
            <div className="leaf leaf3"></div>
          </div>

          <div className="plant3">
            <div className="pot3"></div>
            <div className="cactus"></div>
            <div className="cactus-arm"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Window;
