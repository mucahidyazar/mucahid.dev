import {TProject} from './projects'

export const PINS: TProject[] = [
  {
    label: 'mucahid.dev',
    href: 'https://github.com/mucahidyazar/mucahid.dev',
    description:
      'This is a full-stack portfolio website. Also it is an open-source project. You can create your own portfolio. If you wish you can use this template as a base of your SAAS project.',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'react query', 'tailwindcss', 'react-hook-forms'],
      deploy: 'vercel',
      ci: 'github actions',
      company: '',
    },
  },
  {
    label: 'api',
    href: 'https://github.com/mucahidyazar/api',
    description:
      'API repository containing various projects including an appointment, stock control, link preview and URL shortener services.',
    logo: '',
    info: {
      main: 'Node.js',
      packages: ['Node.js', 'puppeteer', 'chalk', 'prompts', 'socket.io'],
      deploy: '',
      ci: 'github actions',
      company: '',
    },
  },
  {
    label: 'workspace',
    description:
      'This repository serves as a central location for all of my projects, tests, and examples. It includes various subdirectories and files such as source code, documentation, and build scripts. This repository allows me to easily manage and organize my work, as well as collaborate with others.',
    href: 'https://github.com/mucahidyazar/workspace',
    logo: '',
    info: {
      main: 'Node.js',
      packages: [
        'react',
        'redux',
        'react query',
        'redux-thunk',
        'react-router',
        'styled-components',
        'formik',
        'typescript',
        'next.js',
        'tailwindcss',
        'react-hook-forms',
        'puppeteer',
        'chalk',
        'prompts',
        'socket.io',
      ],
      other: ['npm', 'storybook', 'nx'],
      deploy: '',
      ci: 'github actions',
      company: '',
    },
  },
]
