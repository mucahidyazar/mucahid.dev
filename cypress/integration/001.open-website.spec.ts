describe('General tests', () => {
  it('Open website', () => {
    cy.visit('http://localhost:3000/')
  })

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

  it('Make sure there are Article section information', () => {
    cy.get('[data-cy=section-article-type]').should('have.text', '- Articles')
    cy.get('[data-cy=section-article-title]').should(
      'have.text',
      'Last Articles',
    )
  })

  it('Make sure the button inside the last articles section is working', () => {
    cy.get('[data-cy=section-article-button]').click()
    cy.url().should('include', '/blog')
    cy.go('back')
    cy.url().should('include', '/')
  })

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
