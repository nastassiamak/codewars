DESCRIPTION:

For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.

products table schema

id
name
isbn
company_id
price
companies table schema

id
name
You should return all product fields as well as the company name as "company_name".

NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

SOLUTION

SELECT p.id, p.name, p.isbn, p.company_id, p.price, c.name AS company_name
FROM products AS p
LEFT JOIN companies AS c
ON p.company_id=c.id