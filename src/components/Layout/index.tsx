import React, { useState, ReactComponentElement } from "react"
import "../../styles/main.scss"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import "../../styles/themes/dark.scss"

type siteType = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout = ({ children }: HTMLElement) => {
  const data: siteType = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [darkMode, setDarkMode] = useState(true)

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
