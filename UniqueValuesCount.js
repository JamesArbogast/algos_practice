// let array1 = [1,2,2,3]

// function countUniqueValues(arr){
//   if(arr.length == 0) {
//       return 0;
//   }

//   let idx1;
//   let idx2;
  
//   for(let i = 0; i < arr.length; i++) {
//     idx1 = i
//     idx2 = i + 1
//     let val1 = arr[idx1];
//     let val2 = arr[idx2];

//     if(val1 == val2) {
//         idx2++;
//     } else {
//         idx1++;
//         idx2++;
//         val1 = val2;
//     }
//   }
  
//   return idx1;
// }

// console.log(array1.length)
// console.log(countUniqueValues(array1));

//refactored
function countUniqueValues(arr) {
  if(arr.length == 0) { return 0;}
  var i = 0;
  for(var j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1,2,2,3,3,3,4]));