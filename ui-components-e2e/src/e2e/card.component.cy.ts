describe('ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));
  it('should render the component', () => {
    cy.get('apinity-card').should('exist');
  });
});
