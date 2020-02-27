import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import {Link} from 'gatsby'
import Header from "./header"
import Footer from './navLinks'
import SocialLinks from './socialLinks'
import NavLinks from './navLinks'
import "./layout.css"

const Layout = ({ children, pageTitle, isLandingPage }) => {

  // const projectScroll = () => {
  //   // console.log("in projectScroll")
  //   if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
    
  //       document.getElementById("projectIntro").style.position = "fixed"
  //       document.getElementById("projectIntro").style.left = "24%"
  //       document.getElementById("projectIntro").style.top = "30vh"
  //   } else {
       
  //       document.getElementById("projectIntro").style.left = "24%"
  //       document.getElementById("projectIntro").style.top = "0px"
  //       document.getElementById("projectIntro").style.position = "absolute"
  //   }
  // }

  // if (document.getElementById("projectIntro")){
  //   projectScroll();
  // } else {
  //   console.log("no Project Intro")
  // }


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
