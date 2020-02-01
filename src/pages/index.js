import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={styles.thinH1}>Hello, I'm Grace.</h1>
    <h1>I help create, design &amp; code digital experiences. </h1>
    <div className = {styles.landingActions}> 
      <Link to="/projects" className = {styles.landingLink}>
        <h4 className = {styles.previewAction}>Preview My Projects</h4> 
      </Link>
      <h4 className = {styles.thinH4}>or</h4> 
      <Link to="/contact" className = {styles.landingLink}>
        <h4>Contact Me</h4>
      </Link>
      
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
