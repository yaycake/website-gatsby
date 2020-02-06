import React from 'react'; 
import { graphql } from 'gatsby'; 
import Layout from '../components/layout';
import ProjectProfile from '../components/projectProfile'; 


export const pageQuery = graphql`
    query($slug: String!) {
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
    // const project = data.projectsJson;
    // const title = project.title; 
    // const description = project.description;
    // const imageData = project.image.childImageSharp.fluid; 
    
    return (
        <Layout>
            You're in projet profile!
            {/* <ProjectProfile
                title = {title}
                description = {description}
                imageData = {imageData}
                html = {html}
            /> */}
        </Layout>
    )
}

export default ProjectTemplate;