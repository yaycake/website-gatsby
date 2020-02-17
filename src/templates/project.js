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
                description
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tools
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
        <Layout>
            <div className={styles.projectContainer}>

            <div id = "projectIntro" className={styles.projectHeader}>
                <div id = "thisTitle"  className = {styles.projectTitle}>{frontmatter.title} </div>
                <div id = "thisDescription" className = {styles.projectDescription}>{frontmatter.description}</div>
                <div className = {styles.projectSummary}>
                <div> 
                    <div className={styles.bolder}>Skills</div> {frontmatter.skills}</div>
                    <div> <div className={styles.bolder}>Tools</div> {frontmatter.tools}</div>
                    <div> <div className={styles.bolder}>Engagement Period</div> {frontmatter.engagementPeriod}</div>
                </div>
            </div>
         
                <Image className = {styles.featuredImage} fluid = {frontmatter.featuredImage.childImageSharp.fluid}/>
                <div
                    className={styles.projectContent}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    )
}

export default ProjectTemplate;