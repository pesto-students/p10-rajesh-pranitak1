function findNextGreaterElements(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);
  
    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = arr[i];
      }
  
      stack.push(i);
    }
  
    return result;
  }

  
  const arr = [4, 6, 3, 2, 8, 1, 9];
  console.log(findNextGreaterElements(arr)); // Output: [6, 8, 8, 8, 9, 9, -1]

// Time Complexity: O(n)
// Space Complexity: O(n)