// <---------  exercise   --------> => 8kyu

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.


// <--------- Exsample   -------->

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// <---------  solution  -------->

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function alphabetPosition(text) {
  let result = [];
  for (let latter of text.toUpperCase()) {
    for (let i = 0; i < alphabet.length; i++) {
      latter == alphabet[i] && (result.push(i+1));
      continue;
    }
  }
  return result.join(' ')
}
