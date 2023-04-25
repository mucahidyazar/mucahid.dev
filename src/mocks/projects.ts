export const PROJECTS: TProject[] = [
  {
    label: 'smartgift',
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
      company: '1800flowers',
    },
  },
  {
    label: 'thank-you-cards',
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
      company: '1800flowers',
    },
  },
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
  {
    label: 'getir-web',
    href: '',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'redux', 'styled-components', 'react-hook-forms'],
      other: ['nx'],
      deploy: 'aws',
      ci: 'github actions',
      company: 'getir',
    },
  },
  {
    label: 'getir-yemek',
    href: '',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'redux', 'styled-components', 'react-hook-forms'],
      other: ['nx'],
      deploy: 'aws',
      ci: 'github actions',
      company: 'getir',
    },
  },
  {
    label: 'getir-ui',
    href: '',
    logo: '',
    info: {
      main: 'react',
      packages: ['react', 'redux', 'styled-components', 'react-hook-forms'],
      other: ['nx'],
      deploy: 'aws',
      ci: 'github actions',
      company: 'getir',
    },
  },
  {
    label: 'getir-restaurant-dashboard',
    href: '',
    logo: '',
    info: {
      main: 'react',
      packages: ['react', 'redux', 'styled-components', 'react-hook-forms'],
      other: ['nx'],
      deploy: 'aws',
      ci: 'github actions',
      company: 'getir',
    },
  },
  {
    label: 'iyifiyat',
    href: '',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'next.js', 'redux', 'scss', 'react-hook-forms'],
      deploy: 'local-server',
      ci: 'gitlab actions',
      company: 'maxithings',
    },
  },
  {
    label: 'biletsepeti',
    href: '',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'next.js', 'redux', 'scss', 'react-hook-forms'],
      deploy: 'local-server',
      ci: 'gitlab actions',
      company: 'granobra',
    },
  },
  {
    label: 'fin-health',
    href: '',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'next.js', 'redux', 'scss', 'react-hook-forms'],
      deploy: 'local-server',
      ci: 'gitlab actions',
      company: 'granobra',
    },
  },
  {
    label: 'biletsepeti',
    href: '',
    logo: '',
    info: {
      main: 'next.js',
      packages: ['react', 'next.js', 'redux', 'scss', 'react-hook-forms'],
      deploy: 'local-server',
      ci: 'gitlab actions',
      company: 'granobra',
    },
  },
]

export type TProject = {
  label: string
  description?: string
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
