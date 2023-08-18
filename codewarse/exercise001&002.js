1.// first exercise
// DESCRIPTION:
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string => "Hello, John Smith! Welcome to Phoenix, Arizona!"

1.// first solutions

function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')


2.// second exercise

// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

2.// second solution

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
}
removeEveryOther( ["Keep", "Remove", "Keep", "Remove", "Keep",])