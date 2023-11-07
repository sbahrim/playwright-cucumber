Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit the login form
        When I submit valid credentials to the login form
        Then I should see the home page

    Scenario Outline: Try to login with invalid credentials
        Given I visit the login form
        When I submit the login form with invalid credentials "<username>" and "<password>"
        Then I see error message

        Examples:
            | username  | password |
            | userfail1 | fail1    |
            | userfail2 | fail2    |
            | userfail3 | fail3    |