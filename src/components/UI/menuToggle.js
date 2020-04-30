import React from "react"
import styles from './menuToggle.module.css'

const MenuToggle = ({clickToggle, openedMenu}) => {


    // document.getElementsByClassName(styles.toggleWrap).click.toggleClass('open')

    return (
        <div id = {styles.toggleIcon} onClick = {clickToggle} className = {styles.toggleWrap}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    )
}

export default MenuToggle