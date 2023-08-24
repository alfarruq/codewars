// <---------  exercise   --------> => 7kyu

// Exsample

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// <---------  solution  -------->

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((v, i) => v[0].toUpperCase() + v.slice(1))
    .join(" ");
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
