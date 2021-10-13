function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1,4,8,8,2,4,6,6,4,32,21,66, 8,9,22], 3))