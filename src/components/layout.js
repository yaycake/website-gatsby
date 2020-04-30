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
    // console.log("In Toggle Handler")
    // console.log(currToggle)
    // setCurrToggle(!currToggle)

    if (currToggle == true) {
      setCurrToggle(false)
      document.documentElement.style.overflow = 'auto';
      document.body.scroll = "yes";
    } else if (currToggle == false) {
      setCurrToggle(true)
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no";
    }



  console.log("currToggle changed?: ")
  console.log(currToggle)
  }

  if (currToggle) {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
  }

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} 
        isLandingPage = {isLandingPage}
      />

      <MenuToggle clickToggle = {toggleHandler} openedMenu = {currToggle}></MenuToggle>
      { currToggle ? <MobileMenu clickToggle = {toggleHandler}></MobileMenu> : null }
      
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
