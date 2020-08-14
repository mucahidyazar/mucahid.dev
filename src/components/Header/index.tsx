import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import {
  FcIdea,
  FcNoIdea,
  FcHome,
  FcAbout,
  FcReading,
  FcFolder,
  FcBusiness,
  FcLink,
  FcSettings,
  FcCustomerSupport,
} from "react-icons/fc"
import { Social } from "../../../contents/data/social"
import NetworkSvg from "../../../contents/svg/random/network.svg"
import { technologies } from "../../../contents/data/technologies"

// Home - About - Blogs/Articles - Portfolios/Projects - Alintilar - Linkler - Workstation - Contact
//Olabilir => Gallery - SikSorulanSorular

interface HeaderProps {
  siteTitle: string
  darkMode: boolean
  setDarkMode: any
}

type profilePhotoType = {
  file: { childImageSharp: GatsbyImageProps }
}

const Header = ({ siteTitle, darkMode, setDarkMode }: HeaderProps) => {
  const iconData: profilePhotoType = useStaticQuery(graphql`
    query {
      file(name: { eq: "profile" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    const darkModeValue = localStorage.getItem("theme")
    if (darkModeValue === "dark") {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  const activePage = location.pathname.split("/")

  return (
    <header className="header">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            className="headerMode"
            onClick={() => {
              setDarkMode(prevState => !prevState)
              console.log(darkMode)
              toggleTheme(darkMode ? "light" : "dark")
            }}
          >
            {darkMode ? (
              <FcIdea className="headerModeIcon" />
            ) : (
              <FcNoIdea className="headerModeIcon" />
            )}
          </div>
        )}
      </ThemeToggler>
      <div className="headerMenu">
        <div
          className={
            "headerMenuItem headerMenuItem1" +
            " " +
            (activePage[1] === "" ? "mobileActivePage" : "")
          }
        >
          <Link to="/">
            <FcHome style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem2" +
            " " +
            (activePage[1] === "about" ? "mobileActivePage" : "")
          }
        >
          <Link to="/about">
            <FcAbout style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem3" +
            " " +
            (activePage[1] === "articles" ? "mobileActivePage" : "")
          }
        >
          <Link to="/articles">
            <FcReading style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem4" +
            " " +
            (activePage[1] === "portfolio" ? "mobileActivePage" : "")
          }
        >
          <Link to="/portfolio">
            <FcFolder style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem5" +
            " " +
            (activePage[1] === "equipments" ? "mobileActivePage" : "")
          }
        >
          <Link to="/equipments">
            <FcBusiness style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem6" +
            " " +
            (activePage[1] === "links" ? "mobileActivePage" : "")
          }
        >
          <Link to="/links">
            <FcLink style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem7" +
            " " +
            (activePage[1] === "settings" ? "mobileActivePage" : "")
          }
        >
          <Link to="/settings">
            <FcSettings style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem8" +
            " " +
            (activePage[1] === "contact" ? "mobileActivePage" : "")
          }
        >
          <Link to="/contact">
            <FcCustomerSupport style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div
          className={
            "headerMenuItem headerMenuItem9" +
            " " +
            (activePage[1] === "about" ? "mobileActivePage" : "")
          }
        >
          <Link to="/about">
            <Img fluid={iconData.file.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem10">
          <input
            type="checkbox"
            id="headerMobileMenuInput"
            name="headerMobileMenuInput"
          />
          <label
            className="headerMobileMenuIcons"
            htmlFor="headerMobileMenuInput"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="headerMobileMenu">
            <div
              className={
                "headerMenuItem headerMenuItem6" +
                " " +
                (activePage[1] === "links" ? "mobileActivePage" : "")
              }
            >
              <Link to="/links">
                <FcLink style={{ width: `100%`, height: `100%` }} />
              </Link>
            </div>
            <div
              className={
                "headerMenuItem headerMenuItem2" +
                " " +
                (activePage[1] === "about" ? "mobileActivePage" : "")
              }
            >
              <Link to="/about">
                <FcAbout style={{ width: `100%`, height: `100%` }} />
              </Link>
            </div>
            <div
              className={
                "headerMenuItem headerMenuItem7" +
                " " +
                (activePage[1] === "settings" ? "mobileActivePage" : "")
              }
            >
              <Link to="/settings">
                <FcSettings style={{ width: `100%`, height: `100%` }} />
              </Link>
            </div>
            <div
              className={
                "headerMenuItem headerMenuItem8" +
                " " +
                (activePage[1] === "contact" ? "mobileActivePage" : "")
              }
            >
              <Link to="/contact">
                <FcCustomerSupport style={{ width: `100%`, height: `100%` }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="networkSvg">
        <div className="networkSvgIconContainer">
          <NetworkSvg className="networkSvgIcon" />
        </div>
        {Social.map((soc, index) => {
          const Icon = soc.icon
          return (
            <a
              href={soc.link}
              target="_blank"
              key={index}
              className="networkSvgIconContainer"
            >
              <Icon className="networkSvgIcon" />
            </a>
          )
        })}
      </div>
      {technologies.map((tech, index) => {
        const Image = tech.image

        return (
          <div key={index} className={`brandIcon ${spesificIcon(index)}`}>
            <Image style={{ width: "100%", height: "100%" }} />
          </div>
        )
      })}
    </header>
  )
}

const spesificIcon = value => {
  switch (value) {
    case 0:
      return "apolloIcon"
    case 1:
      return "cssIcon"
    case 2:
      return "gatsbyjsIcon"
    case 3:
      return "graphqlIcon"
    case 4:
      return "htmlIcon"
    case 5:
      return "jsIcon"
    case 6:
      return "nextjsIcon"
    case 7:
      return "nodejsIcon"
    case 8:
      return "reactIcon"
    case 9:
      return "reduxIcon"
    case 10:
      return "sassIcon"
    case 11:
      return "typescriptIcon"
    case 12:
      return "visualStudioCodeIcon"
    case 13:
      return "visualStudioCodeIcon"
    default:
      return 0
  }
}

export default Header
