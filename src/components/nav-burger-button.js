import React, { useState } from 'react';
import "../styles/base.scss"
import "../styles/variables.scss"
import "../styles/navburger.scss"
import { Link } from "gatsby"
import NavBurgerMenu from "./nav-burger-menu"
import { motion } from "framer-motion";

const NavBurgerButton = ({ pageUrl }) => {
  
  const openBurgerMenu = event => {

    
    //event.currentTarget.classList.toggle('open');


    let NavBarContainer = document.querySelector('.wrapper2');
    let Main = document.querySelector('body');
    if(NavBarContainer){
      NavBarContainer.classList.toggle('openMenu');
      Main.classList.toggle('overflow');
    }
  }

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
<NavBurgerMenu rotate={showMenu} />
    
<div className="coucocccu">

      <input type="checkbox" id="active" /* onClick={openBurgerMenu} */ onClick={() => {

          setShowMenu(!showMenu)

      }}/>

      <label for="active" className="menu-btn"><span></span></label>
      <label for="active" className="close"></label>

</div>


      {/* <div id="burger-nav" onClick={openBurgerMenu}>
        <div id="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}

      {/* <div className="test"> */}
        
     {/*<input type="checkbox" id="active" onClick={openBurgerMenu} />
      <label for="active" className="menu-btn"><span></span></label>
      <label for="active" className="close"></label> */}
      {/* </div> */}

    {/* <div className="wrapper">
      <ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Gallery</a></li>
<li><a href="#">Feedback</a></li>
</ul>
</div> */}



        {/* <div class="nav-container-burger">
        <ul>
        <Link activeClassName="active" to="/"><li class=""><span>&#10047;</span>Accueil</li></Link>
        <a href="/apropos"><li class=""> <span>&#10148;</span>Portfolio</li></a>
        <a href="/apropos"><li class=""><span>&#10022;</span>Codepen</li></a>
        <Link activeClassName="active" to="/apropos"><li class=""><span>&#10077;</span>À propos</li></Link>
        </ul>
        </div> */}
    </>
  )
}

export default NavBurgerButton