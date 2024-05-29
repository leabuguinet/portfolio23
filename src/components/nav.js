import React from "react"
import "../styles/base.scss"
import "../styles/variables.scss"
import "../styles/nav.scss"
import { Link } from "gatsby"


const Nav = () => {
  return (
    <>
        <div class="nav-container">
        <ul>
        <a href="/apropos"><li class=""> <span>&#10148;</span>Portfolio</li></a>
        <a href="/apropos"><li class=""><span>&#10022;</span>Codepen</li></a>
        <Link activeClassName="active" to="/apropos"><li class=""><span>&#10077;</span>À propos</li></Link>
        </ul>
        </div>
    </>
  )
}

export default Nav