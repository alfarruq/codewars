// <---------  exercise   --------> => 7kyu

// Given two integers a and b, which can be positive or negative,
//  find the sum of all the integers between and including them 
//  and return it. If the two numbers are equal return a or b.

// Exsample

// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// <---------  solution  -------->

function getSum(a, b){
  if(a = b) return a;
  let result = 0
  for( let i = a; i <= b; i++  ) result += i;
  return result
}

console.log(getSum(5,8));

