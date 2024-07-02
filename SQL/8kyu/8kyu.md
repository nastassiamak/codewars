
_______________________________________________________________

SQL Basics: Simple WHERE and ORDER BY


_______________________________________________________________
Collect Tuition (SQL for Beginners #4)

DESCRIPTION:
You are working for a local school, and you are responsible for collecting tuition from students. You have a list of all students, some of them have already paid tution and some haven't. Write a select statement to get a list of all students who haven't paid their tuition yet. The list should include all the data available about these students.
students table schema
name (string)
age (integer)
semester (integer)
mentor (string)
tuition_received (Boolean)
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

SOLUTION
INSERT INTO students(name, age, semester, mentor, tuition_received)
VALUES ('name', 32, 2,'mentor',true);
SELECT * FROM students WHERE NOT tuition_received;
_______________________________________________________________

Register for the Party (SQL for Beginners #3)

DESCRIPTION:
You received an invitation to an amazing party. Now you need to write an insert statement to add yourself to the table of participants.
participants table schema
name (string)
age (integer)
attending (boolean)
NOTES:
Since alcohol will be served, you can only attend if you are 21 or older
You can't attend if the attending column returns anything but true
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

SOLUTION
INSERT INTO participants(name, age, attending)
VALUES ('name', 32, true);
SELECT * FROM participants;

_______________________________________________________________

On the Canadian Border (SQL for Beginners #2)

DESCRIPTION:
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


