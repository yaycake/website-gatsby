import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
import MenuToggle from './UI/menuToggle'

const Header = ({ siteTitle }) => (
  <header className = {styles.Header}>
    <div className = {styles.logo}>
      <Link className = {styles.logoLink} to="/">
        
          <span className = {styles.g}>G</span> 
          <span className={styles.slash}>/</span>
          <span className = {styles.y}>Y</span>  
  
      </Link>
    </div>
    <div className= {styles.headerLinks}>
      <div> About Me </div>
      <div> Resume </div>
    </div>
    {/* <MenuToggle/> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
