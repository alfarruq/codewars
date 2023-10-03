// <---------  exercise   --------> => 6kyu

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// <---------  Exsample   -------->

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// <---------  solution  -------->

function findMissingLetter(array) {
  return String.fromCharCode(
    array
      .find((c, i) => array[i + 1].charCodeAt() - c.charCodeAt() !== 1)
      .charCodeAt() + 1
  );
}
