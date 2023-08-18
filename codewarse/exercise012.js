// exercise => 7kyu

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//<------solution-------->

function disemvowel(str) {
  let result = "";
  const vowel = "aeiouAEIOU";
  for (const i of str) {
    if (!vowel.includes(i)) result += i;
  }
  return result;
}

console.log(disemvowel("This website is for losers LOL!"));
