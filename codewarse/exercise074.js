// <---------  exercise   --------> => 6kyu

// Your task is to construct a building which will be a pile of n cubes. The cube at the 
// bottom will have a volume of 3n 3,the cube above will have volume of (−1)3  (n−1)  3
//  and so on until the top which will have a volume of 
// You are given the total volume m of the building. Being given m can you find the 
// numbern of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an 
// integer m and you have to return the integer n such as 


// <---------  Exsample   -------->

// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

// <---------  solution  -------->


function findNb(m) {
    let n = 1;
    let totalVolume = 0;

    while (totalVolume < m) {
        totalVolume += Math.pow(n, 3);
        if (totalVolume === m) {
            return n;
        }
        n++;
    }

    return -1;
}




