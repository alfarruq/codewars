// <---------  exercise   --------> => 6kyu

// You are given an array(list) strarr of strings and an integer k. Your task is to return
//  the first longest string consisting of k consecutive strings taken in the array.

// <---------  Exsample   -------->

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
// Concatenate the consecutive strings of strarr by 2, we get:
// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".
// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// <---------  solution  -------->

function longestConsec(strarr, k) {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  let longest = "";
  for (let i = 0; i <= n - k; i++) {
    const current = strarr.slice(i, i + k).join("");
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}
