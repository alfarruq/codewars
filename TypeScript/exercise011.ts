// <---------  exercise   --------> =>  5kyu =>

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// <---------  exsample   -------->

// "EBG13 rknzcyr." -> "ROT13 example."
// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

// <---------  solution  -------->

export function rot13(str: string): string {
  return str.replace(/[a-zA-Z]/g, function (char) {
    let shift = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - shift + 13) % 26) + shift
    );
  });
}
