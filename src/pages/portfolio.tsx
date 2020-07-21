// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import { portfolioData } from "../../contents/data/portfolio"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

type imageType = {
  project0001: {
    childImageSharp: GatsbyImageProps
  }
  project0002: {
    childImageSharp: GatsbyImageProps
  }
  project0003: {
    childImageSharp: GatsbyImageProps
  }
  project0004: {
    childImageSharp: GatsbyImageProps
  }
}

const SecondPage = (props: PageProps) => {
  const data: imageType = useStaticQuery(graphql`
    {
      project0001: file(name: { eq: "project0001" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project0002: file(name: { eq: "project0002" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project0003: file(name: { eq: "project0003" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project0004: file(name: { eq: "project0004" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)

  const technologyClassHandler = value => {
    switch (value) {
      case "css3":
        return "#1572B6"
      case "gastbyjs":
        return "#744C9E"
      case "graphql":
        return "#D54599"
      case "html5":
        return "#E34E26"
      case "javascript":
        return "#FBD601"
      case "nextjs":
        return "#000000"
      case "nodejs":
        return "#8CC84B"
      case "react":
        return "#00D8FF"
      case "sass":
        return "#CF649A"
      case "typescript":
        return "#1976D2"
      default:
        return "#000000"
    }
  }

  return (
    <Layout>
      <SEO title="Portfolio" />
      <section className="portfolioSection">
        {portfolioData.map((project, index) => (
          <a
            key={index}
            className="portfolioLink"
            href={project.link}
            target="_blank"
          >
            <Img
              style={{ height: "30vh" }}
              fluid={data[project.image].childImageSharp.fluid}
            />
            <div className="portfolioBottom">
              <h2 className="portfolioTitle">{project.name}</h2>
              <p className="portfolioDescription">{project.description}</p>
              {project.technologies.map((technology, technologyIndex) => {
                return (
                  <span
                    className={`portfolioTechnology`}
                    style={{
                      backgroundColor: `${
                        technology && technologyClassHandler(technology)
                      }`,
                    }}
                    key={technologyIndex}
                  >
                    {technology}
                  </span>
                )
              })}
            </div>
          </a>
        ))}
      </section>
    </Layout>
  )
}

export default SecondPage
