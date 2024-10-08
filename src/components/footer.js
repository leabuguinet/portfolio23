import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Github from '../assets/svg/github.inline.svg';
import Linkedin from '../assets/svg/linkedin.inline.svg';
import Mail from "../assets/svg/mail.inline.svg"
import Telegram from '../assets/svg/telegram.inline.svg';
import DarkMode from "./darkmodetoggle";



const Footer = ({ footerColor, footerPadding, homePage }) => {


 
  return (
    <footer className="footer" style={{'background': footerColor, 'padding': footerPadding}}>

  

      <div className='footer-logos'>
        
        <a aria-label="Github" href='https://github.com/leabuguinet'><Github /></a>
        <a aria-label="Linkedin" href='https://www.linkedin.com/in/l%C3%A9a-buguinet-050642135/'><Linkedin /></a>
        <a aria-label="Mail" href='mailto:lea.buguinet@gmail.com'><Mail /></a>
        <a aria-label="Telegram" href='https://t.me/lleab'><Telegram /></a>
        

      </div>

      <div className="footer-misc">
      <DarkMode homePage={homePage}/>
      <Link activeClassName="active" className="mention-link" to="/mentions">Mentions</Link>
      </div>
    </footer>
  )
}

export default Footer 

