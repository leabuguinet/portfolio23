import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Header = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )


  return (
  
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/blog"> Blog </Link>
                </li>
            </ul>


        </nav>
    
    </header>
  )
}

export default Header