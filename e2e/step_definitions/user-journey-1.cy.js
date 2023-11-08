import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given("Get started button for testing-your-first-application course exists", () => {
  cy.getByData("course-0").find("a").contains('Get started')
  });
When("User clicks Get started button", () => {
  cy.getByData("course-0").find("a").contains('Get started').click()
});
Then("User is redirected to testing-your-first-application course page", () => {
  cy.location("pathname").should("equal", "/testing-your-first-application")
});
When("User clicks next lesson button", () => {
  cy.getByData('next-lesson-button').click()
});
Then("User is redirected to app-install-and-overview part of the course", () => {
  cy.location("pathname").should("equal", "/testing-your-first-application/app-install-and-overview")
});
Then("Next lesson button should be hidden", () => {
  cy.getByData("next-lesson-button").should("not.exist")
});
When("User responds correctly to the challenge", () => {
  cy.getByData('challenge-answer-0').click()
});
Then("User is redirected to the installing-cypress-and-writing-our-first-test part of the course", () => {
  cy.location("pathname").should("equal", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
});
Then("Next lesson button should be visible", () => {
  cy.getByData("next-lesson-button").find("a").contains('Next Lesson')
});
When("User clicks in the Next lesson button", () => {
  cy.getByData("next-lesson-button").find("a").contains('Next Lesson').click()
});
Then("User is redirected to the setting-up-data-before-each-test part of the course", () => {
  cy.location("pathname").should("equal", "/testing-your-first-application/setting-up-data-before-each-test")
});
Then("Complete course button should be visible", () => {
  cy.getByData("next-lesson-button").find("a").contains('Complete Course')
});
When("User clicks in the Complete course button", () => {
  cy.getByData("next-lesson-button").find("a").contains('Complete Course').click()
});
Then("He is redirected to the homepage", () => {
  cy.location("pathname").should("equal", "/")
});

//cucumberless version

/*describe('User Journey', () => {
    beforeEach(() => { // hook to simplify testes not having to write the cy.visit in each one of them
      cy.visit("http://localhost:3000")
    })
    it("a user can find a course on the home page and complete the courses lessons", () => {

        cy.getByData("course-0").find("a").contains('Get started')
        cy.getByData("course-0").find("a").contains('Get started').click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
        cy.getByData('next-lesson-button').click()//next-lesson-button
        cy.location("pathname").should("equal", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("next-lesson-button").should("not.exist")
        cy.getByData('challenge-answer-0').click()//challenge-answer-0
        cy.getByData("next-lesson-button").find("a").contains('Next Lesson')
        cy.getByData("next-lesson-button").find("a").contains('Next Lesson').click()
        cy.location("pathname").should("equal", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData('challenge-answer-0').click()
        cy.getByData("next-lesson-button").find("a").contains('Next Lesson')
        cy.getByData("next-lesson-button").find("a").contains('Next Lesson').click()
        cy.location("pathname").should("equal", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("next-lesson-button").should("not.exist")
        cy.getByData('challenge-answer-0').click()
        cy.getByData("next-lesson-button").find("a").contains('Complete Course')
        cy.getByData("next-lesson-button").find("a").contains('Complete Course').click()
        cy.location("pathname").should("equal", "/")
        

    })
  })
  */