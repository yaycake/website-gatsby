import React from "react"
import { Link } from "gatsby"
import styles from './mobileMenu.module.css'

const MobileMenu = () => {
    // let mobileMenuClasses;
    // if (view) {
    //   mobileMenuClasses = [styles.mobileMenuWrapper, styles.openMenu]      
    // } else {
    //     mobileMenuClasses = [styles.mobileMenuWrapper, styles.closedMenu]
    // }

    return (
        <div className={styles.mobileMenuWrapper}>
            <div className = {styles.menuContainer}>

            </div>
        </div>
    )
}

export default MobileMenu;