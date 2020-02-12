import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'
import "./layout.css"

const Layout = ({ children, pageTitle }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      
        {pageTitle ? <div className = "pageTitle">{pageTitle}</div> : null}

        <main className = "mainContent">
          {children}
        </main>
       
      <Footer></Footer>
      
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
