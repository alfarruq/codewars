// <---------  exercise   --------> => 6kyu

// Complete the solution so that it reverses the string passed into it.

// <---------  Exsample   -------->
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// <---------  solution  -------->

function solution(str) {
  return str.split("").reverse().join("");
}
