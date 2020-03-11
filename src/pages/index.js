import React, { useState } from "react"
import {graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './index.module.css'
import TileLarge from '../components/project/tileLarge'

const IndexPage = () => {
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
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges;
 

  const [currProject, setCurrProject] = useState({
    id: projects[0].node.id, 
    title: projects[0].node.frontmatter.title,
    slug: projects[0].node.frontmatter.slug,
    featuredImageData: projects[0].node.frontmatter.featuredImage.childImageSharp.fluid, 
    html: projects[0].node.html, 
    description: projects[0].node.frontmatter.description, 
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

  return (
    <Layout 
      isLandingPage = { true }
    >
      <SEO title="Home" />
      <div className = {styles.projectContainer}>
       
        <div className = {styles.projectStrip}>
       
          { projects.map(({node: project}) => {

            // console.log("this project: ")
            // console.log(project)

            const id = project.id;
            const title = project.frontmatter.title; 
            const slug = project.frontmatter.slug; 
            const featuredImageData = project.frontmatter.featuredImage.childImageSharp.fluid;
            const description = project.frontmatter.description

            return (
              
                <TileLarge
                  key = {id}
                  projectId = {id}
                  title = {title}
                  slug = {slug}
                  description = {description}
                  featuredImage = {featuredImageData}
                /> 
              )
            })
          }

        </div>
          

             
            
          </div>

    </Layout>
  )
}

export default IndexPage
