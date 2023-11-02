import React from "react";
import "../styles/window.scss";

const Window = () => {
  return (
    <>
        <div className="window-container">
        <div className="top-lamp"></div>
      <div className="lamp"></div>          
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
