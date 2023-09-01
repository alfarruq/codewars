
// <---------  exercise   --------> => 6kyu

// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?


// <--------- Exsample   -------->

//   makeNegative(1);    // return -1
//   makeNegative(-5);   // return -5
//   makeNegative(0);    // return 0


// <---------  solution  -------->

function makeNegative(num) {
  return num < 0 ?  num : -num  
}
