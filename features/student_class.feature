Feature: Register Class
    Student wants to schedule a class

Scenario Outline: Teacher can only schedule class during the week
    Given the student wants to schedule a class on "<day>"
    When the student tries to confirm 
    Then the app should respond "<answer>"

Examples:
    | day            | answer                          |
    | Friday         | class confirmed                 |
    | Sunday         | cannot take classes on weekends |
    | anything else! | not a valid day                 |