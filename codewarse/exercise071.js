// <---------  exercise   --------> => 5kyu

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:

// <---------  Exsample   -------->

// ["  *  ", " *** ", "*****"];

// <---------  solution  -------->

function towerBuilder(n) {
  return [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
  );
}
