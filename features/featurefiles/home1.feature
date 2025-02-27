Feature: Homepage test

  Scenario Outline: As a user, I can log into home website and verify the page title
    Given I launch the browser <homePage>
    Then I see the header with message <message>

    Examples:
      | homePage                            | message                 |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |
