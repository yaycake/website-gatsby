import React from "react"
import { Link } from "gatsby"
import styles from './navLinks.module.css'

const navLinks = () => (
    <div className= {styles.links}>
        <Link to="./about">About</Link> 
        <Link to ="./resume">Resume </Link>
        <Link to ="./contact">Contact</Link>
    </div>
)
  
export default navLinks;