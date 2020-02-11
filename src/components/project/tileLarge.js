import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './tileLarge.module.css'
import Image from 'gatsby-image'

const TileLarge= ({ projectId, title, slug, featuredImage, projectType}) => {
    return (
        <Link key = {projectId} className ={styles.tileLarge}to = {`/${slug}/`}>
           
            <Image className = {styles.tileLarge_image} fluid = {featuredImage} alt ={title}/>
            <div className = {styles.tileLarge_title}> 
                {/* {title}
                <div className={styles.tileLarge_type}> 
                    {projectType}
                </div> */}
            </div>
            
        </Link>
    )
}

export default TileLarge;