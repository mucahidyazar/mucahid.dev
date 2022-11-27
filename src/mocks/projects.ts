export const PROJECTS: TProject[] = [
  {
    label: 'hero-dashboard',
    href: '',
    logo: '',
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

export type TProject = {
  label: string
  href: string
  logo: string
  info: {
    main: string
    packages: string[]
    other?: string[]
    deploy: string
    ci: string
    company: string
  }
}
