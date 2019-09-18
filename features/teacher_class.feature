Feature: Register Class
    Teacher wants to schedule a class

Scenario Outline: Teacher can only schedule class during the week
    Given the day "<day>"
    When the teacher tries to schedule 
    Then the app should respond "<answer>"

Examples:
    | day            | answer                      |
    | Friday         | class scheduled             |
    | Sunday         | cannot Schedule on weekends |
    | anything else! | not a valid day             |