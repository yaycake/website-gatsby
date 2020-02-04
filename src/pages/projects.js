import React, { useState } from "react"
import { Link } from "gatsby"
import {graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import ProjectPreview from '../components/projectPreview'
import ProjectProfile from '../components/projectProfile'
import ScrollMenu from '../components/UI/scrollMenu'

const ProjectsPage = () => {

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
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
      html: projects[0].node.html
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
      
      return projects.find( (project) => ( project.node.id === id )
      )
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
        html: selectedProject.node.html
      })
    }
    

    return (
        <Layout>
            <h1>Projects</h1>
            <ScrollMenu 
              array = {titleArray} 
              selectProject = {selectProjectHandler}
            /> 

            <ProjectProfile
              title = {currProject.title}
              slug = {currProject.slug}
              featuredImage = {currProject.featuredImageData}
              html = {currProject.html}
            />
          {/*             
            { projects.map(({ node: project }) => {
                const title = project.frontmatter.title; 
                const slug = project.frontmatter.slug; 
                const featuredImageData = project.frontmatter.featuredImage.childImageSharp.fluid;
                return (
                 
                    <ProjectProfile
                      key = {currProject.id}
                      title = {currProject.title}
                      slug = {currProject.slug}
                      featuredImage = {currProject.featuredImageData}
                      html = {currProject.html}
                    /> 
                )
            })} */}

        </Layout>
    )
}


export default ProjectsPage