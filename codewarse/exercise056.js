// <---------  exercise   --------> => 5kyu

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// <--------- Exsample   -------->
// pigIt('Pig latin is cool'); => igPay atinlay siay oolcay
// pigIt('Hello world !');     => elloHay orldway !

// <---------  solution  -------->

function pigIt(str) {
  let alphabet = "qwertyuiopasdfghjklmnbvcxz";
  return str
    .split(" ")
    .map((v) =>
      alphabet.includes(v.slice(0, 1).toLowerCase())
        ? v.slice(1) + v.slice(0, 1) + "ay"
        : v
    )
    .join(" ");
}
