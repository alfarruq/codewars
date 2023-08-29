// <---------  exercise   --------> => 6kyu

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

//Examples:

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

// <---------  solution  -------->

function digitalRoot(n) {
  let result = String(n)
    .split("")
    .reduce((count, num) => {
      return count + Number(num);
    }, 0);
    return result >= 10 ? digitalRoot(result) : result
}

console.log(digitalRoot(55));
