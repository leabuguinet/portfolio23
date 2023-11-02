import React from "react"
import "../styles/base.scss"
import "../styles/variables.scss"
import "../styles/nav.scss"


const Nav = () => {
  return (
    <>
        <div class="nav-container">
        <ul>
        <li class=""> <span>&#10148;</span>Portfolio</li>
        <li class=""><span>&#10022;</span> Codepen</li>
        <li class="test"><span>&#10077;</span> About</li>
        </ul>
        </div>
    </>
  )
}

export default Nav