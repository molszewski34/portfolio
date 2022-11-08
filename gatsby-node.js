const path = require(`path`)

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
      stack: String,
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

            link
            slug
            stack
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
   
      },
    })
  })
}
