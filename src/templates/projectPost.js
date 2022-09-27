import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const projectPost = ({ pageContext: { data } }) => (
  // const projectPost = data =>

  <Layout>
    <div className="font-bold text-sm text-gray-600 text-justify mb-3 ">
      <Link className="p-3" to="/">
        <FontAwesomeIcon className="" icon={faArrowLeft} /> BACK
      </Link>
    </div>
    <section className="flex flex-col justify-center items-center ">
      <div className="px-3 flex flex-col justify-center items-center max-width-60">
        <h1 className="text-4xl font-bold text-center mb-3 mt-3">{data.title}</h1>
        <p className="font-bold text__max-width  mb-3">{data.description}</p>
        <img className="img__max-width" src={data.thumbnailAsset.url} alt="" />
      </div>
      {/* <p className="px-3 mt-3"> {data.text.html} </p> */}
      <div
        className="markdown flex flex-col justify-center items-center"
        dangerouslySetInnerHTML={{ __html: data.text.html }}
      ></div>
      {/* <div className="page-template__grid">
        {screenshots.map(photo => (
          <div
            className="page-template__grid__img-container"
            key={photo.id}
            // className="w-full h-80 relative overflow-hidden rounded-lg transition-shadow duration-35 ease hover:shadow-lg"
          >
            <img
              className="page-template__grid__img"
              src={photo.url}
              // alt={photo.name}

              // className="h-full w-full object-cover"
            />
          </div>
  
        ))}
      </div> */}
    </section>
    {/* <p>{data.text.text}</p> */}
  </Layout>
)

export default projectPost

// {
//   portfolio {
//     projectsConnection {
//       edges {
//         node {
//           features
//           code {
//             raw
//           }
//           description
//           image {
//             url
//           }

//           link
//           slug
//           technologies
//           title
//           thumbnailAsset {
//             url
//           }
//         }
//       }
//     }
//   }
// }
