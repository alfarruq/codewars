// exercise => 8kyu

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

//<------solution-------->

function positiveSum(arr) {
    let sum = 0;
      arr.forEach(num => num > 0 &&( sum += num) )
    return sum;
  }  


console.log(positiveSum([1,2,3,4,5,-6,-3,10]));
