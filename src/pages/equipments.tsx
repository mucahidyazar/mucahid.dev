// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import EquipmentCategory from "../components/EquipmentCategory"

const SecondPage = (props: PageProps) => {
  const data = useStaticQuery(GET_EQUIPMENTS)

  return (
    <Layout>
      <SEO title="Page two" />
      <section>
        <h4 className="equipmentsHeader">EQUIPMENTS</h4>
        <p className="equipmentsDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          deleniti, quae iste dolore, ut debitis voluptate voluptatum commodi
          velit optio nesciunt suscipit quas, soluta repellendus? Voluptates
          ullam delectus recusandae consectetur asperiores ipsum alias unde
          magnam aperiam possimus aliquid maiores reiciendis facilis doloribus
          necessitatibus inventore, voluptatum temporibus et, incidunt numquam?
          Ullam?
        </p>
        <EquipmentCategory title="COMPUTER" data={data.computer.nodes} />
        <EquipmentCategory title="DESK" data={data.desk.nodes} />
        <EquipmentCategory title="PERSONAL" data={data.personal.nodes} />
        <EquipmentCategory title="ROOM" data={data.room.nodes} />
      </section>
    </Layout>
  )
}

const GET_EQUIPMENTS = graphql`
  {
    computer: allContentfulComputer {
      nodes {
        name
        type
        link
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    desk: allContentfulDesk {
      nodes {
        name
        type
        link
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    personal: allContentfulPersonal {
      nodes {
        name
        type
        link
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    room: allContentfulRoom {
      nodes {
        name
        type
        link
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default SecondPage
