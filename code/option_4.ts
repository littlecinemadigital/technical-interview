/*
  Option 4 - A postgres database has been prepared with these tables:
*/

// sadly, I haven't worked with SQL in a long while (its been NoSQL).
// I'm excited to refresh myself on this soon! I chose to skip this
// option in order stay within the 1 hour constraint.


// this is the first half of my answer to question 1
SELECT  first_name, last_name, salary
FROM  employees
WHERE  id = employeeId

// INNER JOIN departments ON id=employees;
