import React from "react"
import styles from './menuToggle.module.css'

const ScrollMenu = ({ array }) => {

    return (
        <div className = {styles.scrollMenu}>
            { array.map( object => {
                return (
                    <div id = {object.slug} className = {styles.scrollMenuTitle}>
                        { object.title}
                    </div>
                )
            })}
        </div>
    )
}

export default ScrollMenu 