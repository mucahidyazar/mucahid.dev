import {companies, projects} from '@/data'

beforeEach(() => {
  cy.visit('/')
  cy.url().should('include', 'localhost')
})

describe('General tests', () => {
  context('section company-logos', () => {
    it('Make sure company logos are there', () => {
      cy.get('[data-cy=company-logo]').should('have.length', 3)
    })
    it('Make sure company logos are right', () => {
      cy.get('[data-cy=company-logo] img')
        .eq(0)
        .should('have.attr', 'src')
        .and('include', 'granobra.png')
      cy.get('[data-cy=company-logo] img')
        .eq(1)
        .should('have.attr', 'src')
        .and('include', 'getir.png')
      cy.get('[data-cy=company-logo] img')
        .eq(2)
        .should('have.attr', 'src')
        .and('include', 'maxithings.png')
    })
  })

  context('section last-articles', () => {
    it('Make sure there are Article section information', () => {
      cy.get('[data-cy=section-article]').as('sectionArticle')
      cy.get('@sectionArticle').should('be.visible')
      cy.get('@sectionArticle').should('have.length', 4)
      cy.get('[data-cy=section-article] a').each((article: any) => {
        cy.get(article)
          .invoke('text')
          .then(text => {
            expect(text.length).to.be.at.least(3)
          })
      })
    })

    it('Make sure the button inside the last articles section is working', () => {
      cy.get('[data-cy=section-article-button]').click()
      cy.url().should('include', '/blog')
      cy.go('back')
      cy.url().should('not.include', '/blog')
    })
  })

  context('section about', () => {
    it.only('Make sure the button inside the last articles section is working', () => {
      cy.get('[data-cy=section-about-companies]').should('be.visible')
      cy.get('[data-cy=section-about-projects]').should('be.visible')
      cy.get('[data-cy=section-about-companies] div')
        .eq(0)
        .should('have.text', companies.length)
      cy.get('[data-cy=section-about-projects] div')
        .eq(0)
        .should('have.text', projects.length)
    })
  })
})
