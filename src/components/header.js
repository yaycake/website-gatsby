import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
import MenuToggle from './UI/menuToggle'

const Header = ({ siteTitle }) => (
  <header className = {styles.Header}>
    <div className = {styles.logo}>
      <Link className = {styles.logoLink} to="/">
        <h1>G/Y</h1>
      </Link>
    </div>
    <MenuToggle/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
