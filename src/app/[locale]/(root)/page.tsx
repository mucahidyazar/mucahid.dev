import {HomeArticle, HomeSection} from '@/components'
import {SectionLink} from '@/components/molecules/SectionLink'
import {Badge} from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {ME, SocialLinks} from '@/constants'
import {EXPERIENCES, PINS, PROJECTS} from '@/mocks'
import {getSocialLink} from '@/utils/getSocialLink'
import {prepareMetadata} from '@/utils/prepareMetadata'

export function generateMetadata() {
  const title = `${ME.fullName}`

  return prepareMetadata({
    title,
    page: title,
  })
}

export default function Page() {
  return (
    <div id="home" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:w-2/3">
        <p>
          I create accessible, user-friendly web applications with the best
          efficient solutions and best practices of the frontend world for SAAS
          projects. I`m currently working{' '}
          <a className="link" href={ME.company.url} target="_blank">
            ${ME.company.name}
          </a>
        </p>

        <HomeSection id="downloads">
          <HomeArticle
            title="Download"
            content={
              <Badge variant="secondary">
                <a href="/resume.pdf" download>
                  Resume
                </a>
              </Badge>
            }
          />
        </HomeSection>
      </div>
      <div className="my-8 h-[1px] w-full bg-white opacity-10"></div>

      <HomeSection id="about">
        <HomeArticle
          id="creator-of"
          title="Creator of"
          content={PINS.map(pin => (
            <TooltipProvider key={pin.label}>
              <Tooltip>
                <TooltipTrigger>
                  <SectionLink key={pin.label} text={pin.label} />
                </TooltipTrigger>
                <TooltipContent>
                  <aside className="flex w-96 flex-col gap-1">
                    {Object.entries(pin.info).map(([key, value]) => (
                      <div className="flex flex-wrap items-start" key={key}>
                        <h2 className="w-20 font-medium italic">
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
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        />

        <HomeArticle
          id="writer-at"
          title="Writer at"
          content={
            <p>
              <a className="link" href="https://javascript.plainenglish.io">
                Javascript Plainenglish
              </a>{' '}
              on{' '}
              <a
                className="link"
                href={`https://medium.com/@${ME.social.medium}`}
              >
                Medium
              </a>
            </p>
          }
        />
      </HomeSection>
      <HomeArticle
        id="about-me"
        title="About me"
        content={
          <div className="flex flex-col gap-2">
            <p>
              I am a highly experienced frontend developer with a passion for
              building great companies and creating high-quality software. I
              have been working in the field since 2017, and have a wealth of
              experience in developing products, designing frontend
              applications, and implementing software patterns and architecture.
              I have worked on large zero-to-one SAAS projects at unicorn,
              decacorn, and billion dollar companies, and have gained a wealth
              of knowledge and best practices from my experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary">Motivation</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="w-96">
                      My motivation is driven by a passion for creating
                      high-quality software for my company. And giving my
                      experience to my collegues. I also like tos hare my
                      experience with the community by writing articles. In
                      frontend development everything get more complex and
                      easier in time. As a part of this community I want to
                      develop to solve these complex problems and make this
                      easier than today. And also the other best motivated thing
                      is thriving on the challenge of solving complex problems
                      and seeing my work come to life in a polished, functional
                      end-product.
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary">Offer</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="w-96">
                      • Pixel perfect and fully responsive applications • Best
                      practises of frontend community and Getir I learnt so far
                      • Good code-based projects and you wont need to refactor
                      it • Documented projects so having good and smooth flow
                      for anyone • Analyzing and monitoring your frontend
                      applications and taking action before time is too late •
                      Experience worked on the projects that has millions
                      requests each day • Accessible forms and applications •
                      Full automated workflow your frontend applications with
                      CI/CD and your deployment tool • Applying similar
                      codebases and single source of truth
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary">Challenges</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <ul className="w-96 list-disc pl-2">
                      <li>Multi language URLs (/about | /hakkinda)</li>
                      <li>
                        Number input problem (It is little complicated to tell
                        here but I can give a link similar to this topic)
                      </li>
                      https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
                      <li>
                        Server-side multi language support without using any
                        library (I applied this without package some package
                        problems on serverside)
                      </li>
                      <li>
                        Single source of truth for everhthing, for your code
                        bases, for your documentations, for your engineer habits
                        of the company. (folder structure, naming convention,
                        message convention etc…)
                      </li>
                      <li>
                        Created a UI library as a unique library for my company
                      </li>
                      <li>
                        Created a company and engineering culture from scratch
                        for a startup. I built their documentation as a
                        template, teach them some daily and development habits.
                      </li>
                      <li>
                        Automated release process and version management. This
                        is a monorepo example: If PR is merged to main; (1 and 2
                        are working as parallel)
                        <ul className="list-inside list-decimal">
                          <li>
                            Create a changelog for apps which has any file
                            changes
                            <ul className="list-inside pl-6">
                              <li>
                                If there is any changes under /libs/ui, then
                                start npm publish process
                              </li>
                            </ul>
                          </li>
                          <li>In parallel upload assets</li>
                        </ul>
                      </li>
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary">Expectation</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <ul className="w-96 list-disc pl-2">
                      <li>Education support (Courses, books etc…)</li>
                      <li>Necessary environments</li>
                      <li>Flexible working hours</li>
                      <li>Open-mind and respectful relations</li>
                      <li>Turkish official holidays</li>
                      <li>Language class support (Current level: B2)</li>
                      <li>Stock option (Nice to have)</li>
                      <li>Home Office support (Nice to have)</li>
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        }
      />

      <HomeSection id="socials">
        <HomeArticle
          id="find-me-on"
          title="Find me on"
          content={Object.entries(ME.social).map(([platform, id]) => (
            <SectionLink
              key={platform}
              text={platform}
              href={getSocialLink(platform as SocialLinks, id)}
              logo={`/svg/socials/${platform}-icon.svg`}
            />
          ))}
        />
      </HomeSection>

      <HomeSection id="experience">
        <HomeArticle
          id="experience"
          title="Experience"
          content={EXPERIENCES.map(experience => (
            <TooltipProvider key={experience.label}>
              <Tooltip>
                <TooltipTrigger>
                  <SectionLink
                    key={experience.label}
                    href={experience.url}
                    text={experience.label}
                    logo={experience.logo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <aside className="flex w-96 flex-col gap-1">
                    {Object.entries(experience.info).map(([key, value]) => (
                      <div className="flex flex-wrap items-start" key={key}>
                        <h2 className="w-20 font-medium italic">
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
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        />
      </HomeSection>

      <HomeSection id="projects">
        <HomeArticle
          id="projects"
          title="Projects"
          content={PROJECTS.map(project => (
            <TooltipProvider key={project.label}>
              <Tooltip>
                <TooltipTrigger>
                  <SectionLink key={project.label} text={project.label} />
                </TooltipTrigger>
                <TooltipContent>
                  <aside className="flex w-96 flex-col gap-1">
                    {Object.entries(project.info).map(([key, value]) => (
                      <div className="flex flex-wrap items-start" key={key}>
                        <h2 className="w-20 font-medium italic">
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
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        />
      </HomeSection>

      {/* <HomeSection id="faq">
        <HomeArticle
          id="faq"
          title="FAQ"
          content={(
            <div className='flex flex-wrap gap-2'>
              <div>
                <h4 className='w-fit mb-2 border-b border-gray-400 border-opacity-40'>What is my motivation as a frontend developer?</h4>
                <p className='text-sm text-gray-400'>My motivation is driven by a passion for creating high-quality software for my company. And giving my experience to my collegues. I also like tos hare my experience with the community by writing articles. In frontend development everything get more complex and easier in time. As a part of this community I want to develop to solve these complex problems and make this easier than today. And also the other best motivated thing is thriving on the challenge of solving complex problems and seeing my work come to life in a polished, functional end-product.</p>
              </div>
            </div>
          )}
        />
      </HomeSection> */}
    </div>
  )
}
