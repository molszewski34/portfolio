# Portfolio

This portfolio was made with use of Gatsby JS and Headless CMS - Hygraph. Tailwind was used for practice reasons, although I created some custom CSS styles. In gatsby-node.js file, I made some custom schema injection for different approach to generate path to sub sites made programmatically. Today I would make it different and less complicated, but that was my way those days.

## How it works
This page use node and graphql to pass backend data to homepage and create projects archive. All pages are created by gatsby-node with context passed with function CreatePages. Some nodes in graphql are created with “createTypes” and were made this way to pass additional data to query of pages. Normally this would be no case, but in this build I tried to pass data in only one query and do not create few sets of data.

## Features.
Projects from repositories presented with programmatically made pages.

## Stack
Javascript, Css, Html, React, Gatsby Js, GraphCms, Tailwind, Headless CMS - Hygraph

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

## Installation
* Clone repository * Install dependencies 
* Sing up on https://hygraph.com/ 
* Create new schema and content https://hygraph.com/docs 
* If you want to use current query, you must create project with name "portfolio" and schema with name "project". All schema fields must be named as in the current query, or you're going to get a GraphQL error. 
* If you don't want to copy my schema, just follow Hygraph documentation linked above.
* Project use additional queries created by node with "createTypes". To make project work you need to name the  fields in Hygraph the same, or change a whole function with different names for fields you created or you get graphql error and some fields in context fields in graphiql will be not visible and in result not passed to index.js
* Create file .env.development and copy your variables https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/. In case of deployment to gh-pages name of file must be changed to .env.production.
*  Run command npm start and check if you have any errors from graphql
* Project is by default hosted on localhost:8000

## Requirements
This build uses gh-pages and data from Hygraph. To run it you need to create Hygraph account and configure API on their service with endpoints of same name as designed in project. You also need to change name in GraphQL references.
Gatsby-node.js use .env file to hide API config with environment name: GRAPHCMS_ENDPOINT. For development use .env.development. Production use .env.production. More info about it on URL https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/

## Future development
Open for suggestions.
