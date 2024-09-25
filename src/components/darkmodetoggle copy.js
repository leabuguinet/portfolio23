import React from "react";
import { useState, useEffect } from "react";


function getDefaultTheme() {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : "light";
}

/* Functions to display/none */
function add_display(target) {
  target.classList.add("displayblock");
}

function remove_display(target) {
  target.classList.remove("displayblock");
}

export default function DarkMode() {
  const [isDark, setIsDark] = useState();

  useEffect(() => {
    // storing input name
    localStorage.getItem("theme", isDark);
  }, [isDark]);

  /* const [isDark, setIsDark] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("theme");
    const initialValue = saved;
    return initialValue || "";
  }); */

  useEffect(() => {
    // storing input name
    localStorage.setItem("theme", isDark);
  }, [isDark]);
  

  useEffect(() => {
    let lightray = document.querySelector(".lightray");
    let clouds = document.querySelectorAll(".clouds");
    let moon = document.querySelector(".moon");
    let star1 = document.querySelector(".star");
    let star2 = document.querySelector(".star-2");
    let star3 = document.querySelector(".star-3");

    if (isDark === "dark") {
      document.body.classList.add("dark");

      /* HOMEPAGE */
      //Sky
      add_display(lightray);
      add_display(moon);
      add_display(star1);
      add_display(star2);
      add_display(star3);
      for (let c = 0; c < clouds.length; c++) {
        clouds[c].classList.add("displaynone");
      }
    } else {
      document.body.classList.remove("dark");

      /* HOMEPAGE */
      //Sky
      remove_display(lightray);
      remove_display(moon);
      remove_display(star1);
      remove_display(star2);
      remove_display(star3);
      for (let c = 0; c < clouds.length; c++) {
        clouds[c].classList.remove("displaynone");
      }

    }
    //localStorage.setItem("theme", isDark);




  }, [isDark]);

  return (
    <button
      className="lamp"
      onClick={() => setIsDark(isDark === "dark" ? "light" : "dark")}
    ></button>
  );
}
