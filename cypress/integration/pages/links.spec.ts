import {socialMedias} from '@/data'

const buttons = socialMedias.filter(({type}) => type === 'button')
const icons = socialMedias.filter(({type}) => type === 'icon')

beforeEach(() => {
  cy.visit('/links')
  cy.url().should('contain', '/links')
})

describe('page /links tests', () => {
  it('Make sure link image is visible', () => {
    cy.get('[data-cy=links-image]').as('linksImage')
    cy.get('@linksImage').should('be.visible')
  })

  it('Make sure profile name is visible and right', () => {
    cy.get('[data-cy=links-profile-name]').as('profileName')
    cy.get('@profileName').should('be.visible')
    cy.get('@profileName').should('have.text', '@mucahidyazar')
  })

  it('Make sure links buttons are visible and right', () => {
    cy.wrap(buttons).each((button: any) => {
      cy.get(`[data-cy=links-button-${button.id}]`).as(`${button.id}Button`)
      cy.get(`@${button.id}Button`).should('be.visible')
      cy.get(`@${button.id}Button`).should('have.text', button.name)
    })
  })

  it('Make sure links icons are visible and right', () => {
    cy.wrap(icons).each((icon: any) => {
      cy.get(`[data-cy=links-icon-${icon.id}] svg`).as(`${icon.id}Icon`)
      cy.get(`@${icon.id}Icon`).should('be.visible')
      cy.get(`@${icon.id}Icon`)
        .invoke('attr', 'name')
        .should('be.equal', icon.icon)
    })
  })
})
