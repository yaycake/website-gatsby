import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
import {graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
// import Image from "gatsby-image"
// import SEO from "../components/seo"
// import ProjectPreview from '../components/projectPreview'
import ProjectProfile from '../components/projectProfile'
import ScrollMenu from '../components/UI/scrollMenu'
import styles from './projects.module.css'
import "../components/layout.css"
import TileLarge from '../components/project/tileLarge'

const ProjectsPage = () => {

    // useEffect( () => {
    //   setCurrProject({
    //     title: 
    //   })
    // }, [])

    const data = useStaticQuery(graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              html
              headings {
                depth
                value
              }
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
        }
      }
    `)

    const projects = data.allMarkdownRemark.edges;

    console.log("PROJECTS: ")

    console.log(projects)

    console.log(projects[0].node)

    const [currProject, setCurrProject] = useState({
      id: projects[0].node.id, 
      title: projects[0].node.frontmatter.title,
      slug: projects[0].node.frontmatter.slug,
      featuredImageData: projects[0].node.frontmatter.featuredImage.childImageSharp.fluid, 
      html: projects[0].node.html, 
      projectType: projects[0].node.frontmatter.projectType, 
      contributions: projects[0].node.frontmatter.contributions, 
      skills: projects[0].node.frontmatter.skills, 
      engagementPeriod: projects[0].node.frontmatter.engagementPeriod
    })

    // Create Title Array for ScrollMenu Component
    let titleArray = [];

    projects.map(({ node: project}) => {
      titleArray.push({ 
        id: project.id, 
        title: project.frontmatter.title, 
        slug: project.frontmatter.slug
      })
    })

    // findProjectHandler
    const findProjectHandler = (id) => {
      return projects.find( (project) => ( project.node.id === id ))
    }

    // Create Event listener function for ScrollMenu Component
    const selectProjectHandler = (objId) => {
      console.log('in selectProjectHandler')
      console.log(objId)
  
      const selectedProject = findProjectHandler(objId)
        
      console.log("found?")
      console.log(selectedProject)

      setCurrProject({
        id: selectedProject.node.id,
        title: selectedProject.node.frontmatter.title, 
        slug: selectedProject.node.frontmatter.slug, 
        featuredImageData: selectedProject.node.frontmatter.featuredImage.childImageSharp.fluid, 
        html: selectedProject.node.html, 
        projectType: selectedProject.node.frontmatter.projectType, 
        contributions: selectedProject.node.frontmatter.contributions, 
        skills: selectedProject.node.frontmatter.skills, 
        engagementPeriod: selectedProject.node.frontmatter.engagementPeriod
      })
    }

    return (
        <Layout
          pageTitle="Design &amp; Code"
        >
            {/* <h1 className={styles.projectHeader}>DESIGN &amp; CODE</h1> */}
           
            <div className = {styles.viewOptions}>
              <div className = {styles.viewToggle}/>
              <div className = {styles.viewToggle}/>
              <div className = {styles.viewToggle}/>
              <div className = {styles.viewToggle}/>
              <div className = {styles.viewToggle}/>
           </div>
            
            <div className = {styles.projectContainer}>
              {/* <ScrollMenu 
                array = {titleArray} 
                selectProject = {selectProjectHandler}
                activeProject = {currProject.id}
              /> 

              <ProjectProfile
                title = {currProject.title}
                slug = {currProject.slug}
                featuredImage = {currProject.featuredImageData}
                html = {currProject.html}

                projectType = {currProject.projectType}
                contributions = {currProject.contributions}
                skills = {currProject.skills}
                engagementPeriod = {currProject.engagementPeriod}

              />
            </div> */}
                      
            { projects.map(({ node: project }) => {
                const id = project.id;
                const title = project.frontmatter.title; 
                const slug = project.frontmatter.slug; 
                const featuredImageData = project.frontmatter.featuredImage.childImageSharp.fluid;
                const projectType = project.frontmatter.projectType
                return (
                    <TileLarge
                      key = {id}
                      title = {title}
                      slug = {slug}
                      projectType = {projectType}
                      featuredImage = {featuredImageData}
                    /> 
                )
            })}
          </div>

        </Layout>
    )
}


export default ProjectsPage