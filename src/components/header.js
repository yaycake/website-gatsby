import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
import MenuToggle from './UI/menuToggle'

const Header = ({ siteTitle }) => {

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById(styles.headerTitle).style.fontSize = "32px";
    document.getElementById(styles.headerSubtitle).style.fontSize = "16px";
    document.getElementById(styles.headerSubtitle).style.marginTop = "16px";
  } else {
    document.getElementById(styles.headerTitle).style.fontSize = "100px";
    document.getElementById(styles.headerSubtitle).style.fontSize = "32px";
    document.getElementById(styles.headerSubtitle).style.marginTop = "32px";

  }
}

  return ( 
    <header className = {styles.Header}>
      <div className = {styles.logo}>
        <Link className = {styles.logoLink} to="/">
            <div 
              // id = {"headerTitle"} 
              id={styles.headerTitle}
              className={styles.logoTitle}> Hello, I'm Grace Yang.
              {/* <span> I Design &amp; develop ideas.</span> */}
              <span 
                id = "headerSubtitle" 
                id={styles.headerSubtitle}
                className={styles.subtitle}> I design &amp; develop ideas.</span>
            </div>    
        </Link>
        {/* <span className={styles.subtitle}> I design &amp; develop ideas.</span> */}
      </div>

      {/* <MenuToggle/> */}
    </header>
  )
}
 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
