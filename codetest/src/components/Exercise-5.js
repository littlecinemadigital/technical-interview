import Button from "@mui/material/Button";

export default function Exercise5() {
  function execute1() {
    for (let i = 0; i <= 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000 + i);
    }
  }

  return (
    <div className="main">
      <h2>Exercise #5</h2>

      <pre className="question">
        {`
// Explain why this function always logs 3.
// Modify this function to output the current value of i.

for (var i = 0; i <= 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}
          `}
      </pre>
      <p>
        This will always output <code>3</code> because of the usage of
        <code> var</code> instead of <code>let</code>.<br />
        The <code>for</code> loop will run synchronously, i.e. wicked fast,
        updating <code>i</code> to be 3 well ahead of the first timeout
        (1000ms).
        <br /> Using <code>var</code> means the value will be set to 3 from the
        closure defined in the for loop, so then the pointer will always point to
        the same declaration.
        <br />
      </p>
      <p>
        Fixing this is easy, change the declaration to <code>let</code> and the
        <code>i</code> variable will point to a different space for each
        iteration:
      </p>
      <pre>
        {`
for (let i = 0; i <= 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}
          `}
      </pre>
      <Button variant="outlined" onClick={() => execute1()}>
        Click me to see it in action in the console
      </Button>
    </div>
  );
}
