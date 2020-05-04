import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import SocialLinks from './socialLinks'
import NavLinks from './navLinks'
import "./layout.css"

import MenuToggle from './UI/menuToggle';
import MobileMenu from './mobileMenu';

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

  const [currToggle, setCurrToggle] = useState(false)

  const toggleHandler = () => {

    if (currToggle == true) {
      setCurrToggle(false)
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = "yes";
    } else if (currToggle == false) {
      setCurrToggle(true)
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no";
    }
  }

  const scrollTopHandler = () => {
    window.scrollTo(0,0)
  }

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} 
        isLandingPage = {isLandingPage}
      />
      <div className="mobile-arrow">&#8595;</div>
      <MenuToggle clickToggle = {toggleHandler} openedMenu = {currToggle}></MenuToggle>
      { currToggle ? <MobileMenu clickToggle = {toggleHandler}></MobileMenu> : null }
      
        { pageTitle ? <div className = "pageTitle">{pageTitle}</div> : null }

        <main className = "mainContent">
          {children}
        </main>
       
      <SocialLinks></SocialLinks>
   
      <NavLinks></NavLinks>

      <div className="mobile-top" onClick = {scrollTopHandler}>
        &#8593; Top
      </div>
      
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
