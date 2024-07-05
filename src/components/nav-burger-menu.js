import React from "react"
import "../styles/base.scss"
import "../styles/variables.scss"
import "../styles/navburger.scss"
import { Link } from "gatsby"
import { motion } from "framer-motion";

const NavBurgerMenu = ({ rotate }) => {
  
  const openBurgerMenu = event => {

    
    //event.currentTarget.classList.toggle('open');


    let NavBarContainer = document.querySelector('.wrapper2');
    let Main = document.querySelector('body');
    if(NavBarContainer){
      NavBarContainer.classList.toggle('openMenu');
      Main.classList.toggle('overflow');
    }
  }
  const variants = {
    stop: { opacity: 0, y: 0  },
    rotate: { opacity: 1,  y: '-100%', transition: { duration: 0.5 } }
  };


  return (
    <>



<motion.div className="wrapper2"          variants={variants}
        animate={rotate ? 'rotate' : 'stop'}
        
        >

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Feedback</a></li>
      </ul> 
    
  </motion.div> 

    </>
  )
}

export default NavBurgerMenu