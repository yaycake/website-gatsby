import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import SocialLinks from './socialLinks'
import NavLinks from './navLinks'
import "./layout.css"

const Layout = ({ children, pageTitle, isLandingPage }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} 
        isLandingPage = {isLandingPage}
      />
      
        { pageTitle ? <div className = "pageTitle">{pageTitle}</div> : null }

        <main className = "mainContent">
          {children}
        </main>
       
      <SocialLinks></SocialLinks>
      <NavLinks></NavLinks>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
