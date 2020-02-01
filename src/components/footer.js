import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './footer.module.css'

const Footer = () => (
    <div className = {styles.Footer}>
        <div className = "emailMe">
            <h4>Shoot me an email at im@thegraceyang.com</h4>
        </div>
        <div className = {styles.socialFooter}>
            <div className = {styles.socialIcon}>Git</div>
            <div className = {styles.socialIcon}>Li</div>
            <div className = {styles.socialIcon}></div>
        </div>
    </div>
)

export default Footer;