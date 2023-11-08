Feature: User Journey

Background:
    Given I am on home page

Scenario: a user can find a course on the home page and complete the courses lessons
    Given Get started button for testing-your-first-application course exists 
    When User clicks Get started button
    Then User is redirected to testing-your-first-application course page
    When User clicks next lesson button
    Then User is redirected to app-install-and-overview part of the course
    And Next lesson button should be hidden
    When User responds correctly to the challenge
    Then Next lesson button should be visible
    When User clicks in the Next lesson button
    Then User is redirected to the installing-cypress-and-writing-our-first-test part of the course
    When User responds correctly to the challenge
    Then Next lesson button should be visible
    When User clicks in the Next lesson button
    Then User is redirected to the setting-up-data-before-each-test part of the course
    And Next lesson button should be hidden
    When User responds correctly to the challenge
    Then Complete course button should be visible
    When User clicks in the Complete course button
    Then He is redirected to the homepage