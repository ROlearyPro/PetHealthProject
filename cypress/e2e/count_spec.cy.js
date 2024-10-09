describe('Make sure the count works', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:%22spinosad%22&count=reaction.veddra_term_name.exact&limit=3', { statusCode: 200, fixture: 'checked' }).as('Pet info for test');
    cy.visit('http://localhost:3000/');
    cy.get('.Search').type("spinosad");
    cy.get('.overall-side-effect-cases-option').select('true').invoke("val").should("eq", "true");
    cy.get('.search-enter').click()

  });
  it('should get back to main form area correctly', () => {
    cy.wait(500)
    cy.get('.title-bar').click();
  })
  it('Should have a functioning input area', () => {
    cy.get(':nth-child(1) > .side-effect-area').should("contain", "Side effect: Emesis")
    cy.get(':nth-child(1) > .side-effect-count-area').should("contain", "60008 cases reported for patients taking this drug.")
    cy.get(':nth-child(2) > .side-effect-area').should("contain", "Side effect: Vomiting")
    cy.get(':nth-child(2) > .side-effect-count-area').should("contain", "51098 cases reported for patients taking this drug.")
    cy.get(':nth-child(3) > .side-effect-area').should("contain", "Side effect: Lethargy (see also Central nervous system depression in 'Neurological')")
    cy.get(':nth-child(3) > .side-effect-count-area').should("contain", "23421 cases reported for patients taking this drug.")
  });
});