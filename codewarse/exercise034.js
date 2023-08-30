// <---------  exercise   --------> => 6kyu

// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

//Examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// <---------  solution  -------->

function likes(names) {
  
  switch(names.length){
      case 0 : return "no one likes this"
        break ;
      case 1 : return `${names[0]} likes this`
        break;
      case 2 : return `${names[0]} and ${names[1]} like this` 
        break;
      case 3 : return `${names[0]}, ${names[1]} and ${names[2]} like this`
        break ;
      default: return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
  }
}


console.log(likes(['Alex']));
