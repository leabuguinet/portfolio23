import React from "react";
import { useState } from "react";

const Portrait = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };


  let hoverEyes;
  let hoverSmile;
  let hoverHeadtop;
  let hoverHeadright;

  //if character looks up
  if (window.innerWidth > 1024){
    hoverEyes = {
      top: isHover ? '-5px' : '0px',
    }
    hoverSmile = {
      top: isHover ? '70px' : null,
      transition: "all ease 1s",
    }
    hoverHeadright = {
      background: isHover ? 'none' : null,
    }
  //if character looks right
  } else {
    hoverEyes = {
      left: isHover ? '10px' : '0px',
    }
    hoverSmile = {
      left: isHover ? '40px' : null,
      transition: "all ease 1s",
    }
    hoverHeadtop = {
      background: isHover ? 'none' : null,
    }
  }


  const hoverHead = {
    background: isHover ? 'none' : null,
  }



  return (
    <>
      <div className="portrait-container">

        <div className="name"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
        >
                  
          <h1>Léa Buguinet</h1>
          <h2>Développeuse web</h2>
        </div>
        <div className="circle">
        <div className="headright" style={hoverHeadright}></div>
        <div className="headtop" style={hoverHeadtop}></div>
          <div className="head" style={hoverHead}>
            
            
            <div className="eyes" style={hoverEyes}>
              <div className="left-eye"></div>
              <div className="right-eye"></div>
            </div>
            <div className="smile" style={hoverSmile}></div>
          </div>
          <div className="ear"></div>
          <div className="backhead-hair" ></div>
       
          <div className="neck"></div>
          <div className="body"></div>
        </div>
      </div>
    </>
  );
};

export default Portrait;

