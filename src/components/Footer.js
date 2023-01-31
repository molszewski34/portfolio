import React from "react"
import ContactForm from "./ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby"

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black flex flex-col sm:flex-row justify-center items-center p-10 gap-3 text-center "
    >
      <div className="sm:px-10">
        <div className="flex justify-center gap-3 mb-5">
          <a href="https://www.facebook.com/mariusz.olszewski.10297" aria-label="Link to facebook">
            <FontAwesomeIcon
              className=" text-blue-500 text-4xl"
              icon={faFacebook}
            />
          </a>
          <a href="https://github.com/molszewski34" aria-label="Link to github">
            <FontAwesomeIcon className=" text-white text-4xl" icon={faGithub} />
          </a>
        </div>
        <h1 className="text-white font-bold text-xl sm:text-2xl ">
          Want to chat with me?
        </h1>
        <p className="text-white text-sm">
          Message me with contact form or social media
        </p>
        <p className="text-gray-200  text-base flex justify-center align-middle">
          <FontAwesomeIcon
            className=" text-white text-2xl w-4 mr-2"
            icon={faEnvelope}
          />
          m.olszewski341.gmail.com
        </p>
      </div>

      <ContactForm />
    </footer>
  )
}

export default Footer
