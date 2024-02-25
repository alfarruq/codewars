// <---------  exercise   --------> =>  6kyu => Make the Deadfish Swim

// Write a simple parser that will parse and run Deadfish.
// Deadfish has 4 commands, each 1 character long:
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// <---------  exsample   -------->

// parse("iiisdoso") => [ 8, 64 ]

// <---------  solution  -------->

export function parse(data: string): number[] {
  let result:number[] = [];
let value:number = 0;
for (let latter of data) {
switch (latter) {
  case "i":
    value++;
    break;
  case "d":
    value--;
    break;
  case "s":
    value *= value;
    break;
  case "o":
    result.push(value);
    break;
}
}
return result;
}
