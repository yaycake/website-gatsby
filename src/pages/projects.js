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
        allProjectsJson {
          edges {
            node{
              id
              title
              url
              slug
              image {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)



    const projects = data.allProjectsJson.edges;

    console.log("PROJECTS: ")

    console.log(projects)

    console.log(typeof projects)

    console.log(projects[0].node)

    const [currProject, setCurrProject] = useState({
      title: projects[0].node.title,
      slug: projects[0].node.slug,
      imageData: projects[0].node.image.childImageSharp.fluid
    })

    //Create Title Array for ScrollMenu Component
    let titleArray = [];

    projects.map(({ node: project}) => {
      titleArray.push({ 
        title: project.title, 
        slug: project.slug
      })
    })

    // findProjectHandler
    const findProjectHandler = (selSlug) => {
      
      return projects.find( (project) => ( project.node.slug === selSlug )
      )
    }

    // Create Event listener function for ScrollMenu Component

    const selectProjectHandler = (currSlug) => {
      console.log('in selectProjectHandler')
      console.log(currSlug)
  
      const selectedProject = findProjectHandler(currSlug)
        
      console.log("found?")
      console.log(selectedProject)

      setCurrProject({
        title: selectedProject.node.title, 
        slug: selectedProject.node.slug, 
        imageData: selectedProject.node.image.childImageSharp.fluid
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
              imageData = {currProject.imageData}
            />
            
            {/* { projects.map(({ node: project }) => {
                const title = project.title; 
                const url = project.url; 
                const slug = project.slug; 
                const imageData = project.image.childImageSharp.fluid;
                return (
                    <ProjectProfile
                      title = {currProject.title}
                      slug = {currProject.slug}
                      imageData = {imageData}
                    /> 
                )
            })} */}

            
        </Layout>
    )
}


export default ProjectsPage