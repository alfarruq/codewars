// exercise => 7kyu
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//<------solution-------->

function getCount(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    (str[i] == "a") |
      (str[i] == "e") |
      (str[i] == "i") |
      (str[i] == "o") |
      (str[i] == "u") && (result += 1);
  }
  return result;
}


console.log(getCount('wjdbuwbdueqgfyef'));
