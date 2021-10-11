# Technical Interview - Little Cinema

Code Repo to submit technical interview responses for candidates

1) Please select a number of questions from this [code questions list](https://docs.google.com/document/d/1YpLUE2SPPKssjaf-r0IRVpLoPj3cxBVs0DhsNPWaa9k/edit?usp=sharing) to tackle in around an hour. 
2) Please make a PR to this code repository for review. 
3) Once you have the PR setup feel free to respond to the email thread with a code submission link. 
4) Feel free to format the responses in their own files in the PR submission

---
### Question 1
##### Write a function that finds `dataToFind` in the array `data`. Explain the BigO time of the function.

```
var data = [
  { message: '12313', userId: 0},
  { message: '34212', userId: 1},
  { message: '34234', userId: 2},
  { message: '54532', userId: 3},
  { message: '31233', userId: 4},
  { message: '12312', userId: 5},
  { message: '12313', userId: 6}
];
var dataToFind = '31233';
```

---
### Question 2
#####  Write a short program that prints each number from 1 to 100 on a new line. 
For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

---
### Question 3
#####  Using hooks, write a function that fetches data from `fetchUrl` - When the component re-renders, it should not re-fetch the data 
```
const fetchUrl = 'http://httpbin.org/anything';

const Component = (props) => {
  return (
    <div>
      {/* Render the fetched data */}
    </div>
  );
};
```

---
### Question 4
#####  A postgres database has been prepared with these tables:
```
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
```
1. Write a query returning the employee's name, salary and department name
2. Write a query that lists the name of each employee and the title of the their project
3. Write a query that lists all departments and the number of employees in each one

---
### Question 5
#####  Explain why this function always logs `3` - Modify this function to output the current value of `i`
```
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}
```
---
### Question 6
#####  Why do both of these log `true`? How would you change this to print out `false` each time?
```
console.log(0 == false);
console.log(0 == '');
```
---
### Question 7
#####  Show how to use context provider and consumer to update state in its child components.
```
import React, { createContext } from 'react';
const App = () => {
  return (
    <>
    </>
  )
}
```
---
### Question 8
#####  Using test driven development, write a component that displays the local time from our timestamp service in a H1 tag. 
- The component should display the service time in HH:MM:SS
- The component should render a loading state while waiting for data from the service
```
/**
 * GET: Returns the server time in the following format
 * { utc: {utcTimestamp}, iso: {isoTimestamp} }
 */
const serviceUrl = 'https://rfwavrgo09.execute-api.us-east-1.amazonaws.com/dev/admin/timestamp';
```
---
### Question 9
#####  Assuming this codebase uses [Apollo client](https://www.apollographql.com/docs/react/) and `useBar` is a hook around a GraphQL query, write a unit test that checks that `Foo` renders the error state when `useBar` throws an error
```
import { useBar } from './queries.ts';
...

const Foo = () => {
  const [data, { error, loading } = useBar();

  return (
    <Page>
      ...
    </Page>
  );
}
```
