export const contributions = [
  {
    id: '1',
    title: 'mucahid.dev',
    description:
      'A simple blog for my personal blog. This is the third and last version of this project. This blog was developed in 2022',
    url: 'https://github.com/mucahidyazar/mucahid.dev',
  },
  {
    id: '2',
    title: 'url-shortener',
    description:
      'A simple url shortener. You can use this project to shorten your long urls.',
    url: 'https://github.com/mucahidyazar/url-shortener',
  },
  {
    id: '3',
    title: 'NTEBoilerplate-Next.js',
    description:
      "This is a Next.js boilerplate that was built by myself. I integreted the technologies that are Redux, Scss, Express, Prettier and an amazing React, Redux, Scss structure to my project. There are lots of boilerplate on internet so why did I build this one. Actually I looked at lots of boilerplates but I didn't find like mine.",
    url: 'https://github.com/mucahidyazar/NTEBoilerplate-Next.js',
  },
  {
    id: '4',
    title: 'html-css-boilerplate',
    description:
      'This project has 2 MAIN BRANCHES for 2 VERSIONS. One is for LITTLE PROJECTS and One is ADVANCED PROJECTS. This is my advanced boilerplate to use html and css project. You will take an amazing build with this. This will make compile, prefix, compress your css and scss files. And after that you will get a wonderful build with parcelbundler. I wanna describe you which package what it is making for us.',
    url: 'https://github.com/mucahidyazar/html-css-boilerplate',
  },
  {
    id: '5',
    title: 'icomoon-generator',
    description:
      'This is the best tool which you generate your svgs to style file.',
    url: 'https://github.com/mucahidyazar/icomoon-generator',
  },
  {
    id: '6',
    title: 'mucahid.dev',
    description:
      'A simple blog for my personal blog. This is the first version of this project. This blog was developed in 2019',
    url: 'https://github.com/mucahidyazar/mucahidyazar.github.io',
  },
  {
    id: '7',
    title: 'mucahid.dev',
    description:
      'A simple blog for my personal blog. This is the second version of this project. This blog was developed in 2020',
    url: '',
  },
  {
    id: '8',
    title: 'webpack-boilerplate',
    description:
      'This is compile and bundle your code with webpack. You can use this project to compile your code. It is old but it is still useful.',
    url: 'https://github.com/mucahidyazar/webpack-boilerplate',
  },
]

interface IWorkshopItem {
  title: string
  description: string
  url: string
  github: string
  technologies: string[]
  image: string
}

export const workshops = [
  {
    id: '0',
    title: 'Quiz App',
    description: 'This is my big project',
    url: 'https://quiz-app-client.netlify.app/',
    github: 'https://github.com/mucahidyazar/quiz-app-client',
    technologies: ['javascript', 'nodejs', 'react', 'html5', 'css3'],
    image: '/images/workshops/project0001.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/quiz-app-client',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://quiz-app-client.netlify.app/',
      },
    ],
  },
  {
    id: '1',
    title: 'Breaking Bad Cast',
    description: 'This is a fun project',
    url: 'https://musing-bhabha-189408.netlify.app/',
    github: 'https://github.com/mucahidyazar/react-breaking-bad-cast',
    technologies: ['javascript', 'nodejs', 'react', 'html5', 'css3'],
    image: '/images/workshops/project0002.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/react-breaking-bad-cast',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://musing-bhabha-189408.netlify.app/',
      },
    ],
  },
  {
    id: '2',
    title: 'My Portfolio',
    description: 'This is my portfolio project',
    url: 'https://mucahid.tech',
    github: 'https://github.com/mucahidyazar/mucahid.tech',
    technologies: ['javascript', 'gatsbyjs', 'react', 'html5', 'sass'],
    image: '/images/workshops/project0003.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahid.tech',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahid.tech',
      },
    ],
  },
  {
    id: '3',
    title: 'Trillo App',
    description: 'This is a ceomplex React app project',
    url: 'https://trillo-react-app.netlify.app/',
    github: 'https://github.com/mucahidyazar/trillo-app/',
    technologies: ['javascript', 'nextjs', 'react', 'css3'],
    image: '/images/workshops/project0006.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/trillo-app/',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://trillo-react-app.netlify.app/',
      },
    ],
  },
  {
    id: '4',
    title: 'React Sello App',
    description: 'This is a ceomplex React app project',
    url: 'https://react-sello-app.netlify.app/',
    github: 'https://github.com/mucahidyazar/sello-project',
    technologies: ['javascript', 'react', 'css3'],
    image: '/images/workshops/project0007.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/sello-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://react-sello-app.netlify.app/',
      },
    ],
  },
  {
    id: '5',
    title: 'Old Portfolio',
    description: 'This is a ceomplex React app project',
    url: 'https://mucahidyazar-old-portfolio.netlify.app/',
    github: 'https://github.com/mucahidyazar/mucahidyazar-old-portfolio',
    technologies: ['javascript', 'nextjs', 'react', 'css3'],
    image: '/images/workshops/project0005.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar-old-portfolio',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar-old-portfolio.netlify.app/',
      },
    ],
  },
  {
    id: '6',
    title: 'Advance Todo List App',
    description: 'This is a ceomplex React app project',
    url: 'https://advance-todo-list-app.netlify.app/',
    github: 'https://github.com/mucahidyazar/advance-todo-list-app',
    technologies: ['javascript', 'react', 'css3'],
    image: '/images/workshops/project0008.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/advance-todo-list-app',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://advance-todo-list-app.netlify.app/',
      },
    ],
  },
  {
    id: '7',
    title: 'React Complex App',
    description: 'This is a ceomplex React app project',
    url: 'https://complex-react-app-client.netlify.app/',
    github: 'https://github.com/mucahidyazar/complex-react-app-client',
    technologies: ['javascript', 'nodejs', 'react', 'html5', 'css3'],
    image: '/images/workshops/project0004.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/complex-react-app-client',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://complex-react-app-client.netlify.app/',
      },
    ],
  },
  {
    id: '8',
    title: 'Nexter Project',
    description: 'This is a html and css project',
    url: 'https://mucahidyazar.github.io/tree/master/html-css/nexter-project',
    github:
      'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/nexter-project',
    technologies: ['html5', 'css3'],
    image: '/images/workshops/project0009.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/nexter-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar.github.io/tree/master/html-css/nexter-project',
      },
    ],
  },
  {
    id: '9',
    title: 'Edgeledger Project',
    description: 'This is a html and css project',
    url: 'https://mucahidyazar.github.io/tree/master/html-css/edgeledger-project',
    github:
      'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/edgeledger-project',
    technologies: ['html5', 'css3'],
    image: '/images/workshops/project0010.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/edgeledger-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar.github.io/tree/master/html-css/edgeledger-project',
      },
    ],
  },
  {
    id: '10',
    title: 'Hotel Project',
    description: 'This is a html and css project',
    url: 'https://mucahidyazar.github.io/tree/master/html-css/hotel-project',
    github:
      'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/hotel-project',
    technologies: ['html5', 'css3'],
    image: '/images/workshops/project0011.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/hotel-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar.github.io/tree/master/html-css/hotel-project',
      },
    ],
  },
  {
    id: '11',
    title: 'Knowledge Resume Project',
    description: 'This is a html and css project',
    url: 'https://mucahidyazar.github.io/tree/master/html-css/knowledge-resume-project',
    github:
      'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/knowledge-resume-project',
    technologies: ['html5', 'css3'],
    image: '/images/workshops/project0012.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/knowledge-resume-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar.github.io/tree/master/html-css/knowledge-resume-project',
      },
    ],
  },
  {
    id: '12',
    title: 'Natours Project',
    description: 'This is a html and css project',
    url: 'https://mucahidyazar.github.io/tree/master/html-css/natours-project',
    github:
      'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/natours-project',
    technologies: ['html5', 'css3'],
    image: '/images/workshops/project0013.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/natours-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar.github.io/tree/master/html-css/natours-project',
      },
    ],
  },
  {
    id: '13',
    title: 'Newgrid Project',
    description: 'This is a html and css project',
    url: 'https://mucahidyazar.github.io/tree/master/html-css/newgrid-project',
    github:
      'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/newgrid-project',
    technologies: ['html5', 'css3'],
    image: '/images/workshops/project0014.png',
    links: [
      {
        id: '0',
        title: 'Github',
        icon: 'github',
        url: 'https://github.com/mucahidyazar/mucahidyazar.github.io/tree/master/html-css/newgrid-project',
      },
      {
        id: '1',
        title: 'Website',
        icon: 'website',
        url: 'https://mucahidyazar.github.io/tree/master/html-css/newgrid-project',
      },
    ],
  },
]
