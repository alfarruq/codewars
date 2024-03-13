// <---------  exercise   --------> =>  6kyu =>

// John has invited some friends. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.at will take the number of petals of each flower and return true if they are in love and false if they aren't.

// <---------  exsample   -------->

// No exsample

// <---------  solution  -------->

export function meeting(s: string): string {
  let guests: string[] = s.toUpperCase().split(";");

  let newGuests: { first: string; last: string }[] = guests.map((pair) => {
    let names: string[] = pair.split(":");
    return { first: names[0], last: names[1] };
  });
  newGuests.sort((a, b) => {
    if (a.last === b.last) return a.first.localeCompare(b.first);
    else return a.last.localeCompare(b.last);
  });

  let result = newGuests
    .map((guest) => "(" + guest.last + ", " + guest.first + ")")
    .join("");

  return result;
}
