import React, { useState } from "react"
import "../../styles/main.scss"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import "../../styles/themes/dark.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
