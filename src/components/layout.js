import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import {Link} from 'gatsby'
import Header from "./header"
import Footer from './Footer'
import "./layout.css"

const Layout = ({ children, pageTitle }) => {
 
  window.onscroll = () => {
    // console.log("window on scrolll")
    scrollHeader();
    if (document.getElementById("projectIntro")){
      projectScroll();
    }
  };

  const scrollHeader = () => {

    console.log("scrollHeader")

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("headerTitle").style.fontSize = "32px";
      document.getElementById("headerSubtitle").style.fontSize = "16px";
      document.getElementById("headerSubtitle").style.marginTop = "16px";
    } else {
      document.getElementById("headerTitle").style.fontSize = "100px";
      document.getElementById("headerSubtitle").style.fontSize = "32px";
      document.getElementById("headerSubtitle").style.marginTop = "32px";
    }
  }

  const projectScroll = () => {
    // console.log("in projectScroll")
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
        // console.log("Scrolled to 350")
        document.getElementById("projectIntro").style.position = "fixed"
        document.getElementById("projectIntro").style.left = "24%"
        document.getElementById("projectIntro").style.top = "30vh"
    } else {
        // console.log("else")
        document.getElementById("projectIntro").style.left = "24%"
        document.getElementById("projectIntro").style.top = "0px"
        document.getElementById("projectIntro").style.position = "absolute"
    }
}

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
      <Header siteTitle={data.site.siteMetadata.title} />
      
        {pageTitle ? <div className = "pageTitle">{pageTitle}</div> : null}

        <main className = "mainContent">
          {children}
        </main>
       
      <Footer></Footer>

     
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
