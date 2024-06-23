Adults only (SQL for Beginners #1)
DESCRIPTION:
In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.
users table schema
name
age
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

SOLUTION
SELECT * FROM users WHERE age >= 18



Expressions Matter
DESCRIPTION:
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

SOLUTION
SELECT GREATEST( a+b+c, (a+b)*c, a*(b+c), a*b*c)
AS res FROM expression_matter;


MakeUpperCas
DESCRIPTION:
Write a function which converts the input string to uppercase.

SOLUTION
SELECT s, UPPER(s) AS res FROM makeuppercase


Multiply
DESCRIPTION
This code does not execute properly. Try to figure out why

SOLUTION
SELECT (price * amount) AS total FROM items


