// <---------  exercise   --------> =>  6kyu => Which are in?

// Write a method (or function, depending on the language) that converts a string to camelCase, 
// that is, all words must have their first letter capitalized and spaces must be removed.

// <---------  exsample   -------->

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// <---------  solution  -------->

String.prototype.camelCase=function(){
  return  this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
