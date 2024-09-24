import React, { useState } from 'react';
import NavBurgerMenu from "./nav-burger-menu"


const NavBurgerButton = ({ pageUrl }) => {
  
  const openBurgerMenu = event => {

    
    //event.currentTarget.classList.toggle('open');


    let NavBarContainer = document.querySelector('.wrapper-side-menu');
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
    
<div className="wrapper-menu-btn">

      <input type="checkbox" id="active" onClick={() => {

          setShowMenu(!showMenu);
          openBurgerMenu();

      }}/>

      <label  className="menu-btn" htmlFor="active"><span></span></label>
      <label  className="close" htmlFor="active"></label>

</div>

    </>
  )
}

export default NavBurgerButton