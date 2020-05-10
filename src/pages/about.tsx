// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import {
  FcGraduationCap,
  FcSelfServiceKiosk,
  FcFilmReel,
  FcLike,
  FcReddit,
  FcHeadset,
  FcFlashOn,
  FcSteam,
  FcKindle,
} from "react-icons/fc"
import moment from "moment"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { technologies } from "../../contents/data/technologies"
import { experiences } from "../../contents/data/experiences"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <section>
      <article className="articleAbout">
        <h3>About Me</h3>
        <div className="articleAboutBody">
          <p>
            I am Mucahid from Turkey. I'm a programmer and I specialize in
            front-end development. I live in Istanbul and I am 28 years old. I
            want to talk about some myself. I studied Work and Health Safety and
            graduated from Maltepe University. And I began coding 1.5 years ago
            when I was on the half of the second year on my university. I have
            been studying all day new technologies, libraries and frameworks
            almost for 1.5 year. I am aware of my age and the situation that I
            began coding too late. But I know those are not obstacles for me and
            therefore I have been trying to study harder more. In the
            circumstances I got my first job about 3 months ago. Now I work for
            GRANOBRA as Frontend Developer.
          </p>
          <span>08.05.2020</span>
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

      <article className="articleAbout">
        <h3>Mucahid</h3>
        <div className="articleAboutIcons">
          <p>
            <FcGraduationCap /> <span>Maltepe University</span>
          </p>
          <p>
            <FcSelfServiceKiosk />
            <span>Works full time as a frontend developer</span>
          </p>
          <p>
            <FcFilmReel /> <span>Addicted of sci-fi movies/series</span>
          </p>
          <p>
            <FcLike /> <span>Fan of the Lord of the Rings and Star Wars</span>
          </p>
          <p>
            <FcReddit /> <span>Follower of the reddit and stackoverflow</span>
          </p>
          <p>
            <FcHeadset /> AC
            <FcFlashOn />
            DC
          </p>
          <p></p>
          <p>
            <FcSteam />
            <span>Hardcore Gamer</span>
          </p>
          <p>
            <FcKindle />
            <span>Lover of the fantastic novels</span>
          </p>
        </div>
      </article>
    </section>
  </Layout>
)

export default AboutPage
