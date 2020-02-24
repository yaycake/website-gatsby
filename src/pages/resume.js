import React from "react"
import styles from "./about.module.css"
import resume from '../resume_9_27_19.pdf'

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import styles from './contact.module.css'

const Resume = () => {
    
    return (
        // <Layout>
            <div className = {styles.iframeWrapper}>
                <iframe allow="fullscreen" id={styles.resumePdf} allowtransparency="true" src={resume}  width="100%" height = "100%" style={{position: "absolute", bottom: "0", top: "0", left: "0px", right: "0px", marginBottom: "0!important"}}>
                </iframe>
            </div>
        // </Layout>
    )
}

export default Resume; 