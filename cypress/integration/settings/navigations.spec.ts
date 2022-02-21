import {i18n} from '../../support/i18n'

// Mock t function
export const t = (key: string, params?: any) => {
  if (key === 'key.with.params') {
    return `key.with.params.${params.param}`
  }

  return key
}

describe('General tests', () => {
  context('Smoke test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('Make sure routes can be visited', () => {
      const routers = i18n.t('navbarMenu', {returnObjects: true})
      cy.wrap(routers).each((router: any) => {
        cy.intercept(router.route).as(router.route)
        cy.visit(router.route)
        cy.wait(`@${router.route}`)
        cy.url().should('include', router.route)
      })
    })

    it('Make sure navigation buttons are working', () => {
      const routers = i18n.t('navbarMenu', {returnObjects: true})
      cy.wrap(routers).each((router: any) => {
        // cy.intercept(router.route).as(router.route)
        // cy.visit(router.route)
        // cy.wait(`@${router.route}`)
        cy.get(`[data-cy=navbar-menu-item-${router.id}]`).as('navbar-menu-item')
        cy.get('@navbar-menu-item').click()
        cy.get('@navbar-menu-item').should('have.text', router.name)
        cy.url().should('include', router.route)
      })
    })

    it('Make sure turkish routes are working', () => {
      cy.get('[data-cy=change-language]').click({force: true})
      cy.url().should('include', '/tr')
      i18n.changeLanguage('tr')
      cy.get('[data-cy=change-language]').should('have.text', 'tr')
      const routers = i18n.t('navbarMenu', {returnObjects: true})

      cy.wrap(routers).each((router: any) => {
        cy.get(`[data-cy=navbar-menu-item-${router.id}]`).as('navbar-menu-item')
        cy.get('@navbar-menu-item').click()
        cy.get('@navbar-menu-item').should('have.text', router.name)
        cy.url().should('include', router.route)
      })
    })
  })
})

describe('Language tests', () => {
  it('Make sure changing language is working', () => {
    // 1 Times
    cy.get('[data-cy=change-language]').click({force: true})
    cy.url().should('include', '/tr')
    cy.get('[data-cy=change-language]').should('have.text', 'tr')

    cy.get('[data-cy=change-language]').click({force: true})
    cy.url().should('not.include', '/tr')
    cy.get('[data-cy=change-language]').should('have.text', 'en')

    // 2 Times
    cy.get('[data-cy=change-language]').click({force: true})
    cy.url().should('include', '/tr')
    cy.get('[data-cy=change-language]').should('have.text', 'tr')

    cy.get('[data-cy=change-language]').click({force: true})
    cy.url().should('not.include', '/tr')
    cy.get('[data-cy=change-language]').should('have.text', 'en')

    // 3 Times
    cy.get('[data-cy=change-language]').click({force: true})
    cy.url().should('include', '/tr')
    cy.get('[data-cy=change-language]').should('have.text', 'tr')

    cy.get('[data-cy=change-language]').click({force: true})
    cy.url().should('not.include', '/tr')
    cy.get('[data-cy=change-language]').should('have.text', 'en')
  })
})
