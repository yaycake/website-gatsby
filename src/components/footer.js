import React from "react"
import { Link } from "gatsby"
import iconGit from '../images/icons/icon_github_black.png'
import iconEmail from '../images/icons/icon_email_black.png'
import iconLinked from '../images/icons/icon_linkedin_black.png'
import styles from './footer.module.css'

const Footer = () => (
        <div className = {styles.Footer}>
           
            <div className = {styles.socialFooter}>
                <img className={styles.socialIcon} src={iconGit} alt="Visit My Github"/>
                <img className={styles.socialIcon} src={iconLinked} alt="Find Me On LinkedIn"/>
                <img className={styles.socialIcon} src={iconEmail} alt="Email me"/>
            </div>
    
            <div className= {styles.links}>
                <Link to="./about">About</Link> 
                <Link to ="./resume">Resume </Link>
                <Link to ="./resume">Contact</Link>
          </div>
          
        </div>
)

export default Footer;