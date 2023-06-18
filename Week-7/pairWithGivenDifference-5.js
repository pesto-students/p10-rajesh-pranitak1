function findPairWithDifference(A, B) {
    const set = new Set();
    
    for (let i = 0; i < A.length; i++) {
      const target1 = A[i] + B;
      const target2 = A[i] - B;
      
      if (set.has(target1) || set.has(target2)) {
        return 1;
      }
      
      set.add(A[i]);
    }
    
    return 0;
}

  
let inputArray = [5, 10, 3, 2, 50, 80];
console.log(findPairWithDifference(inputArray, 78)); // 1


// Time Complexity: O(n)
// Space Complexity: O(n)
