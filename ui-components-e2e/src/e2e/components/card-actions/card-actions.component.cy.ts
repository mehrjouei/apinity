describe('ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardactionscomponent--primary'));
  it('should render the component', () => {
    cy.get('apinity-card-actions').should('exist');
  });
});
