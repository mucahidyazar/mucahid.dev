const FIRST_NAME = 'Mucahid'
const LAST_NAME = 'Yazar'
const FULL_NAME = FIRST_NAME + ' ' + LAST_NAME
const JOB = 'Frontend Developer'
const COMPANY_NAME = '1800flowers'
const COMPANY_URL = 'https://www.1800flowers.com'

const ME_DESCRIPTION = 'Hi, it is Mucahid. I create accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects. I`m currently working'

const ME_DESCRIPTION_DETAIL = 'I am a highly experienced frontend developer with a passion for building great companies and creating high-quality software. I have been working in the field since 2017, and have a wealth of experience in developing products, designing frontend applications, and implementing software patterns and architecture. I have worked on large zero-to-one SAAS projects at unicorn, decacorn, and billion dollar companies, and have gained a wealth of knowledge and best practices from my experiences.'

const ME_DESCRIPTION_SHORT = ME_DESCRIPTION + ' @' + COMPANY_NAME + '.'

const ME_DESCRIPTION_FULL = ME_DESCRIPTION_SHORT + ' ' + ME_DESCRIPTION_DETAIL

const CREATOR_ROLES = ['ADMIN']

const ME = {
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  fullName: FULL_NAME,
  job: JOB,
  description: ME_DESCRIPTION,
  descriptionDetail: ME_DESCRIPTION_DETAIL,
  descriptionShort: ME_DESCRIPTION_SHORT,
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

export {
  CREATOR_ROLES,
  ME,
}