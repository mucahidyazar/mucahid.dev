import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import enCommon from '../../public/locales/en/common.json'
import trCommon from '../../public/locales/tr/common.json'

// Mock t function
export const t = (key: string, params?: any) => {
  if (key === 'key.with.params') {
    return `key.with.params.${params.param}`
  }

  return key
}

// Mock react-i18next
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      common: enCommon,
    },
    tr: {
      common: trCommon,
    },
  },
})

describe('General tests', () => {
  it('Open website', () => {
    cy.visit('http://localhost:3000/')

    const routers = i18n.t('navbar', {returnObjects: true})
    routers.forEach((router: any, index: number) => {
      if (index !== 0) {
        cy.get(`[data-cy=navbar-menu-item-${router.name}]`).click({force: true})
        cy.intercept(router.route).as(router.route)

        cy.wait(`@${router.route}`).then(() => {
          cy.url().should('include', router.route)
        })
      }
    })
  })
})
