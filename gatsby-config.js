module.exports = {
  siteMetadata: {
    title: `Grace Yang`,
    description: `UX / UI Design & Fullstack Code`,
    author: `Grace Yang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-transformer-remark`, 
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`, 
            options: {
              maxWidth:500,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography', 
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'project', 
        path: './data'
      }, 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects', 
        path: `${__dirname}/src/projects/`
      }, 
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        path: `${__dirname}/src/images`, 
        name: `images`
      }
    },
     
    
   
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
