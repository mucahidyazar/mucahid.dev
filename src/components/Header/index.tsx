import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Switch from "react-switch"
import {
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

const Header = ({ siteTitle, darkMode, setDarkMode }: HeaderProps) => {
  const iconData = useStaticQuery(graphql`
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

  return (
    <header className="header">
      <div className="switchToggle">
        <Switch
          onChange={() => setDarkMode(prevState => !prevState)}
          checked={darkMode}
        />
      </div>
      <div className="headerMenu">
        <div className="headerMenuItem headerMenuItem1">
          <Link to="/">
            <FcHome style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem2">
          <Link to="/about">
            <FcAbout style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem3">
          <Link to="/articles">
            <FcReading style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem4">
          <Link to="/portfolio">
            <FcFolder style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem5">
          <Link to="/equipments">
            <FcBusiness style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem6">
          <Link to="/links">
            <FcLink style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem7">
          <Link to="/settings">
            <FcSettings style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem8">
          <Link to="/contact">
            <FcCustomerSupport style={{ width: `100%`, height: `100%` }} />
          </Link>
        </div>
        <div className="headerMenuItem headerMenuItem9">
          <Img fluid={iconData.file.childImageSharp.fluid} />
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
          <div className={`brandIcon ${spesificIcon(index)}`}>
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
