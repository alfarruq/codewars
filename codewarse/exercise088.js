// <---------  exercise   --------> =>  6kyu => Which are in?

// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).alternative text
// Can you translate this drawing into an algorithm?
// You will be given two dimensions
// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// <---------  exsample   -------->

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

// <---------  solution  -------->

function sqInRect(lng, wdth) {
  if (lng == wdth) return null;
  let result = [];
  function check(a, b) {
    if (a == b) result.push(a);
    else if (a > b) {
      result.push(b);
      check(a - b, b);
    } else {
      result.push(a);
      check(a, b - a);
    }
  }

  check(lng, wdth);
  return result;
}
