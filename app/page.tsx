import Image from 'next/image'
import {useRouter} from 'next/router'

const socials = [
  {
    name: 'github',
    href: 'https://github.com/mucahidyazar',
    image: '/svg/socials/github-icon.svg',
    color: '#000',
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/mucahidyazar/',
    image: '/svg/socials/linkedin-icon.svg',
    color: '#0077b5',
  },
  {
    name: 'medium',
    href: 'https://medium.com/@mucahidyazar',
    image: '/svg/socials/medium-icon.svg',
    color: '#000',
  },
  {
    name: 'dribble',
    href: 'https://dribbble.com/mucahidyazar',
    image: '/svg/socials/dribble-icon.svg',
    color: '#ea4c89',
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/mucahidyazar',
    image: '/svg/socials/twitter-icon.svg',
    color: '#1da1f2',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/mucahidyazar/',
    image: '/svg/socials/instagram-icon.svg',
    color: '#e1306c',
  },
]

const experiences = [
  {
    name: 'smartgift',
    href: 'https://github.com/mucahidyazar',
    image: '/img/logos/smartgift.png',
    color: '#000',
  },
  {
    name: 'getir',
    href: 'https://www.linkedin.com/in/mucahidyazar/',
    image: '/img/logos/getir.png',
    color: '#0077b5',
  },
  {
    name: 'maxithings',
    href: 'https://medium.com/@mucahidyazar',
    image: '/img/logos/maxithings.png',
    color: '#000',
  },
  {
    name: 'granobra',
    href: 'https://dribbble.com/mucahidyazar',
    image: '/img/logos/granobra.png',
    color: '#ea4c89',
  },
]

interface ISectionLink {
  href?: string
  children?: React.ReactNode
  color?: string
  image?: string
  text?: string
}
const SectionLink = ({
  href = '#',
  color = '',
  text = '',
  image,
  children,
}: ISectionLink) => {
  return (
    <a href={href} className={`link flex items-center gap-2`}>
      {image && <Image src={image} alt={text} width={20} height={20} />}
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
      <section id="about" className="w-3/4 my-4">
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
            key={social.name}
            text={social.name}
            image={social.image}
            color={social.color}
          />
        ))}
      </section>

      <section id="experience" className="my-4 flex items-center gap-4">
        <h2 className="font-medium italic border-b border-solid border-gray-400 w-fit">
          Experience
        </h2>
        {experiences.map(experience => (
          <SectionLink
            key={experience.name}
            text={experience.name}
            image={experience.image}
            color={experience.color}
          />
        ))}
      </section>

      <section
        id="projects"
        className="my-4 flex items-center gap-4 flex-wrap gap-y-1"
      >
        <h2 className="font-medium italic border-b border-solid border-gray-400 w-fit">
          Projects
        </h2>
        <a href="https://github.com/mucahidyazar" className="link">
          hero-dashboard,
        </a>
        <a href="https://github.com/mucahidyazar" className="link">
          hero-recipient,
        </a>
        <a href="https://github.com/mucahidyazar" className="link">
          smartgift-ui-library,
        </a>
        <a href="https://github.com/mucahidyazar" className="link">
          smart-checkout,
        </a>
        <a href="https://github.com/mucahidyazar" className="link">
          smart-checkout-dashboard,
        </a>
        <a href="https://github.com/mucahidyazar" className="link">
          getir.com / web-components,
        </a>
        <a href="https://github.com/mucahidyazar" className="link">
          getir.com / web-workspace,
        </a>
      </section>
    </div>
  )
}
