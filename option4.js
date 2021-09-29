/*
A postgres database has been prepared with these tables:

employees                             projects
+---------------+---------+           +---------------+---------+
| id            | int     |<----+  +->| id            | int     |
| first_name    | varchar |     |  |  | title         | varchar |
| last_name     | varchar |     |  |  | start_date    | date    |
| salary        | int     |     |  |  | end_date      | date    |
| department_id | int     |--+  |  |  | budget        | int     |
+---------------+---------+  |  |  |  +---------------+---------+
                             |  |  |
departments                  |  |  |  employees_projects
+---------------+---------+  |  |  |  +---------------+---------+
| id            | int     |<-+  |  +--| project_id    | int     |
| name          | varchar |     +-----| employee_id   | int     |
+---------------+---------+           +---------------+---------+
*/

// -- 1. Write a query returning the employee's name, salary and department_name
SELECT employees.first_name, employees.last_name, employees.salary, departments.name
FROM employees
INNER JOIN departments ON departments.id=employees.department_id;


// -- 2. Write a query that lists the name of each employee and the title of the their project



// -- 3. Write a query that lists all departments and the number of employees in each one
