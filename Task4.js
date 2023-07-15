

let intervals =[ [1,5], [6,10], [12,15], [3,7]]
// let intervals = [[1,5], [6,10], [12,15]]

// Initialize a flag to indicate if any intervals overlap
let overlap_found = false;

// Check if any two intervals overlap
for (let i = 0; i < intervals.length - 1; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
        if (intervals[i][1] >= intervals[j][0]) {
            overlap_found = true;
            break;
        }
    }
    if (overlap_found) {
        break;
    }
}

// Display the result
if (overlap_found) {
    console.log("Intervals are overlapping");
} else {
    console.log("No intervals overlap");
}