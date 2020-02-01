import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './projectProfile.module.css'
import Image from 'gatsby-image'

const ProjectProfile= ({ title, imageData }) => {
    return (

        <div className ={styles.projectPreview}>
            <h2>{title} Page</h2>
            
            <Image fluid = {imageData} alt ={title}/>
        </div>
    )
   
    
}

export default ProjectProfile