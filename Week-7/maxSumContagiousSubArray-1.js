function maxSumSubarray(inputArray) {
    let maxSum = inputArray[0];
    let currentSum = inputArray[0];
  
    for (let i = 1; i < inputArray.length; i++) {
      currentSum = Math.max(inputArray[i], currentSum + inputArray[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  let inputArray = [1, 2, 3, 4, -10];
  console.log(maxSumSubarray(inputArray)); // 10
  
//time complexity  - O(n)
//space complexity - O(1)
