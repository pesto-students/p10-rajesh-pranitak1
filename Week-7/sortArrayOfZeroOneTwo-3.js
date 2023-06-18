function sortArray(arr) {
    let low = 0; // pointer for 0s
    let mid = 0; // pointer for 1s
    let high = arr.length - 1; // pointer for 2s

    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap current element with the element at the low pointer
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            // Move to the next element
            mid++;
        } else if (arr[mid] === 2) {
            // Swap current element with the element at the high pointer
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

let inputArray = [0, 2, 1, 2, 0];
console.log(sortArray(inputArray)); // [0, 0, 1, 2, 2]

// Time complexity: O(n)
// Space complexity: O(1)
