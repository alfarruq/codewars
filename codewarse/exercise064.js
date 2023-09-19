// <---------  exercise   --------> => 5kyu

// Complete the function scramble(str1, str2) that returns true if a portion of str1 
// characters can be rearranged to match str2, otherwise returns false.

// <---------  Exsample   -------->

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


// <---------  solution  -------->

function scramble(str1, str2) {
    let newStr1 = str1;
      
      
      for (let i = 0; i < str2.length; i++) {
        if(!newStr1.includes(str2[i])) return false;
        newStr1 = newStr1.replace(str2[i],'');
      }
    
    return true;
  }