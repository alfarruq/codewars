function wave(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result.push(
        str.slice(0, i) +
          str.slice(i, i + 1).toLocaleUpperCase() +
          str.slice(i + 1)
      );
    }
  }
  return result;
}

let str = "two words";

console.log(wave(str));

if (" ") {
  console.log("Success");
}
