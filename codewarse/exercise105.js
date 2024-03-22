// <---------  exercise   --------> =>  5kyu =>

// An array might have many values. These are ordererd in a specific way. However, it's possible to display them in other order.
// Your Task
// Given a multi-dimensional array of integers, your goal is to find how many ways you can arrange that same array, so that the values are in a different sequence.
// findCombos([1,2,2]);
// 3 -> [1, 2, 2], [2, 1, 2]
//      [2, 2, 1]
// However, an array might contain another array containing other values. You still have to find the number of possible sequences for these.
// Multi-dimensional arrays




// <---------  exsample   -------->

// <---------  solution  -------->

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function countUniquePermutations(arr) {
  const counts = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  const numerator = factorial(arr.length);
  const denominator = Object.values(counts).reduce(
    (acc, val) => acc * factorial(val),
    1
  );
  return numerator / denominator;
}

function flattenArray(arr) {
  return arr
    .reduce((acc, val) => {
      if (Array.isArray(val)) {
        acc.push(...flattenArray(val));
      } else if (val !== undefined && val !== null) {
        acc.push(val);
      }
      return acc;
    }, [])
    .filter((val) => val !== undefined && val !== null && val !== "");
}

function findCombos(arr) {
  const flattened = flattenArray(arr).filter(
    (val) => !Array.isArray(val) || val.length > 0
  );
  if (flattened.length < 2) return 1;
  return countUniquePermutations(flattened);
}
