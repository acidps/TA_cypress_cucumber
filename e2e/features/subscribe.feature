Feature: newsletter subscribe featuformre

  Scenario: Subscribe email list
    Given I am on home page
    When I type and submit an email in the email input
    And I click the submit button
    Then A success message should be displayed
