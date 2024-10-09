describe('Make sure the count works', () => {
  beforeEach(() => {
    cy.intercept('GET',
      'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:%22spinosad%22&limit=3',
      { statusCode: 200, fixture: 'unchecked' }).as('Pet info for test');
    cy.intercept('GET',
      'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:"Milbemycin Oxime"&limit=3',
      { statusCode: 200, fixture: 'unchecked' }).as('Alt drug');

    cy.visit('http://localhost:3000/');
    cy.get('.Search').type("spinosad");
    cy.get('.overall-side-effect-cases-option').select('false').invoke("val").should("eq", "false");
    cy.get('.search-enter').click()
    cy.wait(400)

  });
  it('should get back to main form area correctly', () => {
    cy.wait(400)
    cy.get('.title-bar').click();
  })
  it('Should correctly display info based on input information', () => {
    cy.wait(400)

    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'brand name:MSK');
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > div').should('contain', 'Spinosad');
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(5)').should('contain', 'Species: Dog')
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(5)').should('contain', 'Breed: Terrier - Rat')
    cy.get('.main-page > :nth-child(1) > :nth-child(6)').should('contain', 'Vomiting')

  });
  it('should work for multiple drugs', () => {
    cy.wait(400)
    cy.get('.title-bar').click();
    cy.get('.Search').type("Milbemycin Oxime");
    cy.get('.overall-side-effect-cases-option').select('false').invoke("val").should("eq", "false");
    cy.get('.search-enter').click()

    // PLEASE NOTE: the info is displaying correctly, despite the extra instance of drug info. 
    // It seems that they have instances of data being listed twice for identical info. 
    // My project is set up to display all drugs taken by the patient at that visit, so if these drugs 
    // were different (i.e. pain relievers and anti-nausea drugs), it would display both of them at once.
    // Instead, they have the same drug twice. Again, this is the api's fault, not mine. I checked.
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > :nth-child(4)').should('contain', 'Milbemycin Oxime')
  })






});