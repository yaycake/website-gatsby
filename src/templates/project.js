import React from 'react'; 
import { graphql, useStaticQuery, Link } from 'gatsby'; 
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

    console.log("PageContext")

    console.log(pageContext)

    const {next, prev} = pageContext
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark
  
    console.log(data)

//   if (document.getElementById("projectIntro")){
//       console.log("In If Case Project")
//     if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
//         console.log("Scrolled to 350")
//         document.getElementById("projectIntro").style.position = "fixed"
//         document.getElementById("projectIntro").style.left = "24%"
//         document.getElementById("projectIntro").style.top = "30vh"
//     } else {
//         console.log("else")
//         document.getElementById("projectIntro").style.left = "24%"
//         document.getElementById("projectIntro").style.top = "0px"
//         document.getElementById("projectIntro").style.position = "absolute"
//     }
//   }


  const projectScroll = () => {

    console.log("In project Scroll")
   
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
       console.log("project body scrolltop")
        document.getElementById("projectIntro").style.position = "fixed"
        document.getElementById("projectIntro").style.left = "24%"
        document.getElementById("projectIntro").style.top = "30vh"
    } else {
        document.getElementById("projectIntro").style.left = "24%"
        document.getElementById("projectIntro").style.top = "0px"
        document.getElementById("projectIntro").style.position = "absolute"
    }
  }


    return (
        <Layout
            isLandingPage = {false}
        >
            <div className={styles.projectContainer}>

                <div id = "projectIntro" onLoad = {()=>{projectScroll()}} className={styles.projectHeader}>
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