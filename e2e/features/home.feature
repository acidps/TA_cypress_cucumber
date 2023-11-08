Feature: home page
#Background serves to launch the steps before each scenario. Serves as a test setup
# @focus run only the test with that tag
  Background:
    Given I am on home page

  Scenario: hero section
    Then h1 contains the expected text
    And the features on the homepage are correct

  Scenario: Courses section course0
    When I click Course: Testing Your First Next.js Application Get Started button
    Then url path should be testing-your-first-application
  
  Scenario: Courses section course1
    When I click Course: Testing Foundations Get Started button
    Then url path should be testing-foundations
  
  Scenario: Courses section course2
    When I click Course: Cypress Fundamentals
    Then url path should be cypress-fundamentals
