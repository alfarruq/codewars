// <---------  exercise   --------> =>  6kyu =>

// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:

// <---------  exsample   -------->

// size = 3  => [[1,2,3],[2,4,6],[3,6,9]]

// <---------  solution  -------->

multiplicationTable = function (size) {
  let result = [];
  for (let i = 1; i <= size; i++) {
    let arr = [];
    for (let e = 1; e <= size; e++) arr.push(e * i);
    result.push(arr);
  }
  return result;
};
