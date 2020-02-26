import React from 'react'; 
import { graphql, Link } from 'gatsby'; 
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

const ProjectTemplate = ({data, pageContext}) => {

    const {next, prev} = pageContext
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark

    return (
        <Layout
            isLandingPage = {false}
        >
            <div className={styles.projectContainer}>

                <div id = "projectIntro" className={styles.projectHeader}>
                    <div id = "thisTitle"  className = {styles.projectTitle}>{frontmatter.title} </div>
                    <div id = "thisDescription" className = {styles.projectDescription}>{frontmatter.description}</div>
                    <div className = {styles.projectSummary}>
                    
                        <div> <div className={styles.bolder}>Skills</div> {frontmatter.skills} </div>
                        <div> <div className={styles.bolder}>Tools</div> {frontmatter.tools} </div>
                        <div> <div className={styles.bolder}>Engagement Period</div> {frontmatter.engagementPeriod} </div>
                    </div>
                </div>
         
                <Image className = {styles.featuredImage} fluid = {frontmatter.featuredImage.childImageSharp.fluid}/>
                <div
                    className={styles.projectContent}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                   
                <div className = {styles.projectNav}>
                    {next && <Link className={styles.navLinks} to={next.frontmatter.slug}>&#8592; {next.frontmatter.title}</Link>}
                    {prev && <Link className={styles.navLinks} to={prev.frontmatter.slug}>{prev.frontmatter.title} &#8594;</Link>}
                </div>

            </div>
        </Layout>
    )
}

export default ProjectTemplate;