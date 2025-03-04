Feature: Bank Demo test
# @Registration
#   Scenario Outline: As a user, I can launch home page and register new user
#     Given I launch the browsers <homePage>
#     When I click on the register button
#     Then I entered the user details on the registration page
#     | fName | lName  | address      | city      | state   | zip       | phone       | ssn        | username      | password     |
#     | John  |  Don   | Test Address | Test City |   state |  411033   |  1234567891 | 123456     |  testuser706  |  welcome123  |
   
#     Examples:
#     | homePage                                         | 
#     | https://parabank.parasoft.com/parabank/index.htm | 

   
    Scenario Outline: As a user, I want to check the transaction history for specific month
    Given I launch the browsers <homePage>
    When I login with <username>
    And I enter the password <password>
   # Then I click on the <account number>
    #Then I check the transaction history for the month <month>
    # glit clone modification
    # git clone second modification 
    # git clone third modification
    # changes made in localA branch 
      
    Examples:
    | homePage                                         | username      | password    | account number | month       |
    | https://parabank.parasoft.com/parabank/index.htm | testuser706   | welcome123  | 12345          |  February   |
