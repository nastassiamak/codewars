On the Canadian Border (SQL for Beginners #2)
You are a border guard sitting on the Canadian border. You were given a list of travelers who have arrived at your gate today. You know that American, Mexican, and Canadian citizens don't need visas, so they can just continue their trips. You don't need to check their passports for visas! You only need to check the passports of citizens of all other countries!
Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.
travelers table schema
name
country
NOTE: The United States is written as 'USA' in the table.
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

SOLUTION
SELECT * FROM travelers WHERE country not in ('Canada','Mexico','USA')

_______________________________________________________________

Adults only (SQL for Beginners #1)
DESCRIPTION:
In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.
users table schema
name
age
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

SOLUTION
SELECT * FROM users WHERE age >= 18
______________________________________________________________


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
______________________________________________________________

MakeUpperCas
DESCRIPTION:
Write a function which converts the input string to uppercase.

SOLUTION
SELECT s, UPPER(s) AS res FROM makeuppercase
______________________________________________________________

Multiply
DESCRIPTION
This code does not execute properly. Try to figure out why

SOLUTION
SELECT (price * amount) AS total FROM items


