import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const NavBurgerMenu = ({ rotate }) => {
  const variants = {
    close: { opacity: 0, y: 0, display: "none" },
    open: { opacity: 1, y: "-100%", transition: { duration: 0.5 } },
  };

  const openBurgerMenu = (event) => {
    //event.currentTarget.classList.toggle('open');

    let Main = document.querySelector("body");

    Main.classList.toggle("overflow");
  };

  return (
    <>
      <motion.div
        className="wrapper-side-menu"
        variants={variants}
        animate={rotate ? "open" : "close"}
      >
        <div className="links-list">
          <ul>
            <Link
              onClick={() => {
                openBurgerMenu();
              }}
              activeClassName="active"
              to="/"
            >
              <li>
                <span>&#10047;</span>Accueil
              </li>
            </Link>
            <Link
              onClick={() => {
                openBurgerMenu();
              }}
              activeClassName="active"
              to="/portfolio"
            >
              <li>
                <span>&#10077;</span>Portfolio
              </li>
            </Link>
            <a href="https://codepen.io/leabuguinet">
              <li>
                <span>&#10022;</span>Codepen
              </li>
            </a>
            <Link
              onClick={() => {
                openBurgerMenu();
              }}
              activeClassName="active"
              to="/apropos"
            >
              <li>
                <span>&#10077;</span>À propos
              </li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default NavBurgerMenu;