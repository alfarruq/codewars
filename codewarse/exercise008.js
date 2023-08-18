// exercise => 8kyu
{
  // sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
  // sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
  // sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
  // sumMul(4, -7)  ==> "INVALID"
}

// solution

function sumMul(n, m) {
  let result = null;
  for (let i = 0; i * n < m; i++) result += i * n;
  return m > n ? result : "INVALID";
}

console.log(sumMul(2,78));
