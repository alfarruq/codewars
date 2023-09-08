
// <---------  exercise   --------> => 6kyu

//  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
//  elements with the same value next to each other and preserving the original order of elements.

// <--------- Exsample   -------->
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// <---------  solution  -------->

var uniqueInOrder=function(iterable){
  let arr = typeof iterable == 'string' ?  iterable.split(''): iterable
  return arr.filter((v,i)=> v != arr[i-1] )
}
