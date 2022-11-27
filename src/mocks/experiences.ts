export const EXPERIENCES: TExperience[] = [
  {
    label: 'smartgift',
    url: 'https://www.smartgiftit.com/',
    logo: '/img/logos/smartgift.png',
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
    url: 'https://getir.com/',
    logo: '/img/logos/getir.png',
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
    url: 'https://maxithings.com/',
    logo: '/img/logos/maxithings.png',
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
    url: 'http://www.granobra.com/',
    logo: '/img/logos/granobra.png',
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

export type TExperience = {
  label: string
  url: string
  logo: string
  info: {
    name: string
    location: string
    title: string
    role: string
    duration: [Date, Date]
    status: string
    type: string
    time: string
  }
}
