// <---------  exercise   --------> => 7kyu

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// <---------  solution  -------->

function findShort(s) {
  // <-----one solution-------=> return s.split(' ').map(v=>v.length).sort()[0]

  let arr = s.split(" ");
  let result = 10;
  for (let text of arr) {
    result > text.length && (result = text.length);
  } 
  return result
}
console.log(findShort("Let's travel abroad shall we"));

