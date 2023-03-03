import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const GatsbyImageComponent = () => {
  const { thumbnails } = useStaticQuery(pageQuery)
  return (
    <div>
      <GatsbyImage image={thumbnails.nodes.gatsbyImageData} />

   
    </div>
  )


}

export default GatsbyImageComponent

const pageQuery = graphql`
  {
    thumbnails: allGraphCmsAsset {
      nodes {
        url
        gatsbyImageData( placeholder: NONE)
      }
    }
  }
`
