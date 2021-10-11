//creat function that takes two strings
//compare the length of one string to another and if they are not the same length return false
//create objects for each of the strings
//loop through each object seperately (not nested)
//create key value pairs by the letter as the key and the value is the number of times the char shows up
//loop through one object and check if its values equal the values of the other object

function anagram(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }

  let str1Obj = {};
  let str2Obj = {};

  for(let val of str1) {
    str1Obj[val] = (str1Obj[val] || 0) + 1
    console.log(str1Obj);
  }
  for(let val of str2) {
    str2Obj[val] = (str2Obj[val] || 0) + 1
    console.log(str2Obj);
  }

  for(let key in str1Obj) {
    if(str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }

  console.log(str1Obj);
  console.log(str2Obj);
  return true;
}

console.log(anagram("ooz", "zoo"));

//refactored

function validAnagram(first,second) {
  if(first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists , increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for(let i = 0; i < second.length; i++) {
    let letter = second[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  
  return true;
}

console.log(validAnagram('anagram', 'nagaram'));

