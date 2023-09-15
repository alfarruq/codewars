// <---------  exercise   --------> => 5kyu

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// <--------- Exsample   -------->
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// <---------  solution  -------->


let maxSequence = function (arr) {
  let maxSeq = 0;
  let currSeq = 0;
  for (const x of arr) {
    currSeq = Math.max(0, currSeq + x);
    maxSeq = Math.max(currSeq, maxSeq);
  }
  return maxSeq;
};