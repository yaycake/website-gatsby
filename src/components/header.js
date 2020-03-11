import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styles from './header.module.css'

import MenuToggle from './UI/menuToggle';
import MobileMenu from './mobileMenu';


const Header = ({ isLandingPage, siteTitle }) => {

  const [currToggle, setCurrToggle] = useState(false)


  const toggleHandler = () => {
    console.log("In Toggle Handler")
    console.log(currToggle)
    setCurrToggle(!currToggle)


  console.log("currToggle changed?: ")
  console.log(currToggle)
  }


  function checkDevice () {
    console.log(navigator.userAgent)
    if (navigator.userAgent.match(/Android/i) 
    || navigator.userAgent.match(/webOS/i) 
    || navigator.userAgent.match(/iPhone/i)  
    || navigator.userAgent.match(/iPad/i)  
    || navigator.userAgent.match(/iPod/i) 
    || navigator.userAgent.match(/BlackBerry/i) 
    || navigator.userAgent.match(/Windows Phone/i)) { 
      return false; 
    } else { 
        return true; 
    } 
  }
 
  const scrollHeader = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        console.log("scrollHeader")
        document.getElementById("headerTitle").style.fontSize = "32px";
        document.getElementById("headerSubtitle").style.fontSize = "16px";
        document.getElementById("headerSubtitle").style.marginTop = "16px";
        document.getElementById("headerTitle").style.color = "rgba(15, 7, 49, .75)"
      }
       else {
        document.getElementById("headerTitle").style.fontSize = "80px";
        document.getElementById("headerSubtitle").style.fontSize = "32px";
        document.getElementById("headerSubtitle").style.marginTop = "32px";document.getElementById("headerTitle").style.color = "rgba(15, 7, 49, 1)"
      }
    
  }

  const noScrollHeader = () => {
    document.getElementById("headerTitle").style.fontSize = "32px";
    document.getElementById("headerSubtitle").style.fontSize = "16px";
    document.getElementById("headerSubtitle").style.marginTop = "16px";
    document.getElementById("headerTitle").style.color = "rgba(15, 7, 49, .75)"
  }

  window.onscroll = () => {
    if (checkDevice()) {
      if (document.getElementById("headerTitle")){
        scrollHeader();
      }
    }
  }

  return ( 
    <header className = {styles.Header}>
      <div className = {styles.logo}>
        <Link id ="headerWrap" className = {styles.logoLink} to="/">
            <div 
              id={ isLandingPage ? "headerTitle" : "staticHeaderTitle" }
              className={styles.logoTitle}> Hello, I'm Grace Yang.
              <span 
                id={ isLandingPage ? "headerSubtitle" : "staticHeaderSubtitle"}
                className={styles.subtitle}> I design &amp; develop ideas.</span>
            </div>    
        </Link>
      </div>

      <MenuToggle clickToggle = {toggleHandler} openedMenu = {currToggle}></MenuToggle>
      { currToggle ? <MobileMenu></MobileMenu> : null }
    </header>
  )
}
 
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
