import Button from "@mui/material/Button";

export default function Exercise6() {
  function execute1() {

    console.log(`0 === false`);
    console.log(0 === false);
    console.log(`0 === ""`);
    console.log(0 === "");
  }

  return (
    <div className="main">
      <h2>Exercise #6</h2>

      <pre className="question">
        {`
Option 6: 

// Why do all these log true? 
// How would you change this to print out false each time?

console.log(0 == false);
console.log(0 == '');

          `}
      </pre>
      <p>
        <code>==</code> is not strict enough to typecheck in comparisons.<br/> It
        only performs equality checks and uses type coersion to verify two
        values are "equal". <br/> Using a <code>===</code> checks the identity of each
        value as well, which would provide the intended result.
      </p>
      <pre>
        {`
          console.log(0 === false);
          console.log(0 === '');
          `}
      </pre>
      <Button variant="outlined" onClick={() => execute1()}>
        Click me to see it in action in the console
      </Button>
    </div>
  );
}
