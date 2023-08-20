// <------exercise--------> => 7kyu

// Your task is to make a function that can take any non-negative
//  integer as an argument and return it with its digits in descending
//   order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 123456789 Output: 987654321

// <------solution-------->

function descendingOrder(n) {
  return 1*Array.from(String(n), Number)
    .sort((a, b) => b - a)
    .join('');
}

console.log( descendingOrder(326434711));
