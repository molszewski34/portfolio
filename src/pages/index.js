import * as React from "react"
import { Link, graphql } from "gatsby"
import "../styles/global.css"
import logo from "../images/gatsby-icon.png"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
// import ContactForm from "../components/ContactForm"
import GatsbyImageComponent from "../components/GatsbyImageComponent"

import { faGithub } from "@fortawesome/free-brands-svg-icons"

const IndexPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <section className="mb-3 mt-10 flex flex-col justify-center items-center gap-10 px-10  sm:flex-row">
      <div className="bg-violet-900 w-52 h-52 rounded-full flex justify-center items-center">
        <FontAwesomeIcon className="text-white text-9xl" icon={faCode} />
        {/* <img src={logo} alt="logo" className="w-40 sm:w-80" /> */}
      </div>
      <div className="text-center flex flex-col gap-3 bg-orange-200  p-3 rounded-md sm:w-6/12">
        <h3 className="font-bold text-2xl  text-gray-700 sm:text-3xl sm:flex sm:flex-wrap ">
          Hi, I'm Mariusz and this my Portfolio site made with GatsbyJS and
          GraphCMs
        </h3>
        <p className="text-base text-gray-500">
          I am a Frontend developer with knowleadge about <b>Javascript</b>,{" "}
          <b>React</b> , <b>GatsbyJS</b>, <b>Graphql </b>and{" "}
          <b>headless CMS's</b>. I also use CSS frameworks as <b>Tailwind</b>{" "}
          and <b>Bulma.</b>
        </p>
        <span className="text-gray-600 underline">
          <a href="">
            If your are intrested in how this page was made and my work with
            Rich Text you can click <b className="text-blue-600">here</b>{" "}
          </a>
          .
        </span>
        <button></button>
      </div>
      {/* <button className="bg-red-500 text-white px-6 py-3 font-semibold rounded-md">Contact</button> */}
    </section>

    <section className="mb-3 mt-10 flex flex-col justify-center items-center px-10 w-full  ">
      <header className="mb-10 flex items-center justify-center">
        <h2 className="font-bold text-3xl sm:text-5xl">My Projects</h2>
      </header>
      {edges.map((page, index) => {
        const context = page.node.context.data
        return (
          <article
            key={index}
            className="p-3 rounded mb-3 bg-black bg-opacity-80 flex flex-col justify-center items-center sm:max-w-2xl"
          >
            {/* <div className="relative"> */}
            <Link to={context.thumbnailAsset.url}>
              <div className="image">
                {/* <div className="article-img-overlay">
                <span className="article-img-overlay_text">
                  Click to Full view
                </span>
              </div> */}

                <img
                  src={context.thumbnailAsset.url}
                  alt=""
                  // className="article-img-hover"
                  className="image__img"
                />

                {/* <GatsbyImageComponent key={index} /> */}

                <div className="image__overlay">
                  <div className="image__title">
                    <h4 className="image__text"> Click to Full view</h4>
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-3 flex flex-col  my-3 sm:p-3">
              <Link
                className="text-2xl font-bold text-center text-gray-300 mb-3 hover:text-opacity-80"
                to={page.node.path}
                key={page.node.path}
              >
                {page.node.context.data.title}
              </Link>

              <p className="text-white">{context.description}</p>
              {/* <hr className="border-red-500" /> */}
              <p className="mt-3 text-left font-bold text-white">Features:</p>
              <p className="text-gray-300">{context.features}</p>
              <p className="text-left font-bold text-white">Tools used:</p>
              <p className="text-gray-300">{context.technologies}</p>
            </div>
            <div className="flex flex-col w-full sm:flex-row sm:justify-between sm:px-6">
              <Link className="  mt-3" to={page.node.path} key={page.node.path}>
                <button className="bg-red-500 text-white p-3 font-semibold rounded-md hover:bg-opacity-80 ">
                  Show Post
                </button>
              </Link>

              <Link
                className=" mt-3  "
                to={page.node.context.data.githubLink}
                key={page.node.context.data.githubLink}
              >
                <button className="bg-gray-500 text-white p-3 font-semibold flex items-center gap-1 rounded-md hover:bg-opacity-80">
                  Code
                  <FontAwesomeIcon
                    className=" text-white text-2xl"
                    icon={faGithub}
                  />
                </button>
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  </Layout>
)

export const projectPages = graphql`
  query {
    allSitePage(
      filter: {
        component: {
          eq: "G:/Frontend Portfolio/portfolio/src/templates/projectPost.js"
        }
      }
    ) {
      edges {
        node {
          path
          component
          context {
            data {
              features
      
              description
              image {
                id
                url
              }
              link
              slug
              technologies
              text {
                text
              }
              githubLink
              thumbnailAsset {
                id
                url
              }
              title
            }
          }
        }
      }
    }
  }
`

export default IndexPage
