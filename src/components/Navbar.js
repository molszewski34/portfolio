import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-3 sm:px-40">
      {/* <div className="logo w-10"><img src= {logo} alt="" /></div> */}
      <Link to="/">
        <div className="bg-violet-900 w-10 h-10 rounded-full flex justify-center items-center">
          <FontAwesomeIcon className="text-white text-xl" icon={faCode} />
          {/* <img src={logo} alt="logo" className="w-40 sm:w-80" /> */}
        </div>
      </Link>

      <a
        className="bg-black text-white px-3 font-semibold rounded-md flex items-center hover:bg-opacity-80"
        href="#footer"
      >
        Contact Me
      </a>
    </nav>
  )
}

export default Navbar
