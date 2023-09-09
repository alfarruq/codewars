

// <---------  exercise   --------> => 6kyu

//   You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the
//   integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.


// <--------- Exsample   -------->
//   findEvenIndex([1,2,3,4,3,2,1]),3, 
//   findEvenIndex([1,2,3,4,5,6]),-1,

// <---------  solution  -------->

function findEvenIndex(arr){
  let result = -1;
  for (let i = 0; i < arr.length; i++) 
    if( arr.slice(0,i).reduce((t,v)=>t+v,0) == arr.slice(i+1).reduce((t,v)=>t+v,0)){
        result = i
        break;
    }
  
  return result
}

