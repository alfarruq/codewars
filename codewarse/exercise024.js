// <---------  exercise   --------> => 7kyu

// Your task is to write a function maskify, 
// which changes all but the last four characters into '#'.

// Exsample

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// <---------  solution  -------->

function maskify(c) {
  let result = "";
  if (c.length > 4) {
    for (let i = 0; i < c.length - 4; i++) result += "#";
    return result + c.slice(c.length - 4);
  } else return c;
}

console.log(maskify("5616"));
