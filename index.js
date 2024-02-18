function findNextSquare(sq) {
  let numSq = Math.sqrt(sq);
  return numSq == Math.trunc(numSq) ? Math.pow(numSq + 1, 2) : -1;
}

console.log(findNextSquare(9));
