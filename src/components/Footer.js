import React from "react"
import ContactForm from "./ContactForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import { Link } from "gatsby"

function Footer() {
  return (
    <footer className="bg-black flex flex-col sm:flex-row justify-center items-center p-10 gap-3 text-center ">
      <div className="sm:px-10">
        <div className="flex justify-center gap-3 mb-5">
          <Link to='https://www.facebook.com/mariusz.olszewski.10297'>
      <FontAwesomeIcon className=" text-blue-500 text-4xl" icon={faFacebook} /> 
          </Link>
     <Link to="https://github.com/molszewski34">
      <FontAwesomeIcon className=" text-white text-4xl" icon={faGithub} /> 
      </Link>
      </div>
        <h3 className="text-white font-bold text-xl sm:text-2xl ">
          Want to chat with me?
        </h3>
        <p className="text-white text-sm">
   
          Message me with contact form or social media
        </p>
        <p className="text-gray-300  text-base flex justify-center align-middle">
        <FontAwesomeIcon className=" text-white text-2xl w-4 mr-2" icon={faEnvelope} />  
     m.olszewski341.gmail.com</p>
        {/* <button className="bg-red-500 text-white  px-3 py-2 font-semibold rounded-md hover:bg-opacity-80">
          Contact
        </button> */}
      </div>

      <ContactForm />
      {/* <form action="https://formspree.io/f/{form_id}" method="post">
  <label className="text-white" for="Name">Name</label>
  <input name="Name" id="name" type="text"/>
  <label className="text-white" for="email">Email</label>
  <input name="Email" id="email" type="email"/>
  <label className="text-white" for="textfield">Email</label>
  <input name="TextField" id="textField" type="email"/>
  <button className="text-white" type="submit">Submit</button>
</form> */}
    </footer>
  )
}

export default Footer
