// <---------  exercise   --------> =>  6kyu =>

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.
// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...
// your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// <---------  exsample   -------->

// <---------  solution  -------->

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return "";
  }
  let result = "";
  listOfCat.forEach((item, index) => {
    let num = 0;
    listOfArt.forEach((value) => {
      item == value[0] && (num += +value.slice(value.indexOf(" ") + 1));
    });
    result +=
      index == 0 ? (result += `(${item} : ${num})`) : ` - (${item} : ${num})`;

    num = 0;
  });
  return result;
}
