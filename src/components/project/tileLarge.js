import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './tileLarge.module.css'
import Image from 'gatsby-image'

const TileLarge= ({ projectId, title, slug, featuredImage, projectType}) => {
    return (
        
        <div className = {styles.tileLarge}>
            <Link key = {projectId} className ={styles.link}to = {`/${slug}/`}>
                <Image className = {styles.tileLarge_image} fluid = {featuredImage} alt ={title}/>
                <div className = {styles.title} > 
                    {title}
                    <div className = {styles.description}> {projectType}</div>
                </div>
            </Link>
        </div>
      
    )
}

export default TileLarge;