import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
// import MenuToggle from './UI/menuToggle'

const Header = ({ siteTitle }) => {

  return ( 
    <header className = {styles.Header}>
      <div className = {styles.logo}>
        <Link className = {styles.logoLink} to="/">
            <div 
              id="headerTitle"
              className={styles.logoTitle}> Hello, I'm Grace Yang.
              <span 
                id="headerSubtitle"
                className={styles.subtitle}> I design &amp; develop ideas.</span>
            </div>    
        </Link>

      </div>
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
