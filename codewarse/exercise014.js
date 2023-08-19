// exercise => 7kyu
// In this little assignment you are given a string of space separated
// numbers,and have to return the highest and lowest number.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"

//<------solution-------->

function highAndLow(numbers){
  let arr = numbers.split(' ');
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}

console.log(highAndLow("1 2 3 4 5"));
