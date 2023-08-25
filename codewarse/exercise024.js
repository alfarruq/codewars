// <---------  exercise   --------> => 7kyu

// In DNA strings, symbols "A" and "T" are complements of each other,
//  as "C" and "G". Your function receives one side of the DNA 
//  (string, except for Haskell); you need to return the other complementary side.
//   DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Exsample

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// <---------  solution  -------->

function DNAStrand(dna) {
  let result = "";
  for (let l of dna) {
    switch (l) {
      case "A":
        result += "T";
        break;
      case "T":
        result += "A";
        break;
      case "C":
        result += "G";
        break;
      default:
        result += "C";
        break;
    }
  }
  return result;
}

console.log(DNAStrand("ATTGC"));
