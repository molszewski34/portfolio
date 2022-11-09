import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false
// import Projects from "./projects"
// function layout() {
//   return (
//     <>
//       <Navbar />
//       {/* <h1>Hello from Layout</h1> */}
//       {/* <Projects/> */}
//     </>
//   )
// }

// export default layout


export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}