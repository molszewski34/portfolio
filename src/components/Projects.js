import React from "react"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        portfolio {
          projects {
            id
            title
            code {
              raw
            }
            text {
              markdown
            }
            description
            slug
            link
            features
            technologies
            image {
              url
            }
            thumbnailAsset {
              url
            }
          }
        }
      }
    `}
    render={({ portfolio: { projects } }) => (
      <div>
        {projects.map(project => (
          
          <div className="">
            <img src={project.thumbnailAsset.url} alt="" />
            <div className="">
              <p>{project.title}</p>
              <p>{project.description}</p>
              <p>{project.features}</p>
              <p>{project.technologies}</p>
              <p>{project.link}</p>
              <div>
                {console.log(project)}
                {/* {console.log(project.image)} */}
                {/* {project.image.url.map(img, index)=>{
          return(
            <img src={img}/>
          )
     
        }} */}
                {/* {project.image.map((projectImgs)=>{
  return(
    <img src={projectImgs} alt=""/>
  )
})} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)

export default Projects

// {
//     portfolio {
//       projectsConnection {
//         edges {
//           node {
//             features
//             code {
//               raw
//             }
//             description
//             image {
//               url
//             }
//             link
//             slug
//             technologies
//             title
//             thumbnailAsset {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
