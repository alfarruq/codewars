// exercise => 8kyu
{
  // Input: Array of elements
  // ["h","o","l","a"]
  // Output: String with comma delimited elements of the array in th same order.
  // "h,o,l,a"
}

// solution

const printArray = (array) => array.join(",");

console.log(printArray([2, 4, 5, 2]));
