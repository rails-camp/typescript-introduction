// +, -, *, /, %, ++, --

var numOne : number = 1;
var numTwo : number = 2;

// Addition
console.log("Addition:");
console.log(numOne + numTwo);

// Subtraction
console.log("Subtraction:");
console.log(numOne - numTwo);

// Multiplication
console.log("Multiplication:");
numOne = 10;
numTwo = 15;
console.log(numOne * numTwo);

// Division
console.log("Division:");
console.log(numOne / numTwo);

// Modulus
console.log("Modulus:");
var numThree : number = 2;
var numFour : number = 21;
console.log(numFour % numThree);

// Incrementor
console.log("Incrementor:");
var x : number = 0;

while (x < 10) {
	console.log(x);
	x++;
}

// Decrementor
console.log("Decrementor:");
var x : number = 10;

while (x > 0) {
	console.log(x);
	x--;
}