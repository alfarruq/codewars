
// <---------  exercise   --------> => 5kyu

// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.


// <--------- Exsample   -------->
// moveZeros([false,1,0,1,2,0,1,3,"a"]) => returns[false,1,1,2,1,3,"a",0,0]

// <---------  solution  -------->

function moveZeros(arr) {
  let count = 0;
  arr.forEach((v) => v === 0 && count++);;
  let array = arr.filter((v) => v !== 0)
  for (let i = 0; i < count; i++) array.push(0);

  return array;
  
}

