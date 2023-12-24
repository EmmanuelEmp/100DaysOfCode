//Javascript Math functions
// The Javascript Math object is used to perform mathematical operations on numbers. 

// The Math.round() method returns the value of a number rounded
// to the nearest integer

let num = 2.8;
let num2 = 2.3;
let num3 = 2;
let num4 = [1, 2, 5, 7, 9]

console.log(Math.round(num))

// The Math.ceil() method

console.log(Math.ceil(num2)) // round up to the nearest integer

// The Math.floor() method
// Returns the same number if its already an integer, like the Math.ceil

console.log(Math.floor(num)) // The 'floor' is the opposite to 'ceiling'

//Math.random() method
// Returns random number between 0 and 1(exclusive)

console.log(Math.random())
// Generate between 0 and 6
console.log(Math.random() * 10);

// Math.max() method
// Returns the largest value of a number

console.log(Math.max(num4))

// Math.min() method
// Returns the smallest value of a number

console.log(Math.min(num4))

// combining the math.random and the math.floor method

console.log(Math.floor(Math.random() * 10))