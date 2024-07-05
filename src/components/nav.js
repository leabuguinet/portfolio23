import React from "react"
import "../styles/base.scss"
import "../styles/variables.scss"
import "../styles/nav.scss"
import { Link } from "gatsby"


const Nav = ({ pageUrl }) => {
  

  console.log(pageUrl);
  let isIndexPage = false;
  let homepageLink ;

  if (pageUrl === "/" || pageUrl === ""){
    isIndexPage = true;
  }
  console.log(isIndexPage);
  //console.log(isIndexPage);
  if(isIndexPage === false){
    homepageLink = <Link activeClassName="active" to="/"><li class=""><span>&#10047;</span>Accueil</li></Link>
  } else {
    homepageLink = ""
  }

  return (
    <>
        <div class="nav-container">
        <ul>
        {homepageLink}
        <Link activeClassName="active" to="/portfolio"><li class=""><span>&#10077;</span>Portfolio</li></Link>
        <a href="/apropos"><li class=""><span>&#10022;</span>Codepen</li></a>
        <Link activeClassName="active" to="/apropos"><li class=""><span>&#10077;</span>À propos</li></Link>
        </ul>
        </div>
    </>
  )
}

export default Nav