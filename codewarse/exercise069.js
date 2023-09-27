// <---------  exercise   --------> => 5kyu

// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns.
// ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// <---------  Exsample   -------->

//      ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
//      xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)
//      ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// <---------  solution  -------->

function chooseBestSum(t, k, ls) {
  let maxSum = null;

  function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  function generateCombinations(arr, k) {
    if (k === 0) return [[]];
    if (arr.length === 0) return [];

    const head = arr[0];
    const tail = arr.slice(1);

    const withoutHead = generateCombinations(tail, k);
    const withHead = generateCombinations(tail, k - 1).map((combination) => [
      head,
      ...combination,
    ]);

    return withoutHead.concat(withHead);
  }

  const allCombinations = generateCombinations(ls, k);

  for (const combo of allCombinations) {
    const currentSum = sum(combo);

    if (currentSum <= t) {
      if (maxSum === null || currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}
