// <------exercise--------> => 7kyu

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character.
//  If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"

// <------solution-------->

function getMiddle(s) {
  let len = s.length;
  return len % 2 == 0 ? `${s[len / 2-1]}${s[len / 2 ]}` : s[(len - 1) / 2 ];
}

console.log(getMiddle("hello"));
