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
            </div>
        </Layout>
    )
}

export default ProjectTemplate;