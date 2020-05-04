// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './projectProfile.module.css'
import Image from 'gatsby-image'

const ProjectProfile= ({ title, slug, featuredImage, html, projectType, contributions, skills, engagementPeriod}) => {
    
    window.scrollTo(0, 500);

    return (

        <div data-title={slug} className ={styles.projectContent}>
            {/* <h2>{title} Page</h2> */}
            
            <Image className = {styles.featuredImage} fluid = {featuredImage} alt ={title}/>
            <div
                className="projectContent"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <hr/>
                <div className={styles.projectFooter}>
                    <div> <span className={styles.bolder}>Product Type:</span> {projectType}</div>
                    <div> <span className={styles.bolder}>Contribution:</span> {contributions}</div>
                    <div> <span className={styles.bolder}>Skills:</span> {skills}</div>
                    <div> <span className={styles.bolder}>Engagement Period:</span> {engagementPeriod}</div>
                </div>
            <hr/>
        </div>
    )
   
    
}

export default ProjectProfile