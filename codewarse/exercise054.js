

// <---------  exercise   --------> => 6kyu

// You will be given an array of numbers. You have to sort the odd numbers
// in ascending order while leaving the even numbers at their original positions.


// <--------- Exsample   -------->
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// <---------  solution  -------->

function sortArray(arr) {
  let sortArr = arr.filter((v) => v % 2 == 1 || v % 2 == -1 ).sort((a, b) => a - b);
  let count = -1;
  let result = arr.map((v) => {
    if (v % 2 == 1 || v % 2 == -1) {
      count++;
      return sortArr[count];
    } else return v;
  });
  return result;
}

