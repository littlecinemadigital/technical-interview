/**
 * Option 6:
 * Why do all these log true? 
 * How would you change this to print out false each time?
 */
console.log(0 === false);
console.log(0 == '');

// This is due to the evaluation spec of `==`. It ignores the `datatype` of variables.
// A solution for this could be to use strict equality `===`
console.log(0 === false);
console.log(0 === '');     

// or in the case of Typescript, which would still yell at you because we're attempting
// to explictly compare two different datatypes, we could use typeof. With more time,
// I'd create a method for reliably evaluating Arrays since `typeof` can't distinguish
// Arrays from Objects
console.log(typeof 0 === typeof false);
console.log(typeof 0 === typeof '');  