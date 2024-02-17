// <---------  exercise   --------> =>

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// <---------  exsample   -------->

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// <---------  solution  -------->

function getSum(a, b) {
  let res = 0;
  if (b >= a) {
    for (let i = a; i <= b; i++) res += i;
  } else {
    for (let i = b; i <= a; i++) res += i;
  }

  return res;
}

console.log(getSum(5, 5));
