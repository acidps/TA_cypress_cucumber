import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
/*describe('newsletter subscribe form', () => {
    beforeEach(() => { // hook to simplify testes not having to write the cy.visit in each one of them
      cy.visit("http://localhost:3000")
    })*/
    //it("allows users to subscribe to the email list", () => {

Given("I am on home page", () => {
    cy.visit("http://localhost:3000")
    });
When("I type and submit an email in the email input", () => {
    cy.getByData("email-input").type("manel@gmail.com")
});
When("I click the submit button", () => {
    cy.getByData("submit-button").click()
});
Then("A success message should be displayed", () => {
    cy.getByData("success-message").should("exist").contains("manel@gmail.com")
});


    //})
  /*  it("don't allow users to subscribe to the email list", () => {

        cy.getByData("email-input").type("manel")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("user has already subscribed", () => {

        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address.") && cy.getByData("success-message").should("not.exist")

    })
  })
  */