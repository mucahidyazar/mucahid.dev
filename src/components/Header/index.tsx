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
      placeholderImage: allFile(
        filter: { sourceInstanceName: { eq: "icons" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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
      <div className="brandIcon typescriptIcon">
        <Img fluid={iconData.placeholderImage.nodes[0].childImageSharp.fluid} />
      </div>
      <div className="brandIcon cssIcon">
        <Img fluid={iconData.placeholderImage.nodes[1].childImageSharp.fluid} />
      </div>
      <div className="brandIcon htmlIcon">
        <Img fluid={iconData.placeholderImage.nodes[2].childImageSharp.fluid} />
      </div>
      <div className="brandIcon jsIcon">
        <Img fluid={iconData.placeholderImage.nodes[3].childImageSharp.fluid} />
      </div>
      <div className="brandIcon nextjsIcon">
        <Img fluid={iconData.placeholderImage.nodes[4].childImageSharp.fluid} />
      </div>
      <div className="brandIcon reactIcon">
        <Img fluid={iconData.placeholderImage.nodes[5].childImageSharp.fluid} />
      </div>
      <div className="brandIcon graphqlIcon">
        <Img fluid={iconData.placeholderImage.nodes[6].childImageSharp.fluid} />
      </div>
      <div className="brandIcon visualStudioCodeIcon">
        <Img fluid={iconData.placeholderImage.nodes[7].childImageSharp.fluid} />
      </div>
      <div className="brandIcon reduxIcon">
        <Img fluid={iconData.placeholderImage.nodes[8].childImageSharp.fluid} />
      </div>
      <div className="brandIcon nodejsIcon">
        <Img fluid={iconData.placeholderImage.nodes[9].childImageSharp.fluid} />
      </div>
      <div className="brandIcon apolloIcon">
        <Img
          fluid={iconData.placeholderImage.nodes[10].childImageSharp.fluid}
        />
      </div>
    </header>
  )
}

export default Header
