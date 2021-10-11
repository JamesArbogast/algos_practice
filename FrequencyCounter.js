
  //create for loop to loop through first array and compare to second array
  //if any value in the first array doesnt have squared value in second array return false
  //else once loop is finished return true

  function same(arr1, arr2) {

    for (let num in arr1) {
      numSq = num*num;
      if(!arr2.includes(numSq)) {
        return false;
      }
    }

    return true;
}

same([1,2,3], [1,4,9])