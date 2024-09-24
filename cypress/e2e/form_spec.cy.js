describe('Look through the form', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:"spinosad"&limit=3',
      { statusCode: 200, fixture: 'unchecked' }).as('Pet info for test');
    cy.intercept('GET',
      'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:%22aoivpaonioasfnd%22&count=reaction.veddra_term_name.exact&limit=3',
      { statusCode: 404, fixture: 'errorFixture' }).as('errors');

    cy.visit('http://localhost:3000/');
  });
  it('Should correctly display the search form, and properly set values when the form is changed', () => {
    cy.get('h1').contains('Pet')
    cy.get('h1').contains('Health')
  })
  it('Should have a functioning input area', () => {
    cy.get('.Search').type("spinosad");
    cy.get('.overall-side-effect-cases-option').select('true').invoke("val").should("eq", "true");
    cy.get('.overall-side-effect-cases-option').select('false').invoke("val").should("eq", "false");

  });
  it('Should tell you if there are no drugs with the specified name, without going to a new page', () => {
    cy.get('.Search').type("aoivpaonioasfnd");
    cy.get('.overall-side-effect-cases-option').select('true').invoke("val").should("eq", "true");
    cy.get('.search-enter').click()
    cy.get('.errorSpot').contains('Something went weird: no drugs found with that name! Make sure you are spelling it correctly, please!')
  });


});