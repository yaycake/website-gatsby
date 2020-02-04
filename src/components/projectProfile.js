import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './projectProfile.module.css'
import Image from 'gatsby-image'

const ProjectProfile= ({ title, slug, featuredImage, html}) => {
    return (

        <div data-title={slug} className ={styles.projectPreview}>
            <h2>{title} Page</h2>
            
            <Image fluid = {featuredImage} alt ={title}/>
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            
        </div>
    )
   
    
}

export default ProjectProfile