import React from "react";
import { useState } from "react";
import "../styles/window.scss";

const Window = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isTest, setIsTest] = useState(false);
  let pageBackground = document.querySelector("body");




  


  const handleMouseDown = () => {
    let body = document.querySelector("body");
    let wall = document.querySelector(".wall");
    let windowtop = document.querySelector(".window-top");
    let windowmain = document.querySelector(".window-main");
    let lightray = document.querySelector(".lightray");
    let clouds = document.querySelectorAll(".clouds");


    if (isClicked === true) {
      setIsClicked(false);
      
      wall.classList.add("nightmode-bg");
      body.classList.add("nightmode-bg");
      windowtop.classList.add("nightmode-window");
      windowmain.classList.add("nightmode-window");
      lightray.classList.add("lighton");

      for (let c = 0; c < clouds.length; c++) {
        clouds[c].classList.add("noclouds");
      }

      var canvas = document.getElementById("tutorial");
      canvas.style.opacity ='1';

      if (canvas.getContext && isTest === false) {

    

          var canvas = document.getElementById("tutorial");
          var ctx = canvas.getContext("2d");
          function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
            var rot = (Math.PI / 2) * 3;
            var x = cx;
            var y = cy;
            var step = Math.PI / spikes;
        
            ctx.beginPath();
            ctx.moveTo(cx, cy - outerRadius);
            for (let i = 0; i < spikes; i++) {
              x = cx + Math.cos(rot) * outerRadius;
              y = cy + Math.sin(rot) * outerRadius;
              ctx.lineTo(x, y);
              rot += step;
        
              x = cx + Math.cos(rot) * innerRadius;
              y = cy + Math.sin(rot) * innerRadius;
              ctx.lineTo(x, y);
              rot += step;
            }
            ctx.lineTo(cx, cy - outerRadius);
            ctx.closePath();
            ctx.lineWidth = 1;
            //ctx.strokeStyle = "skyblue";
            //ctx.stroke();
            ctx.fillStyle = "yellow";
            ctx.fill();
          }
          let numStars = 13;

          let canvash = canvas.offsetHeight;
          let canvasw = canvas.offsetWidth;

          for(var i = 0; i < numStars; i++) {
            var x = Math.round(Math.random() * canvash);
            var y = Math.round(Math.random() * canvasw);
            drawStar(x, y, 6, 3, 1);
          }

          setIsTest(true);

      }


    } else {
      setIsClicked(true);
      wall.classList.remove("nightmode-bg");
      body.classList.remove("nightmode-bg");
      windowtop.classList.remove("nightmode-window");
      windowmain.classList.remove("nightmode-window");
      lightray.classList.remove("lighton");

      for (let c = 0; c < clouds.length; c++) {
        clouds[c].classList.remove("noclouds");
      }

      var canvas = document.getElementById("tutorial");
      /* canvas.style.opacity ='0'; */
    }
  };



  



  return (
    <>
      <div className="window-container">
        <div className="top-lamp"></div>
        <div className="lamp" onMouseDown={handleMouseDown}></div>
        <div className="lightray"></div>
        <div className="wall">
          <div className="window">
            <div className="window-top">
              <canvas id="tutorial"></canvas>
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
