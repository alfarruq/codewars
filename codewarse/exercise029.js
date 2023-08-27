// <---------  exercise   --------> => 7kyu

// Create a function that returns the sum of the two lowest 
// positive numbers given an array of minimum 4 positive integers.
//  No floats or non-positive integers will be passed.

// Exsample
// when an array is passed like [19, 5, 42, 2, 77], the output should be 7.


// <---------  solution  -------->

function sumTwoSmallestNumbers(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
  }
  
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
