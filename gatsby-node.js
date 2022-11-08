// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require(`path`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`
//   type SitePage implements Node {
//     context: SitePageContext
//   }
//   type SitePageContext {
//     data: dataContext
//   }
//   type dataContext {

//       data: String,
//   }
// `)
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SitePage implements Node {
      context: SitePageContext
    }
    type SitePageContext {
      data: dataContext
    }
    type dataContext {
      features: String,

      description: String
      image: imageContext,
      link: String,
      slug: String,
      technologies: String,
      title: String,
      text: textContext,    
      thumbnailAsset:  thumbnailAssetContext,
      githubLink: String,
    }


    type imageContext {
      url: String
      id: String
    }
    type textContext {
      text: String
    }

    type thumbnailAssetContext {
      url: String
      id: String
    }


  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/projectPost.js`)

  const projectsQuery = await graphql(`
    {
      portfolio {
        projectsConnection {
          edges {
            node {
              features

              description
              image {
                id
                url
              }
              link
              slug
              technologies
              title
              githubLink
              text {
                html
              }
              thumbnailAsset {
                url
              }
            }
          }
        }
      }
    }
  `)
  projectsQuery.data.portfolio.projectsConnection.edges.forEach(project => {
    createPage({
      path: project.node.slug,
      component: projectTemplate,
      context: {
        data: project.node,
        screenshots: project.node.image,
      },
    })
  })
}
