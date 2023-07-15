// Read in the initial values of x, y, and z
let x = 1
let y = 2
let z = 3

// Perform the circular permutation
let temp = x;
x = y;
y = z;
z = temp;

// Display the new values of x, y, and z
console.log("After circular permutation, the values are:");
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);