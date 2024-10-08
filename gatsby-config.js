/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Léa Buguinet",
    description: "Développeuse web Front-End",
    siteUrl: `https://leabugui.net`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404`, `/mentions` ]
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/svg/favicon.inline.svg"
      }
    }
    

  ],
}