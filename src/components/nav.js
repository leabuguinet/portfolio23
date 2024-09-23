import React from "react"
import { Link } from "gatsby"


const Nav = ({ pageUrl }) => {
  

  let isIndexPage = false;
  let homepageLink ;

  if (pageUrl === "/" || pageUrl === ""){
    isIndexPage = true;
  }
  
  if(isIndexPage === false){
    homepageLink = <Link activeClassName="active" to="/"><li><span>&#10047;</span>Accueil</li></Link>
  } else {
    homepageLink = ""
  }


  return (
    <>
        <div className="nav-container">
        <ul>
        {homepageLink}
        <Link activeClassName="active" to="/portfolio" ><li><span>&#10077;</span>Portfolio</li></Link>
        <a href="/apropos"><li><span>&#10022;</span>Codepen</li></a>
        <Link activeClassName="active" to="/apropos"><li><span>&#10077;</span>À propos</li></Link>
        </ul>
        </div>
    </>
  )
}

export default Nav