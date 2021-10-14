function sameFrequency(num1, num2){
  
  let str1 = num1.toString();
  let str2 = num2.toString();
  
  let obj1 = {};
  let obj2 = {};
  
  for(let num of str1) {
    obj1[num] = (obj1[num] || 0) + 1;
    console.log(obj1);
  }
  for(let num of str2) {
    obj2[num] = (obj2[num] || 0) + 1;
    console.log(obj2);
  }
  
  if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true
  } else {
    return false;
  }

}

console.log(sameFrequency(1445, 1445));
