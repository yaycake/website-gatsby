import React from "react"
import { Link } from "gatsby"

import iconGitColor from '../images/icons/icon_github_color.png'
import iconEmailColor from '../images/icons/icon_email_gradientBlack.png'
import iconLinkedColor from '../images/icons/icon_linkedin_color.png'
import styles from './socialLinks.module.css'

const socialLinks = () => {
    return (
        <div className = {styles.socialLinks}>
            <div className ={styles.socialFooter}>
                <a href="http://www.github.com/yaycake">
                    <img className={styles.socialIcon} src={iconGitColor} alt="Visit My Github"/>
                    <span className = {styles.iconLabel}>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/ygrace/">
                    <img className={styles.socialIcon} src={iconLinkedColor} alt="Find Me On LinkedIn"/>
                    <span className = {styles.iconLabel}>LinkedIn</span>
                </a>
                <a href= "mailto: im@thegraceyang.com">
                    <img className={styles.socialIcon} src={iconEmailColor} alt="Email me"/>
                    <span className = {styles.iconLabel}>Email</span>
                </a>
            </div>
        </div>
    )
}

export default socialLinks