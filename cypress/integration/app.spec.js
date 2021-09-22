describe('The introduction page', () => {
  before(() => cy.visit('http://localhost:3333/'));

  it('should load the correct page', () => {
    cy.get('.page.introduction');
  });

  it('should show the navigation', () => {
    cy.get('.Navigation');
  });

  it('should show that the API is accessible', () => {
    cy.get('.api-status').should('have.class', 'apiAvailable');
  });
});
