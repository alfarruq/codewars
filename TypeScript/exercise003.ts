// <---------  exercise   --------> =>  6kyu => Which are in?

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// <---------  exsample   -------->

// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// <---------  solution  -------->

export function inArray(a1: string[], a2: string[]): string[] {
  let str = a2.join(" ");
  return a1.filter((item) => str.includes(item)).sort();
}
