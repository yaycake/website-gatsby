import React from "react"
import { Link } from "gatsby"
import styles from './navLinks.module.css'

const navLinks = () => (
    <div className= {styles.links}>
        <Link to ="/" activeClassName={styles.activeLink}>Work</Link>
        <Link to="/about" activeClassName={styles.activeLink}>About</Link> 
        <Link to ="/resume" activeClassName={styles.activeLink}>Resume </Link>
        <Link to ="/contact" activeClassName={styles.activeLink}>Contact</Link>
    </div>
)
  
export default navLinks;