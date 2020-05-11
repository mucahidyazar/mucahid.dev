// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const GET_PHOTO = graphql`
  {
    projects: allContentfulProjects {
      nodes {
        name
        description
        link
        technologies
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

type photoTypes = {
  projects: {
    nodes: {
      name: string
      description: string
      link: string
      technologies: string[]
      image: {
        fluid: GatsbyImageProps
      }
    }
  }
}

const SecondPage = (props: PageProps) => {
  const data: photoTypes = useStaticQuery(GET_PHOTO)

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
        return "#EDEDED"
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
      <SEO title="Page two" />
      <section className="portfolioSection">
        {data.projects.nodes.map((node, index) => (
          <a
            key={index}
            className="portfolioLink"
            href={node.link}
            target="_blank"
          >
            <Img style={{ height: "30vh" }} fluid={node.image.fluid} />
            <div className="portfolioBottom">
              <h2 className="portfolioTitle">{node.name}</h2>
              <p className="portfolioDescription">{node.description}</p>
              {node.technologies.map((technology, technologyIndex) => {
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
