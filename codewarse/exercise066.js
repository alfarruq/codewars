// <---------  exercise   --------> => 5kyu

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. 
// Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements:
//  first the number the squared divisors of which is a square and then the sum of the squared divisors.


// <---------  Exsample   -------->

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

// <---------  solution  -------->

function listSquared(m, n) {
    function getDivisorsSum(num) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i * i;
      if (i !== num / i) {
        sum += (num / i) * (num / i);
      }
    }
  }
  return sum;
}

function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

const result = [];

for (let i = m; i <= n; i++) {
  const divisorsSum = getDivisorsSum(i);
  if (isPerfectSquare(divisorsSum)) {
    result.push([i, divisorsSum]);
  }
}

return result;
}

