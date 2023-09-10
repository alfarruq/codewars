
// <---------  exercise   --------> => 6kyu

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// <--------- Exsample   -------->
// NO

// <---------  solution  -------->

function isPangram(string){
  let alphabet = "qwertyuiopasdfghjklzxcvbnm";
  for (let l of alphabet) 
    if (!string.toLowerCase().includes(l)) {
      return false;
      break;
    }
  return true;
}


