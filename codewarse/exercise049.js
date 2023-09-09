
// <---------  exercise   --------> => 6kyu

// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p


// <--------- Exsample   -------->
//   digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
//   digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
//   digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// <---------  solution  -------->

function digPow(n, p) {
  let count = String(n).split("")
    .reduce((total, item, index) => total + Math.pow(item, p + index), 0);
  return Number.isInteger(count / n) ? count / n : -1;
}
