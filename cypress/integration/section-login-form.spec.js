describe('Section: Login Form', () => {
  before(() => cy.visit('http://localhost:3333/login-form'));

  it('should load the correct page', () => {
    cy.get('.page.login-form');
  });

  it('should include the design image', () => {
    cy.get('img.design');
  });

  it('should include an implementation placeholder', () => {
    cy.get('.implementation');
  });
});
