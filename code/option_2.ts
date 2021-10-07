
/**
 * [Option 2] -
  Write a short program that prints each number from 1 to 100 on a new line. 

  For each multiple of 3, print "Fizz" instead of the number. 

  For each multiple of 5, print "Buzz" instead of the number. 

  For numbers which are multiples of both 3 and 5, print "FizzBuzz" 
  instead of the number.
**/

let i = 1;
const end = 100;
const fizz = 3;
const buzz = 5;

for (i = 1; i <= end; i++) {
  /** confirms if `i` is divisible by the value of `fizz` */
  const isMultipleofFizz = i % fizz === 0;
  /** confirms if `i` is divisible by the value of `buzz` */
  const isMultipleofBuzz = i % buzz === 0;
  // if the value of `i` can be divided by fizz and buzz,
  // print 'FizzBuzz'
  if (isMultipleofFizz && isMultipleofBuzz) console.log("FizzBuzz");
  // if the value of `i` can be divided by fizz, pring 'Fizz'
  else if (isMultipleofFizz) console.log("Fizz");
  // if the value of `i` can be divided by buzz, print 'Buzz'
  else if (isMultipleofBuzz) console.log("Buzz");
  // if the value of `i` isn't divisible by fizz or buzz print the vlaue of i
  else console.log(i);
}
