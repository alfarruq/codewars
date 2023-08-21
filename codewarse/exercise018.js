// <------exercise--------> => 7kyu

// /A square of squares

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// <------solution-------->

const  isSquare = (n)=> Math.sqrt(n) == Math.trunc(Math.sqrt(n))


console.log(isSquare(5));
