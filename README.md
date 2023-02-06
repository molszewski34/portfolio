# Portfolio

This portfolio was made with use of Gatsby JS and Headless CMS - Hygraph. Tailwind was used for practice reasons, although some custom CSS styles are also used. In gatsby-node.js file, I used some custom schema injection for different approach to generating path to sub sites made programmatically. Today I would make it different, but that was my way those days.

## Features.
Projects from repositories presented with programmatically made pages.

## Stack
React, Gatsby Js, GraphCms, Tailwind, Headless CMS - Hygraph

## Dependencies:

  "@formspree/react": "^2.4.0", 
  "@fortawesome/fontawesome-svg-core": "^6.2.0",
  "@fortawesome/free-brands-svg-icons": "^6.2.0",
  "@fortawesome/free-regular-svg-icons": "^6.2.0",
  "@fortawesome/free-solid-svg-icons": "^6.2.0",
  "@fortawesome/react-fontawesome": "^0.2.0",
  "babel-plugin-macros": "^3.1.0",
  "gatsby": "^4.21.1",
  "gatsby-plugin-image": "^2.21.0",
  "gatsby-plugin-manifest": "^4.21.0",
  "gatsby-plugin-sharp": "^4.21.0",
  "gatsby-source-filesystem": "^4.21.1",
  "gatsby-source-graphcms": "^2.8.0",
  "gatsby-source-graphql": "^4.21.0",
  "gatsby-transformer-remark": "^5.23.0",
  "gatsby-transformer-sharp": "^4.21.0",
  "prop-types": "^15.8.1",
  "react": "^18.1.0",
  "react-dom": "^18.1.0"


## Requirements
This build uses gh-pages and data from Hygraph. To run it you need to create Hygraph account and configure API on their service with endpoints of same name as designed in project. You also need to change name in GraphQL references.
Gatsby-node.js use .env file to hide API config with environment name: GRAPHCMS_ENDPOINT. For development use .env.development. Production use .env.production. More info about it on URL https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/

