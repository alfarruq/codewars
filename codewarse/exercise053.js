

// <---------  exercise   --------> => 6kyu

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


// <--------- Exsample   -------->
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// <---------  solution  -------->

function solution(str){
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let pushStr = str.slice(i, i + 2)
    result.push(pushStr.length == 2? pushStr: pushStr+'_');
  }
  return result
}

