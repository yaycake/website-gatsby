import React from "react"
import { Link } from "gatsby"
import {graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import ProjectPreview from '../components/projectPreview'


const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
    {
        allProjectsJson {
          edges {
            node{
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

    return (
        <Layout>
            <h1>Projects</h1>

            { projects.map(({ node: project }) => {
                const title = project.title; 
                const url = project.url; 
                const slug = project.slug; 
              
                const imageData = project.image.childImageSharp.fluid;

                return (
                    <ProjectPreview
                      title = {title}
                      slug = {slug}
                      imageData = {imageData}
                    />
                    
                )
            })}

            
        </Layout>
    )
}


export default ProjectsPage