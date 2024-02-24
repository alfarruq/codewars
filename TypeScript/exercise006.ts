// <---------  exercise   --------> =>  6kyu => Rectangle into Squares ?

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

export const sqInRect = (l: number, w: number): null | number[] => {
  if (l == w) return null;
  let result: number[] = [];
  while (l > 0 && w > 0) {
    result.push(l > w ? w : l);
    l > w ? (l -= w) : (w -= l);
  }
  return result;
};

console.log(sqInRect(5, 3));
