// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import moment from "moment"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { technologies } from "../../contents/data/technologies"
import { experiences } from "../../contents/data/experiences"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <section>
      <article className="articleAbout">
        <h3>About Me</h3>
        <div className="articleAboutBody">
          <p>
            I am Mucahid from Turkey. I'm a programmer and I specialize in
            front-end development. I began coding 2 years ago. I have been
            improving myself for 2 years as Full Stack Developer. I work all of
            the technologies that are on the Technologies section. And I used
            most of them on this Blog page. If I say 3 senteces for you about
            myself, those would be, "I like Javascript and his magic tricks.",
            "And React is my most powerful weapon." "I still need to learn lots
            of things so I should stop here and go to study to improve myself."
          </p>
        </div>
      </article>

      <article className="articleAbout">
        <h3>Experiences</h3>
        <div className="articleAboutExperiences">
          {experiences.map((experience, index) => {
            const Logo = experience.image
            return (
              <a
                className="aboutExperience"
                href={experience.website}
                key={index}
                target="_blank"
              >
                <div className="aboutExperienceImageContainer">
                  <Logo
                    className="aboutExperienceImage"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="aboutExperienceBody">
                  <p className="aboutExperiencePosition">
                    {experience.position}
                  </p>
                  <p className="aboutExperienceCompany">{experience.company}</p>
                  <p className="aboutExperienceExperience">
                    {experience.from} -{" "}
                    {experience.to !== ""
                      ? experience.to
                      : moment(Date.now()).format("L")}
                  </p>
                  <p className="aboutExperienceDescription">
                    {experience.description}
                  </p>
                  <p className="aboutExperienceTimer">
                    Working for{" "}
                    <span className="aboutExperienceTimerSpan">
                      {moment(experience.from).startOf("hour").fromNow()}
                    </span>
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </article>

      <article className="articleAbout">
        <h3>Technologies</h3>
        <div className="articleAboutTechnologiesBody">
          {technologies.map((technology, index) => {
            const Logo = technology.image
            return (
              <a
                className="aboutTechnology"
                href="/"
                key={index}
                target="_blank"
              >
                <Logo
                  className="aboutTechnologyImage"
                  style={{ width: "100%" }}
                />
                <p className="aboutTechnologyLanguage">{technology.language}</p>
                <p className="aboutTechnologySitutation">
                  {technology.situtation}
                </p>
                <p className="aboutTechnologyExperience">
                  {technology.experience} years
                </p>
              </a>
            )
          })}
        </div>
      </article>
    </section>
  </Layout>
)

export default AboutPage
