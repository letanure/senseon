describe('Section: Counter', () => {
  before(() => cy.visit('http://localhost:3333/counter'))

  it('should load the correct page', () => {
    cy.get('.page.counter')
  })

  it('should include the counter component', () => {
    cy.get('.Counter')
  })

  it('Counter should include decrement and increment buttons', () => {
    cy.get('.Counter .decrement')
    cy.get('.Counter .increment')
  })

  it('Counter should start at zero', () => {
    cy.get('.Counter .value').contains('0')
  })

  it('Counter should decrement to negative values', () => {
    cy.get('.Counter .decrement').click()
    cy.get('.Counter .value').contains('-1')
  })

  it('Counter should increment back to positive values', () => {
    cy.get('.Counter .increment').click()
    cy.get('.Counter .value').contains('0')

    cy.get('.Counter .increment').click()
    cy.get('.Counter .value').contains('1')
  })
})
