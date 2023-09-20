// <---------  exercise   --------> => 5kyu

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// N! = 1 * 2 * 3 *  ... * N
// Be careful 1000! has 2568 digits...

// <---------  Exsample   -------->

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

// <---------  solution  -------->

function zeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
