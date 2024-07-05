import React from "react"
import Header from "./header"
import Footer from "./footer"
import { motion } from "framer-motion"
//import "../styles/style.scss"

const Layout = ({ children, pageUrl }) => {

  let isIndexPage = false;
  let motionMain;


  if (pageUrl === "/"){
    isIndexPage = true;
  }


  if(isIndexPage === true){
    motionMain = <motion.main initial= {{ opacity: 0, y: '-100%'}}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 1, y: '-100%' }}
    transition={{
      type: "spring",
      mass: 0.35,
      stiffness: 75,
    }}>{children}
    </motion.main>
  } else {
    motionMain = <motion.main initial= {{ opacity: 1, y: '100%'}}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 1, y: '100%' }}
    transition={{
      type: "spring",
      mass: 0.35,
      stiffness: 75,
    }}>{children}
    </motion.main>
  }

  return (
    <>
      {/* <Header /> */}

      {motionMain}

      <Footer />
    </>
  )
}

export default Layout
