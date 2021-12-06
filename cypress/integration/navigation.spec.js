describe('The navigation', () => {
  before(() => cy.visit('http://localhost:3333/'))

  it('should show the navigation', () => {
    cy.get('.Navigation')
  })

  it('show the right amount of items', () => {
    cy.get('.Navigation a').should('have.length', 3)
  })

  it('navigate to each section properly', () => {
    cy.get('.Navigation .counter').click()
    cy.get('.page.counter')

    cy.get('.Navigation .login-form').click()
    cy.get('.page.login-form')

    cy.get('.Navigation .introduction').click()
    cy.get('.page.introduction')
  })
})
