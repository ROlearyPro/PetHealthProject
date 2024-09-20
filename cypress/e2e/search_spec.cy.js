describe('Search with the API', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:"spinosad"&limit=3'
    ).as('Pet Drug info');
    cy.visit('http://localhost:3000/');
  });

  it('Should display a card with the app content', () => {
    cy.get('#title').contains("DANGOL'WEATHER", { matchCase: false });
    cy.get('.flex-row').children().should('have.length', 2);
    cy.get('.search-by-city').should('exist');
    cy.get('pre').should('exist');
  });
});
