import React from "react"
import { Link } from "gatsby"

import Github from '../assets/svg/github.inline.svg';
import Linkedin from '../assets/svg/linkedin.inline.svg';
import Mail from "../assets/svg/mail.inline.svg"
import Telegram from '../assets/svg/telegram.inline.svg';



const Footer = ({ pageUrl }) => {

  let footerColor;
  let footerPadding;
  
  if(pageUrl == "/portfolio/"){
    footerColor = "#A36361";
    footerPadding = "4rem 0"
  } else if (pageUrl == "/apropos/") {
    footerColor = "#819688";
    footerPadding = "4rem 0"
  } else {
    footerColor = "#E8B298";
    footerPadding = "0rem 0"
  }

  return (
    <footer className="footer" style={{'background': footerColor, 'padding': footerPadding}}>

      <div className='footer-logos'>
        <a aria-label="Github" href='https://github.com/leabuguinet'><Github /></a>
        <a aria-label="Linkedin" href='https://www.linkedin.com/in/l%C3%A9a-buguinet-050642135/'><Linkedin /></a>
        <a aria-label="Mail" href='mailto:lea.buguinet@gmail.com'><Mail /></a>
        <a aria-label="Telegram" href='https://t.me/lleab'><Telegram /></a>
      </div>

      
      <Link activeClassName="active" className="mention-link" to="/mentions">Mentions</Link>

    </footer>
  )
}

export default Footer 