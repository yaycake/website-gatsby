import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = {styles.landingActions}> 
      <Link to="/projects" className = {styles.landingLink}>
        Design &amp; Code
      </Link>
    </div>

  </Layout>
)

export default IndexPage
