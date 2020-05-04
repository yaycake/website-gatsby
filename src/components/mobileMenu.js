import React from "react"
import { Link } from "gatsby"
import styles from './mobileMenu.module.css'
import NavLinks from './navLinks'

const MobileMenu = ( {clickToggle, openedMenu}) => {
    // let mobileMenuClasses;
    // if (view) {
    //   mobileMenuClasses = [styles.mobileMenuWrapper, styles.openMenu]      
    // } else {
    //     mobileMenuClasses = [styles.mobileMenuWrapper, styles.closedMenu]
    // }

    return (
        <div className={styles.mobileMenuWrapper} onClick = {clickToggle}>
            <div className = {styles.menuContainer}>
                <Link to ="/" activeClassName={styles.activeLink}>Work</Link>
                <Link to="/about" activeClassName={styles.activeLink}>About</Link> 
                <Link to ="/resume" activeClassName={styles.activeLink}>Resume </Link>
                <Link to ="/contact" activeClassName={styles.activeLink}>Contact</Link>
            </div>
        </div>
    )
}

export default MobileMenu;