
// <---------  exercise   --------> => 6kyu

//  A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, 
//  each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// <--------- Exsample   -------->
//  153  =>  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153                ==>  true
//  1652 =>  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938  ==>  false

// <---------  solution  -------->

function narcissistic(value) {
  let arr = String(value).split('");
  let total = arr.reduce(
    (total, item) => total + Math.pow(item, arr.length), 0);

  return total === value;
}


console.log(narcissistic(123));



