// <---------  exercise   --------> => 6kyu

// Your goal in this kata is to implement a difference function,
//  which subtracts one list from another and returns the result.

// It should remove all values from list a,
//  which are present in list b keeping their order.

  // Exsample

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([1,2],[1]) == [2]

// <---------  solution  -------->

function arrayDiff(a, b) {
  let result = a;
  if (b.length >= 1)
    for (let i = 0; i < b.length; i++) {
      result = result.filter((value) => value != b[i]);
    }
  return result;
}

console.log(arrayDiff([1, 2, 3, 3], []));

