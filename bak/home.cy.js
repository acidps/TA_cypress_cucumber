import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

describe('home page', () => {
  beforeEach(() => { // hook to simplify testes not having to write the cy.visit in each one of them
    cy.visit("http://localhost:3000")
  })
  context('hero section', () => {
    it('h1 contains the expected text', () => {
      cy.getByData('hero-heading').contains("Testing Next.js Applications with Cypress")
    })
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains(/Free and Open Source/i) //regex case insensitive
  
    })
  })
  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
      //var host = cy.location('host') // Get the host of the location object
      //var port = cy.location('port') // Get the port of the location object
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })

})  


