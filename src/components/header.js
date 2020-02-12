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
      <div className ={styles.aboutLink}> <Link to="./about">About Me</Link> </div>
      <div className={styles.resumeLink}> <Link to ="./resume">Resume </Link></div>
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
