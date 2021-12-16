describe("Book, edit, and cancel interviews", () => {
  beforeEach(() => {
    cy.request('GET', '/api/debug/reset');
    cy.visit('/');
    cy.contains('Monday');
  })

  xit('should book an interview', () => {
    cy.get('[alt="Add"]').first().click();
    cy.get('[data-testid="student-name-input"]').type('Lydia Miller-Jones');
    cy.get('[alt="Sylvia Palmer"]').first().click();
    cy.contains('Save').click();
    cy.contains('.appointment__card--show', 'Lydia Miller-Jones', 'Sylvia Palmer');
  });
  xit('should edit an interview', () => {
    cy.get("[alt=Edit]").first().click({ force: true });
    cy.get('[data-testid="student-name-input"]').clear().type('Bat Man');
    cy.get('[alt="Sylvia Palmer"]').eq(1).click();
    cy.contains('Save').click();
    cy.contains('.appointment__card--show', 'Bat Man', 'Tori Malcom');
  });
  it('should cancel an interview', () => {
    cy.get("[alt=Delete]").first().click({ force: true });
    cy.contains('Confirm').click();
    cy.get('[alt="Loading"]');
    cy.get('[alt="Loading"]').should('not.exist');
    cy.contains('.appointment__card--show', 'Archie Cohen').should('not.exist');

  });
});