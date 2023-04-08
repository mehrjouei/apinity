describe('ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcontentcomponent--primary'));
  it('should render the component', () => {
    cy.get('apinity-card-content').should('exist');
  });
});
