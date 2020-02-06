import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './tileLarge.module.css'
import Image from 'gatsby-image'

const TileLarge= ({ id, title, slug, featuredImage, projectType}) => {
    return (
        <Link to = {`/${slug}/`}>
            <div className ={styles.tileLarge}>
                <div className = {styles.tileLarge_title}> {title}</div>
                    <Image className = {styles.tileLarge_image} fluid = {featuredImage} alt ={title}/>
                <div className={styles.tileLarge_type}> 
                    {projectType}
                </div>
                
            </div>
        </Link>
    )
   
    
}

export default TileLarge;