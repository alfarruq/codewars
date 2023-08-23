// <------exercise--------> => 7kyu

//  Check to see if a string has the same amount of 'x's and 'o's.
//  The method must return a boolean and be case insensitive.
//  The string can contain any char.

// Examples input/output:

// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true

// <----------  solution  -------->

function XO(str) {
  let count = 0;
  if (!(str.includes("o") | str.includes("x"))) return true;
  for (let l of str.toLowerCase()) {
    if (l == "o") count++;
    else if (l == "x") count--;
  }
  return count == 0 ? true : false;
}

console.log(XO("Oo"));
