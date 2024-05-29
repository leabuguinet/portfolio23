
const React = require("react")
const Layout = require("./src/components/layout")


const headComponents = [
   
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1&display=swap" rel="stylesheet"></link>
  ]
  
  export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents(headComponents)
  }

