// <------exercise--------> => 7kyu

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// <------solution-------->

function accum(str) {
  let arr = str.split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let e = 0; e <= i; e++) {
      result +=
        e == 0
          ? `${i > 0 ? "-" : ""}${arr[i].toUpperCase()}`
          : arr[i].toLowerCase();
    }
  }
  return result;
}

console.log(accum("tesT"));
