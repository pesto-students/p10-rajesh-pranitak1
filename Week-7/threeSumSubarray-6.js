function threeSumClosest(inputArray, target) {
    inputArray.sort((a, b) => a - b);
    let closestSum = Infinity;
    
    for (let i = 0; i < inputArray.length - 2; i++) {
      let left = i + 1;
      let right = inputArray.length - 1;
      
      while (left < right) {
        const sum = inputArray[i] + inputArray[left] + inputArray[right];
        
        if (sum === target) {
          return sum;
        }
        
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
        
        if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    
    return closestSum;
}
  
inputArray = [-1, 2, 1, -4]
target = 1
console.log(threeSumClosest(inputArray, target)); // 5


// Time Complexity: O(n^2)
// Space Complexity: O(1)
