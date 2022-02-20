beforeEach(() => {
  cy.visit('/')
})

describe('SubscribeBanner component test', () => {
  const pages = [
    '/about',
    '/blog',
    '/changelogs',
    '/contact',
    '/help',
    '/media',
    '/projects',
    '/sign-in',
  ]

  it('SubscribeBanner should be every page', () => {
    cy.get('[data-cy=subscribe-banner]').as('subscribeBanner')

    cy.wrap(pages).each((page: string) => {
      cy.intercept(page).as(page)
      cy.visit(page)
      cy.wait(`@${page}`)
      cy.get('@subscribeBanner').should('be.visible')
    })
  })

  it('SubscribeBanner should have inputs and button', () => {
    cy.get('[data-cy=subscribe-banner]').as('subscribeBanner')
    cy.get('@subscribeBanner').find('input[name=name]').should('be.visible')
    cy.get('@subscribeBanner').find('input[name=email]').should('be.visible')
    cy.get('@subscribeBanner').find('button').should('be.visible')
  })

  it.only('SubscribeBanner should can subscribe', () => {
    cy.get('[data-cy=subscribe-banner]').as('subscribeBanner')

    cy.intercept(
      {
        method: 'POST',
        url: '/api/newsletter',
      },
      {
        statusCode: 200,
      },
    ).as('newsletter')

    cy.get('@subscribeBanner').find('input[name=name]').type('Mucahid Yazar')
    cy.get('@subscribeBanner')
      .find('input[name=email]')
      .type('mucahidyazar@gmail.com')
    cy.get('@subscribeBanner').find('form').submit()

    cy.wait('@newsletter')

    cy.get('@subscribeBanner').find('input[name=name]').should('be.empty')
    cy.get('@subscribeBanner').find('input[name=email]').should('be.empty')
  })
})
