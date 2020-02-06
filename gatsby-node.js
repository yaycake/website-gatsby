/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const slug = require(`slug`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const {createPage } = actions
//     const projectTemplate = require.resolve(`./src/templates/project.js`)
//     const result = await graphql(`
//         {
//             allMarkdownRemark(
//                 sort: {order: DESC, fields: [frontmatter___date] }
//                 limit: 1000
//             ) {
//                 edges {
//                     node {
//                         frontmatter {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)
    //Handle Errors
    // if (result.error) {
    //     reporter.panicOnBuild ('There was a problem loading your projects! Running graphql query')
    //     return; 
    // }
    // result.data.allMarkdownRemark.edges.forEach(
    //     ({ node: project }) => {
    //         createPage({
    //             path: project.frontmatter.slug, 
    //             component: projectTemplate, 
    //             context: {}
    //         })
    //     }
    // )
    const path = require(`path`)
    const { createFilePath } = require(`gatsby-source-filesystem`)
    exports.onCreateNode = ({ node, getNode, actions }) => {
        const {createNodeField } = actions
        if (node.internal.type === 'MarkdownRemark') {
            const slug = createFilePath({ node, getNode, basePath: `projects`})

            createNodeField({
                node, 
                name: 'slug', 
                value: slug
            })
        }
    }

    exports.createPages = async ({ graphql, actions }) => {
        const { createPage } = actions
        const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`)
        console.log(JSON.stringify(result, null, 4))

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug, 
                component: path.resolve(`./src/templates/project.js`), 
                context: {
                    slug: node.fields.slug
                }
            })
        })
    }