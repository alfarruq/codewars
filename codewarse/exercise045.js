
// <---------  exercise   --------> => 8kyu

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within
// the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.


// <--------- Exsample   -------->
//  "the-stealth-warrior" gets converted to "theStealthWarrior"
//  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//  "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// <---------  solution  -------->

function toCamelCase(str) {
  let result = "";
  let tire = false;
  str.split("").forEach(v => {
    if (v == "-" || v == "_") tire = true;
    else {
      if (!tire)  result += v;
      else {
        result += v.toUpperCase();
        tire = false;
      }
    }
  });

  return result;
}

console.log(toCamelCase("the-stealth-warrior"));

