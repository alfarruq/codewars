// <---------  exercise   --------> => 5kyu

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


// <--------- Exsample   -------->

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// <---------  solution  -------->


function generateHashtag (str) {
  if (str == "") return false;
  let result = "#";
  for (let i = 0; i < str.length; i++) {
    str.slice(i, i + 1) != " " &&
      (result +=
        str.slice(i - 1, i) == " " || i == 0
          ? str.slice(i, i + 1).toUpperCase()
          : str.slice(i, i + 1));
  }
  return( result.length > 1 && result.length <=140)? result : false;
}