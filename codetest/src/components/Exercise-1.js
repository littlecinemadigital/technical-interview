import Button from "@mui/material/Button";

export default function Exercise1() {
  const data = [
    { message: "12313", userId: 0 },
    { message: "34212", userId: 1 },
    { message: "34234", userId: 2 },
    { message: "54532", userId: 3 },
    { message: "31233", userId: 4 },
    { message: "12312", userId: 5 },
    { message: "12313", userId: 6 },
  ];

  var dataToFind = "31233";

  function execute1(dataToFind) {
    function findInItem(item, dataToFind) {
      // eslint-disable-next-line no-unused-vars
      for (const [key, value] of Object.entries(item)) {
        if (value === dataToFind) window.alert(JSON.stringify(item));
      }
    }
    data.find((item) => findInItem(item, dataToFind));
  }

  function execute2(dataToFind) {
    let found = data.find((item) => item.message === dataToFind);
    window.alert(JSON.stringify(found));
  }

  return (
    <div className="main">
      <h2>Exercise #1</h2>

      <pre className="question">
        {`/*
  Write a function that finds "dataToFind" in the array "data".
  Explain the BigO time of the function.
*/

var data = [
  { message: '12313', userId: 0},
  { message: '34212', userId: 1},
  { message: '34234', userId: 2},
  { message: '54532', userId: 3},
  { message: '31233', userId: 4},
  { message: '12312', userId: 5},
  { message: '12313', userId: 6}
];
var dataToFind = '31233';`}
      </pre>
      <p>
        This is an interesting problem, as it can go one way or the other as a
        possible solution. In one context, I can do a general function that
        searches throughout every part of each object in the array, like this:
      </p>
      <pre>
        {`
      function findInItem(item, dataToFind){
        for (const [key, value] of Object.entries(item)) {
          if(value===dataToFind)
          window.alert(item)
        }
      }
      var found = data.find(item => findInItem(item, dataToFind))`}
      </pre>
      <Button variant="outlined" onClick={() => execute1(dataToFind)}>
        Click me to see it in action
      </Button>
      <p>
        This solution is general however, it requires a loop through the
        object's entries for each entry. That changes the Big O time from linear
        to quadratic and the algorithm becomes dependent on the number of
        key:value pairs in the object.
      </p>
      <hr />
      <p>
        In the wild, I would say that we could shorten this considering the data
        set. If we always know that only the message will be a string, and the
        dataToFind will also be, we can shorten this function significantly to a
        simple <code>array.find()</code> method.
      </p>
      <pre>
        {`
let found = data.find((item) => item.message === dataToFind);
window.alert(JSON.stringify(found));
`}
      </pre>
      <p>
        <code>Array.find()</code> is a linear operation, so complexity should be
        based on array length only.
      </p>
      <Button variant="outlined" onClick={() => execute2(dataToFind)}>
        Click me to see it in action
      </Button>
    </div>
  );
}
