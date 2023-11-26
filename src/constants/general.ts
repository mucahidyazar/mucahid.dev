const FIRST_NAME = 'Mucahid'
const LAST_NAME = 'Yazar'
const FULL_NAME = FIRST_NAME + ' ' + LAST_NAME
const JOB = 'Frontend Developer'
const COMPANY_NAME = '1800flowers'
const COMPANY_URL = 'https://www.1800flowers.com'

const ME_DESCRIPTION = '👋🏼 Hi, it is Mucahid. I am a frontend developer and creator of some open source projects since 2017. I create accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects. I`m currently working'

const ME_DESCRIPTION_FULL = ME_DESCRIPTION + ' @' + COMPANY_NAME

export const ME = {
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  fullName: FULL_NAME,
  job: JOB,
  description: ME_DESCRIPTION,
  descriptionFull: ME_DESCRIPTION_FULL,
  social: {
    github: 'mucahidyazar',
    linkedin: 'mucahidyazar',
    twitter: 'mucahidyazar',
    instagram: 'mucahidyazar',
    medium: 'mucahidyazar',
    codepen: "mucahidyazar",
    steam: "mucahidyazar",
    discord: "mucahidyazar",
    stackoverflow: "mucahidyazar",
  },
  company: {
    name: COMPANY_NAME,
    url: COMPANY_URL,
  }
}
