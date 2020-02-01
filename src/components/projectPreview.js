import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './projectPreview.module.css'
import Image from 'gatsby-image'

const ProjectPreview= ({ title, slug, imageData }) => {
    return (
        <Link to = {`/${slug}`} >
            <div className ={styles.projectPreview}>
                <h2>{title}</h2>
                <p>{slug}</p>
                <Image fluid = {imageData} alt ={title}/>
            </div>
        </Link>
    )
   
    
}

export default ProjectPreview