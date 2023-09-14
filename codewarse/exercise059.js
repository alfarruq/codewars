// <---------  exercise   --------> => 5kyu

// with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string,
//  they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// <--------- Exsample   -------->
// No 

// <---------  solution  -------->


function rot13(message){
    let result = "";
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
    for (let l of message) {
      let index =alphabet.indexOf(l);
      result += index >=0? alphabet[index+13] : l;
    }
    return result;
  }