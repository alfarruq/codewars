// <------exercise--------> => 7kyu

// An isogram is a word that has no repeating letters, consecutive
// or non-consecutive.Implement a function that determines
// whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// <----------  solution  -------->

function isIsogram(str) {
    let arr = str.toLowerCase().split("").sort();
    return !arr.some((v, i) => v === arr[i + 1]);
}
  
  console.log(isIsogram("isogram"));
