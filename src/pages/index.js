import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
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
      </div>
      <div className="text-center flex flex-col gap-3 bg-orange-200  p-3 rounded-md sm:w-6/12">
        <h1 className="font-bold text-2xl  text-gray-700 sm:text-3xl sm:flex sm:flex-wrap ">
          Hi, I'm Mariusz and this is my Portfolio site made with GatsbyJS and
          GraphCMs
        </h1>
        <p className="text-base text-gray-800">
          I am a Frontend developer with knowledge of Javascript, React,
          GatsbyJS, Graphql and headless CMS's. I also use CSS frameworks such
          as Tailwind and Bulma.
        </p>
        <span className="text-gray-600 underline">
          <a
            href="https://github.com/molszewski34/portfolio"
            aria-label="Link to my portfolio Github"
          >
            If you are interested in how this page was made, you can check my
            repository<b className="text-blue-600"> here.</b>
          </a>
        </span>
      </div>
    </section>

    <section className="mb-3 mt-10 flex flex-col justify-center items-center px-10 w-full  ">
      <header className="mb-10 flex items-center justify-center">
        <h2 className="font-bold text-3xl sm:text-5xl">My Projects</h2>
      </header>
      <ul className="">
        {edges.map((page, index) => {
          const context = page.node.context.data
          const typescript = page.node.context.data.typescript
          console.log(typescript)
          return (
            <li
              key={index}
              className="p-3 rounded mb-3 bg-black bg-opacity-80 flex flex-col justify-center items-center sm:max-w-2xl"
            >
              <a
                href={context.thumbnailAsset.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Link to ${page.node.context.data.title} image`}
              >
                <div className="image">
                  <img
                    src={context.thumbnailAsset.url}
                    alt={`Thumbnail of ${page.node.context.data.title} project`}
                    className="image__img"
                  />

                  <div className="image__overlay">
                    <div className="image__title">
                      <h4 className="image__text"> Click to Full view</h4>
                    </div>
                  </div>
                </div>
              </a>
              <div className="mt-3 flex flex-col  my-3 sm:p-3">
                <Link
                  className="text-3xl font-bold text-center text-[#C94040] mb-3 hover:text-opacity-80"
                  to={page.node.path}
                  key={page.node.path}
                >
                  {page.node.context.data.title}
                </Link>

                <p className="text-white">{context.description}</p>
                <h3 className="mt-3 text-left font-bold text-red-500">
                  Features:
                </h3>
                <p className="text-gray-200">{context.features}</p>
                <h3 className="text-left font-bold text-red-500">Stack:</h3>
                <p className="text-gray-200">{context.stack}</p>
              </div>
              <div className="flex flex-col items-center w-full sm:flex-row sm:justify-between sm:px-6">
                <Link
                  className="  mt-3"
                  to={page.node.path}
                  key={page.node.path}
                >
                  <span className="bg-red-500 text-white p-3 font-semibold rounded-md hover:bg-opacity-80 ">
                    Show Post
                  </span>
                </Link>

                <a
                  className=" mt-3  "
                  href={page.node.context.data.webpageLink}
                  key={page.node.context.data.webpageLink}
                  aria-label={`Link to ${page.node.context.data.title} web page`}
                >
                  <span className="bg-[#22c55e] text-white p-3 font-semibold flex items-center gap-1 rounded-md hover:bg-opacity-80">
                    Live Website
                  </span>
                </a>
                <a
                  className=" mt-3  "
                  href={page.node.context.data.githubLink}
                  key={page.node.context.data.githubLink}
                  aria-label={`Link to ${page.node.context.data.title} github`}
                >
                  <span className="bg-gray-500 text-white p-3 font-semibold flex items-center gap-1 rounded-md hover:bg-opacity-80">
                    Code
                    <FontAwesomeIcon
                      className=" text-white text-2xl"
                      icon={faGithub}
                    />
                  </span>
                </a>

                {typescript !== null && (
                  <a
                    className=" mt-3  "
                    href={typescript}
                    key={typescript}
                    aria-label={`Link to ${typescript} github`}
                  >
                    <span className="bg-[#3178C6] text-white p-3 font-semibold flex items-center gap-1 rounded-md hover:bg-opacity-80">
                      Typescript
                    </span>
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  </Layout>
)

export const Head = () => (
  <>
    <title>Portfolio</title>
    <meta
      name="description"
      content="Hi, I'm Mariusz and this is my Portfolio site made with GatsbyJS and
          GraphCMs"
    />
  </>
)
export const projectPages = graphql`
  query {
    allSitePage(
      filter: {
        component: {
          eq: "G:/Frontend Portfolio/portfolio/src/templates/projectPost.js"
        }
      }
      sort: { fields: context___data___date, order: DESC }
    ) {
      edges {
        node {
          path
          component
          context {
            data {
              features
              description
              link
              slug
              stack
              text {
                text
              }
              githubLink
              thumbnailAsset {
                id
                url
              }
              title
              date
              webpageLink
              typescript
            }
          }
        }
      }
    }
  }
`

export default IndexPage
