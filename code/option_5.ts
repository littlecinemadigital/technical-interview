/**
 * Option 5:
 * Explain why this function always logs 3.
 * Modify this function to output the current value of i.
 */

 for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}

// The primary reason for this is due to the way `var` works
// with scope. var is scoped to its immediate function and as a result,
// will return the last value of i, 3 in this case.

// A solution for this could be to replace `var` with `let` which is
// block scoped and will use the latest (current) value of i
for (let i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}