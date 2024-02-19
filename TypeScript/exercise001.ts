// <---------  exercise   --------> =>  6kyu Remove First and Last Character

// Complete the findNextSquare method thaIt's pretty straightforward. Your goal is to create a function that removes
//  the first and last characters of a string. You're given one parameter, the original string.
// You don't have to worry about strings with less than two characters.e then -1 should be returned. You may assume the parameter is non-negative.

// <---------  exsample   -------->

// No exsample

// <---------  solution  -------->

export function removeChar(str: string): string {
    return str.slice(1, -1);
  }
  
  console.log(removeChar(" hello"));