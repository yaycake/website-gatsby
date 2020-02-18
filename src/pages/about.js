import React from "react"
import styles from "./about.module.css"
import octo from "../images/octopus.png"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout>
            <div className = {styles.aboutContainer}>
                <div id = "aboutIntro" className={styles.aboutHeader}>
                    <div className = {styles.bolder}> Status</div>
                    <div className = {styles.aboutDescription}>Open for freelance projects, remote positions, and WeChat Mini Program consultations.</div>
                    <div className = {styles.aboutSummary}>
                        <div> <div className={styles.bolder}>Stack</div> HTML, CSS, Javascript, React, Gatsby, Redux, Ruby on Rails, WeChat MINA</div>
                        <div> <div className={styles.bolder}>Tools</div> Sketch, Illustrator, Visual Studio Code</div>
                    </div>
                </div>

                <div className={styles.aboutContent}>
                   <img className = {styles.aboutImage} src={octo} />

                </div>
            </div>
        </Layout>
    )
}

export default About; 