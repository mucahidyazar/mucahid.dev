import Image from 'next/image'
import Tooltip from '../src/components/Tooltip'

const socials = [
  {
    label: 'github',
    href: 'https://github.com/mucahidyazar',
    logo: '/svg/socials/github-icon.svg',
    color: '#000',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/mucahidyazar/',
    logo: '/svg/socials/linkedin-icon.svg',
    color: '#0077b5',
  },
  {
    label: 'medium',
    href: 'https://medium.com/@mucahidyazar',
    logo: '/svg/socials/medium-icon.svg',
    color: '#000',
  },
  {
    label: 'dribble',
    href: 'https://dribbble.com/mucahidyazar',
    logo: '/svg/socials/dribble-icon.svg',
    color: '#ea4c89',
  },
  {
    label: 'twitter',
    href: 'https://twitter.com/mucahidyazar',
    logo: '/svg/socials/twitter-icon.svg',
    color: '#1da1f2',
  },
  {
    label: 'instagram',
    href: 'https://www.instagram.com/mucahidyazar/',
    logo: '/svg/socials/instagram-icon.svg',
    color: '#e1306c',
  },
]

const EXPERIENCES = [
  {
    label: 'smartgift',
    href: 'https://github.com/mucahidyazar',
    logo: '/img/logos/smartgift.png',
    color: '#000',
    info: {
      name: 'Smartgift',
      location: 'Brooklyn, NY, USA',
      title: 'Senior',
      role: 'Frontend Developer',
      duration: [new Date(2022, 6), new Date()],
      status: 'Remote',
      type: 'B2B',
      time: 'Full-time',
    },
  },
  {
    label: 'getir',
    href: 'https://www.linkedin.com/in/mucahidyazar/',
    logo: '/img/logos/getir.png',
    color: '#0077b5',
    info: {
      name: 'Getir',
      location: 'Istanbul, Turkey',
      title: 'Engineer II',
      role: 'Web Developer',
      duration: [new Date(2021, 2), new Date(2022, 6)],
      status: 'Remote',
      type: 'Employee',
      time: 'Full-time',
    },
  },
  {
    label: 'maxithings',
    href: 'https://medium.com/@mucahidyazar',
    logo: '/img/logos/maxithings.png',
    color: '#000',
    info: {
      name: 'Maxithings',
      location: 'Maltepe, Istanbul, Turkey',
      title: 'Middle',
      role: 'Frontend Developer',
      duration: [new Date(2020, 10), new Date(2021, 2)],
      status: 'Hybrid',
      type: 'Employee',
      time: 'Full-time',
    },
  },
  {
    label: 'granobra',
    href: 'https://dribbble.com/mucahidyazar',
    logo: '/img/logos/granobra.png',
    color: '#ea4c89',
    info: {
      name: 'Granobra',
      location: 'Kartal, Istanbul, Turkey',
      title: 'Junior',
      role: 'Frontend Developer',
      duration: [new Date(2018, 2), new Date(2020, 9)],
      status: 'Hybrid',
      type: 'Employee',
      time: 'Full-time',
    },
  },
]

interface ISectionLink {
  href?: string
  children?: React.ReactNode
  color?: string
  logo?: string
  text?: string
}
const SectionLink = ({
  href = '#',
  color = '',
  text = '',
  logo,
  children,
}: ISectionLink) => {
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
          Creator of{' '}
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
          Writer at
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
        {socials.map(social => (
          <SectionLink
            key={social.label}
            text={social.label}
            logo={social.logo}
            color={social.color}
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
                        value.map(v => (
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
              text={experience.label}
              logo={experience.logo}
              color={experience.color}
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
                        value.map(v => (
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
            <a
              href="https://github.com/mucahidyazar"
              className="link"
              data-tip
              data-for="hero-dashboard"
            >
              {project.label}
            </a>
          </Tooltip>
        ))}
      </section>
    </div>
  )
}

const PROJECTS = [
  {
    label: 'hero-dashboard',
    href: '',
    logo: '',
    color: '',
    info: {
      main: 'react',
      packages: [
        'react',
        'redux',
        'react query',
        'redux-thunk',
        'react-router',
        'styled-components',
        'formik',
      ],
      deploy: 'amplify',
      ci: 'github actions',
      company: 'smartgift',
    },
  },
  {
    label: 'hero-recipient',
    href: '',
    logo: '',
    color: '',
    info: {
      main: 'react',
      packages: [
        'react',
        'redux',
        'react query',
        'redux-thunk',
        'react-router',
        'styled-components',
        'formik',
      ],
      deploy: 'amplify',
      ci: 'github actions',
      company: 'smartgift',
    },
  },
  {
    label: 'smartgift-ui-library',
    href: '',
    logo: '',
    color: '',
    info: {
      main: 'react',
      packages: [
        'react',
        'redux',
        'react query',
        'redux-thunk',
        'react-router',
        'styled-components',
        'formik',
      ],
      other: ['npm', 'storybook', 'nx'],
      deploy: 'amplify',
      ci: 'github actions',
      company: 'smartgift',
    },
  },
  {
    label: 'smart-checkout-recipient',
    href: '',
    logo: '',
    color: '',
    info: {
      main: 'next.js',
      packages: ['react', 'react-query', 'styled-components', 'formik'],
      other: ['nx'],
      deploy: 'amplify',
      ci: 'github actions',
      company: 'smartgift',
    },
  },
  {
    label: 'smart-checkout-dashboard',
    href: '',
    logo: '',
    color: '',
    info: {
      main: 'next.js',
      packages: ['react', 'react query', 'material-ui', 'react-hook-forms'],
      other: ['nx'],
      deploy: 'amplify',
      ci: 'github actions',
      company: 'smartgift',
    },
  },
]
