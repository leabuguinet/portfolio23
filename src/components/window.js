import React from "react";
import { useState } from "react";
import "../styles/window.scss";

const Window = () => {

  const [isClicked, setIsClicked] = useState(false);

  let pageBackground = document.querySelector("body");


  const handleMouseDown = () => {
    let body = document.querySelector('body')
    let wall = document.querySelector('.wall');
    let windowtop = document.querySelector('.window-top');
    let windowmain = document.querySelector('.window-main');
    let lightray = document

    if (isClicked === true){
      setIsClicked(false);
      wall.classList.add('nightmode-bg');
      body.classList.add('nightmode-bg');
      windowtop.classList.add('nightmode-window');
      windowmain.classList.add('nightmode-window');

    } else {
      setIsClicked(true);
      wall.classList.remove('nightmode-bg');
      body.classList.remove('nightmode-bg');
      windowtop.classList.remove('nightmode-window');
      windowmain.classList.remove('nightmode-window');
    }

  };




  return (
    <>
        <div className="window-container">
        <div className="top-lamp"></div>
      <div className="lamp"
                      onMouseDown={handleMouseDown}
      ></div>   
      <div className="lightray"></div>       
      <div className="wall">

        <div className="window">
          <div className="window-top"></div>

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
