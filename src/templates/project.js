import React from 'react'; 
import { graphql } from 'gatsby'; 
import Layout from '../components/layout';
import Image from "gatsby-image"
import styles from './project.module.css'

export const pageQuery = graphql`
    query ProjectBySlug($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug} }) {
            html
            frontmatter {
                title
                author
                date
                slug
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                projectType
                contributions
                skills
                engagementPeriod
              }
        }
    }
`

const ProjectTemplate = ({data}) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark
  
    console.log(data)
    return (
        <Layout
            pageTitle = {frontmatter.title}
        >
            <div className={styles.projectContainer}>
            
                <Image className = {styles.featuredImage} fluid = {frontmatter.featuredImage.childImageSharp.fluid}/>
                <div
                    className={styles.projectContent}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                
                <hr className={styles.line}/>
                    <div className = {styles.projectSummary}>
                        <div> <span className={styles.bolder}>Product Type:</span> {frontmatter.projectType}</div>
                        <div> <span className={styles.bolder}>Contribution:</span> {frontmatter.contributions}</div>
                        <div> <span className={styles.bolder}>Skills:</span> {frontmatter.skills}</div>
                        <div> <span className={styles.bolder}>Engagement Period:</span> {frontmatter.engagementPeriod}</div>
                    </div>
                <hr className={styles.line}/>
            </div>
        </Layout>
    )
}

export default ProjectTemplate;