// <---------  exercise   --------> =>  7kyu =>

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// <---------  exsample   -------->

// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

// <---------  solution  -------->

export function partlist(arr: string[]): string[][] {
  let result:string[][] = []

for (let i = 1; i < arr.length; i++) {
    let firstPart:string = arr.slice(0, i).join(' ');
    let secondPart:string = arr.slice(i).join(' ');
    result.push([firstPart, secondPart]);
}

return result;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

