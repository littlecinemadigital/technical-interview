import Button from "@mui/material/Button";

export default function Exercise2() {
  function execute1() {
    for (let i = 0; i < 100; )
      console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
  }

  function execute2() {
    for (var i = 1; i < 101; i++) {
      if (i % 15 === 0) console.log("FizzBuzz");
      else if (i % 3 === 0) console.log("Fizz");
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
    }
  }

  return (
    <div className="main">
      <h2>Exercise #2</h2>
      <pre className="question">{`
/**
  Write a short program that prints each number from 1 to 100 on a new line. 

  For each multiple of 3, print "Fizz" instead of the number. 

  For each multiple of 5, print "Buzz" instead of the number. 

  For numbers which are multiples of both 3 and 5, print "FizzBuzz" 
  instead of the number.
**/

      `}</pre>

      <p>This is the shortest FizzBuzz I know in js:</p>
      <pre>
        {`for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)`}
      </pre>
      <Button variant="outlined" onClick={() => execute1()}>
        Click me to see it in action in the console
      </Button>
      <hr />
      <p>Although this is more widely accepted:</p>
      <pre>{`
for (var i=1; i < 101; i++){
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
      `}</pre>
      <Button variant="outlined" onClick={() => execute2()}>
        Click me to see it in action in the console
      </Button>
    </div>
  );
}
