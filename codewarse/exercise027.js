// <---------  exercise   --------> => 7kyu

// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time 
// (like "0830" or "2030") sounds easy enough, right? Well,
//  let's see if you can do it!

// You will have to define a function,
//  which will be given an hour (always in the range of 1 to 12, inclusive), 
//  a minute (always in the range of 0 to 59, inclusive),
//   and a period (either "am" or "pm") as input.

// Exsample

  // no 

// <---------  solution  -------->

function to24hourtime(hour, minute, period) {
  let m = minute < 10 ? "0" + minute : minute;
  if (period == "am") {
    let h = hour < 10 ? "0" + hour : hour;
    return "" + (Number(h) == 12 ? '00' : h) + m;
  }
  return "" + (hour == 12 ? 12 : hour + 12) + m;
}

console.log(to24hourtime( 12,  0, "am"));

