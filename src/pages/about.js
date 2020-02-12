import React from "react"
import styles from "./about.module.css"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import styles from './contact.module.css'

const About = () => {
    return (
        <Layout pageTitle="The Grace Yang">
            <div className = {styles.aboutContainer}>
                <div>
                    I'm A Grace
                </div>
            </div>
        </Layout>
    )
}

export default About; 