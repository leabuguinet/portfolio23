import React from "react";
import "../styles/portrait.scss";

const Portrait = () => {
  return (
    <>

      <div className="portrait-container">

      <div className="name">
          <h1>Léa Buguinet</h1>
          <h2>Développeuse web</h2>
        </div>

        <div className="circle">
          <div className="head">
            
            <div className="eyes">
              <div className="left-eye"></div>
              <div className="right-eye"></div>
            </div>

            <div className="smile"></div>
          </div>
          <div className="ear"></div>
          <div className="backhead-hair"></div>
       
          <div className="neck"></div>

          <div className="body"></div>
        </div>

      </div>
    </>
  );
};

export default Portrait;
