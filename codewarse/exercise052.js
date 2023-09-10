
// <---------  exercise   --------> => 6kyu

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.


// <--------- Exsample   -------->
// NO

// <---------  solution  -------->

function findUniq(arr) {
    let result = arr.filter(v=> v != arr[0]);
    return result.length == 1 ? result[0]: arr[0];
}
