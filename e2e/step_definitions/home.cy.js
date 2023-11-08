import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

//Scenario 0

/*Given("I am on home page", () => {
  cy.visit("http://localhost:3000")
  });
*/
Then('h1 contains the expected text', () => {
    cy.getByData('hero-heading').contains("Testing Next.js Applications with Cypress")
  })
Then('the features on the homepage are correct', () => {
  cy.get("dt").eq(0).contains("4 Courses")
  cy.get("dt").eq(1).contains("25+ Lessons")
  cy.get("dt").eq(2).contains(/Free and Open Source/i) //regex case insensitive
})

//Scenario 1

When('I click Course: Testing Your First Next.js Application Get Started button', () => {
  cy.getByData("course-0").find("a").contains("Get started").click()
})
Then('url path should be testing-your-first-application', () =>{
  cy.location("pathname").should("equal", "/testing-your-first-application")
  //var host = cy.location('host') // Get the host of the location object
  //var port = cy.location('port') // Get the port of the location object
})

//Scenario 2

When('I click Course: Testing Foundations Get Started button', () => {
  cy.getByData("course-1").find("a").contains("Get started").click()
})
Then('url path should be testing-foundations', () =>{
  cy.location("pathname").should("equal", "/testing-foundations")
})

//Scenario 3

When('I click Course: Cypress Fundamentals', () => {
  cy.getByData("course-2").find("a").contains("Get started").click()
})
Then('url path should be cypress-fundamentals', () =>{
  cy.location("pathname").should("equal", "/cypress-fundamentals")
})



