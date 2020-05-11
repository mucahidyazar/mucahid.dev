// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql, useStaticQuery } from "gatsby"

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
          I think this section will be the section that you will be interest and
          look. I exhibit some of the materials of my life. And exactly some of
          them are my real love. :P I upgrade time to time my hardwares. And If
          I give you 3 advise about equipments
          <p>"Buy a good chair"</p>
          <p>"Buy a good computer"</p>
          <p>"Work widescreen, its mean buy a good and two monitors"</p>
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
