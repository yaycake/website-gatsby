import React from 'react'; 
import { graphql } from 'gatsby'; 
import Layout from '../components/layout';
import ProjectProfile from '../components/projectProfile'; 

export const query = graphql`
    query ($slug: String!) {
        projectsJson(slug: { eq: $slug}) {
        title
        description
        image {
            childImageSharp {
                fluid {
                    src
                }
            }
        }
        }
    }
`

const ProjectTemplate = ({data}) => {
    const project = data.projectsJson;
    const title = project.title; 
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid; 
    return (
        <Layout>
            <ProjectProfile
                title = {title}
                description = {description}
                imageData = {imageData}
            />
        </Layout>
    )
}

export default ProjectTemplate;