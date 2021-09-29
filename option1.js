// Option 1: 

// /*
//   Write a function that finds `dataToFind` in the array `data`.
//   Explain the BigO time of the function.
// */

// var data = [
//   { message: '12313', userId: 0},
//   { message: '34212', userId: 1},
//   { message: '34234', userId: 2},
//   { message: '54532', userId: 3},
//   { message: '31233', userId: 4},
//   { message: '12312', userId: 5},
//   { message: '12313', userId: 6}
// ];
// var dataToFind = '31233';

var data = [
  { message: '12313', userId: 0},
  { message: '34212', userId: 1},
  { message: '34234', userId: 2},
  { message: '54532', userId: 3},
  { message: '31233', userId: 4},
  { message: '12312', userId: 5},
  { message: '12313', userId: 6}
];

function solution(dataToFind = '31233') {
  const result = data.find(d => d.message === dataToFind);
  console.log(result) ;
}
// BigO time is O(n) since it itorates once

solution();
