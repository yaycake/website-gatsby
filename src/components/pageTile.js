import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './pageTile.module.css'
import Image from 'gatsby-image'

const PageTile= ({ title, slug}) => {
    return (

        <Link className ={styles.pageTile}to = {`/${slug}/`}>
            <div className = {styles.pageTile_title} > 
                {title}
            </div>
            <div className = {styles.pageTile_back}/>
        </Link>
    )
}

export default PageTile;