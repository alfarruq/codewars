// <---------  exercise   --------> => 7kyu

// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.

//Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// <---------  solution  -------->

function longest(s1, s2) {
  let result = [];
  for (let l of (s1 + s2)) {
    !result.includes(l) && result.push(l);
  }
  return result.sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"));
