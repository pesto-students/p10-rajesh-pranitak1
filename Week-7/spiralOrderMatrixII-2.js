function spiralOrder(inputArray) {
    let topRow = 0;
    let bottomRow = inputArray.length - 1;
    let leftColumn = 0;
    let rightColumn = inputArray[0].length - 1;
    const result = [];

    while (topRow <= bottomRow && leftColumn <= rightColumn) {
        // left to right - add top row elements
        for (let i = leftColumn; i <= rightColumn; i++) {
            result.push(inputArray[topRow][i]);
        }
        topRow++;

        // top to bottom - add right column elements
        for (let i = topRow; i <= bottomRow; i++) {
            result.push(inputArray[i][rightColumn]);
        }
        rightColumn--;

        // right to left - add bottom row elements
        if (topRow <= bottomRow) {
            for (let i = rightColumn; i >= leftColumn; i--) {
                result.push(inputArray[bottomRow][i]);
            }
            bottomRow--;
        }

        // bottom to top - add left column elements
        if (leftColumn <= rightColumn) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(inputArray[i][leftColumn]);
            }
            leftColumn++;
        }
    }

    return result;
}

let inputArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(spiralOrder(inputArray)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]


// Time complexity: O(n)
// Space complexity: O(n)
