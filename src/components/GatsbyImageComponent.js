import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const GatsbyImageComponent = () => {
  const { thumbnails } = useStaticQuery(pageQuery)
  return thumbnails.nodes.map((thumbnail, index) => (
    <div>
      <GatsbyImage image={thumbnail.gatsbyImageData} key={index} />

      <h3>Ja pierdole</h3>
    </div>
  ))
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
