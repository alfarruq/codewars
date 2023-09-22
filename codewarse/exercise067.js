// <---------  exercise   --------> => 5kyu

// Given a list of integers and a single sum value, return the first two values 
// (parse from the left please) in order of appearance that add up to form the sum.
// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.


// <---------  Exsample   -------->

 // sumPairs([11, 3, 7, 5], 10); // [3, 7]
 // sumPairs([4, 3, 2, 3, 4], 6); // [4, 2]
 // sumPairs([0, 0, -2, 3], 2); // null
 // sumPairs([10, 5, 2, 3, 7, 5], 10); // [3, 7]

// <---------  solution  -------->

function sumPairs(ints, s) {
    const seen = {};
  
  for (let i = 0; i < ints.length; i++) {
    const num = ints[i];
    const complement = s - num;
    
    if (seen.hasOwnProperty(complement)) {
      return [complement, num];
    }
    
    seen[num] = true;
  }
  
  return undefined;
}

