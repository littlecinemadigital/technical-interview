// Explain why this function always logs 3.
// Modify this function to output the current value of i.

for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}

// that's because itoration ends by 3 before executing console.log function.
// so the last value of i will be printed
