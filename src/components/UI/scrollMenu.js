import React from "react"
import styles from './menuToggle.module.css'

const ScrollMenu = ({ array, selectProject}) => {

    return (
        <div className = {styles.scrollMenu}>
            { array.map( object => {
                return (
                    <div onClick = {() => {selectProject(object.slug)}} key={object.slug} id = {object.slug} className = {styles.scrollMenuTitle}>
                        { object.title}
                    </div>
                )
            })}
        </div>
    )
}

export default ScrollMenu 