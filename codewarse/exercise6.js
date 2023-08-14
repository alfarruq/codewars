// exercise => 8 kyu
{
//   Define a function that removes duplicates
//   from an array of non negative numbers and returns it as a result.
//   The order of the sequence has to stay the same.

// Examples:
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
// }
}
// solution

function distinct(arr) {
  let result = [];
  arr.forEach((element) =>  ( !result.some(item => item == element) && result.push(element)));
  return result;
}

console.log(distinct([1, 2, 3,7, 3, 4, 2, 1, , 5, 6, 5]));
