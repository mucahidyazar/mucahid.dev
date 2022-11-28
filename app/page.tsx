import Image from 'next/image'
import {Tooltip} from '@/components'
import {EXPERIENCES, LINKS, PROJECTS} from '@/mocks'

interface ISectionLink {
  href?: string
  children?: React.ReactNode
  logo?: string
  text?: string
}
const SectionLink = ({href = '#', text = '', logo, children}: ISectionLink) => {
  return (
    <a href={href} className={`link flex items-center gap-2`}>
      {logo && <Image src={logo} alt={text} width={20} height={20} />}
      {text || children}
    </a>
  )
}

export default function Home() {
  const careerStart = 2017
  const experience = Math.floor(new Date().getFullYear() - careerStart)
  // const router = useRouter()
  // console.log(router)

  return (
    <div id="home">
      <section id="about" className="w-3/4 my-4 flex flex-col gap-2">
        <p>
          <span className="inline-block font-medium italic underline mr-4">
            Creator of
          </span>
          <a
            className="link"
            href="https://github.com/mucahidyazar/icomoon-generator"
          >
            icomoon-generator
          </a>
          {' and '}
          <a
            className="link"
            href="https://github.com/mucahidyazar/html-css-boilerplate"
          >
            html-css-boilerplate
          </a>
        </p>
        <p>
          <span className="inline-block font-medium italic underline mr-4">
            Writer at
          </span>
          <a className="link" href="https://javascript.plainenglish.io/">
            {' '}
            Javascript Plainenglish{' '}
          </a>
          on{' '}
          <a className="link" href="https://javascript.plainenglish.io/">
            Medium and https://javascript.plainenglish.io
          </a>
        </p>
        <p>
          I have good experience in developing product, designing frontend
          applications, appliying correct software patterns and architecture and
          large zero-to-one SAAS projects. As a frontend developer, I have{' '}
          {experience}
          years of experience with full of passion, curiosity and love. To build
          better and great companies, I can offer you my soft engineering
          skills, previous experiences and with my best practises that I gain
          from Startup and the projects which I worked on in the past at the
          companies which are unicorn, decacorn and billion dollar companies.
          And still there are lots of things to learn on there.
        </p>
      </section>

      <section
        id="socials"
        className="my-4 flex flex-wrap items-center gap-4 gap-y-1"
      >
        <h2 className="font-medium italic border-b border-solid border-gray-400 w-fit">
          Find me on
        </h2>
        {LINKS.map(link => (
          <SectionLink
            key={link.label}
            text={link.label}
            href={link.url}
            logo={`/svg/socials/${link.icon}.svg`}
          />
        ))}
      </section>

      <section
        id="experience"
        className="my-4 flex flex-wrap items-center gap-4"
      >
        <h2 className="font-medium italic border-b border-solid border-gray-400 w-fit">
          Experience
        </h2>

        {EXPERIENCES.map(experience => (
          <Tooltip
            content={
              <aside className="flex flex-col gap-1 w-96">
                {Object.entries(experience.info).map(([key, value]) => (
                  <div className="flex flex-wrap items-start" key={key}>
                    <h2 className="font-medium italic w-20">
                      {/* if value is not array jsut print it */}
                      {key}
                    </h2>
                    <div className="flex flex-1 flex-wrap gap-2">
                      {typeof value === 'string' ? (
                        <p>{value}</p>
                      ) : (
                        value.map((v: any) => (
                          <p key={v} className="leading-3">
                            {v},
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </aside>
            }
            key={experience.label}
          >
            <SectionLink
              key={experience.label}
              href={experience.url}
              text={experience.label}
              logo={experience.logo}
            />
          </Tooltip>
        ))}
      </section>

      <section
        id="projects"
        className="my-4 flex items-center gap-4 flex-wrap gap-y-1"
      >
        <h2 className="font-medium italic border-b border-solid border-gray-400 w-fit">
          Projects
        </h2>

        {PROJECTS.map(project => (
          <Tooltip
            content={
              <aside className="flex flex-col gap-1 w-96">
                {Object.entries(project.info).map(([key, value]) => (
                  <div className="flex flex-wrap items-start" key={key}>
                    <h2 className="font-medium italic w-20">
                      {/* if value is not array jsut print it */}
                      {key}
                    </h2>
                    <div className="flex flex-1 flex-wrap gap-2">
                      {typeof value === 'string' ? (
                        <p>{value}</p>
                      ) : (
                        value.map((v: any) => (
                          <p key={v} className="leading-3">
                            {v},
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </aside>
            }
            key={project.label}
          >
            <SectionLink key={project.label} text={project.label} />
          </Tooltip>
        ))}
      </section>
    </div>
  )
}
