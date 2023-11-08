import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

describe('User Journey', () => {
    beforeEach(() => { // hook to simplify testes not having to write the cy.visit in each one of them
      cy.visit("http://localhost:3000")
    })
    it("a user can find a course on the home page and complete the courses lessons", () => {

        cy.getByData("course-0").find("a").contains('Get started').click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
        cy.getByData('next-lesson-button').click()//next-lesson-button
        cy.location("pathname").should("equal", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("next-lesson-button").should("not.exist")
        cy.getByData('challenge-answer-0').click()//challenge-answer-0
        cy.getByData("next-lesson-button").find("a").contains('Next Lesson').click()
        cy.location("pathname").should("equal", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData('challenge-answer-0').click()
        cy.getByData("next-lesson-button").find("a").contains('Next Lesson').click()
        cy.location("pathname").should("equal", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("next-lesson-button").should("not.exist")
        cy.getByData('challenge-answer-0').click()
        cy.getByData("next-lesson-button").find("a").contains('Complete Course').click()
        cy.location("pathname").should("equal", "/")
        

    })
  })
  