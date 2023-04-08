describe('ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardheadercomponent--primary'));
  it('should render the component', () => {
    cy.get('apinity-card-header').should('exist');
  });
});
