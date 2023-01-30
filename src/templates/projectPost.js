import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const projectPost = ({ pageContext: { data } }) => (
  <Layout>
    <title>{data.title}</title>
    <meta name="description" content={data.description} />
    <main className="flex flex-col justify-center items-center">
      <div className="font-bold text-lg text-gray-600 text-justify mb-3 ">
        <Link className="p-3 " to="/">
          <FontAwesomeIcon className="" icon={faArrowLeft} /> BACK
        </Link>
      </div>
      <section className="flex flex-col justify-center  mb-10 max-width-60">
        <div className="px-3 flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold text-center mb-3 mt-3">
            {data.title}
          </h1>
          <p className="font-bold text__max-width  mb-3">{data.description}</p>
          <img
            className="img__max-width mb-3"
            src={data.thumbnailAsset.url}
            alt="Screenshot of project"
          />
        </div>

        <div
          className="markdown flex flex-col justify-center lg:text-white"
          dangerouslySetInnerHTML={{ __html: data.text.html }}
        ></div>
        <div className="mt-5 pl-4 padding-left mb-4 button">
          <Link
            className="bg-gray-500 text-white p-3 font-semibold flex gap-1 rounded-md mb-4 hover:bg-opacity-80 "
            to={data.githubLink}
            key={data.githubLink}
          >
            Code
            <FontAwesomeIcon className="text-white text-2xl" icon={faGithub} />
          </Link>
        </div>
      </section>
    </main>
  </Layout>
)

export default projectPost
