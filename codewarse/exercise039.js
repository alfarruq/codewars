
// <---------  exercise   --------> => 6kyu

//  Write a function that will return the count of distinct case-insensitive alphabetic 
//  characters and numeric digits that occur more than once in the input string.
//  The input string can be assumed to contain only alphabets 
//  (both uppercase and lowercase) and numeric digits.


// <--------- Exsample   -------->

// "abcde"          -> 0 # no characters repeats more than once
// "aabbcde"        -> 2 # 'a' and 'b'
// "aabBcde"        -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times


// <---------  solution  -------->

function duplicateCount(code){
  let count = '';
  code.split('').forEach((v,i)=> (code.slice(i+1).toLowerCase().includes(v) && !count.includes(v) ) && (count += v) )
  return count.length
}

console.log(duplicateCount("Indivisibility"));
