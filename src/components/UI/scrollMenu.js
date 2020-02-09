import React from "react"
import styles from './scrollMenu.module.css'
// import "../layout.css"

const ScrollMenu = ({ array, selectProject, activeProject}) => {

    let scrollTitleStyle = [ styles.scrollMenuTitle]

    let activeScrollTitle = [ styles.scrollMenuTitle, styles.activeProject]

    return (
        <div className = {styles.scrollMenu}>
            { array.map( object => {
                return (
                    <div 
                        onClick = {() => {selectProject(object.id)}} 
                        key={object.id} 
                        id = {object.slug} 
                        className = {
                            object.id === activeProject ? activeScrollTitle.join(' ') : scrollTitleStyle.join(' ')
                        }>
                        { object.title}
                    </div>
                )
            })}
        </div>
    )
}

export default ScrollMenu 