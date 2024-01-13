/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

/* 
var x = 13;
console.log(x);
*/
/*
console.log(x);
var x = 13;
Result: undefined
*/


// TODO 1.2 Use the let keyword to define a variable.
// Your code here

/* 
let y = 0;
if (y === 0) {
    let y = 143;
    console.log(y);
}
console.log(y);
*/

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

/*
const favnum_ = 3;
console.log("my favorite number is: " + favnum_);

// Another sample: 
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c);
*/

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var statement declares a globally-scoped variables while
// let statement declares a re-assignable, block-scoped variables, optionally initializing each to a value.
// Lastly, const declaration declares block-scoped local variables, however the value of the constant cannot
// be changed through reassignment, but if a const declaration is an 'object', 
// its properties can be manipulate.


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

//Arithmetic operators

/* 
var divide = 1 / 2; //Division
var remainder = 12 % 5; //Remainder
var unary = +true; //Unary plus
var expo = 3**12; //Exponentiation
console.log(divide);
console.log(remainder);
console.log(unary);
console.log(expo);
*/

// Checkpoint 1.2 What operators did you use?
// Answer: I use division operator, remainder operator, unary plus operator, and exponentiation operator
// Your code here


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

/* 
var age = 23;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

console.log("wave " + "to " + "earth");

let word = "looks";
word += "maxxin";
console.log(word);
*/
// Checkpoint 1.3 What operators did you use?
// Answer: I use concatenation operator, shorthand assignment operator, and conditional operator.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

/* 
const a6 = false && "Cat"
const o5 = "Cat" || "Dog";
const n3 = !"Cat";

console.log(a6,o5,n3);
*/
// Checkpoint 1.4 What operators did you use?
// Answer: I use AND operator, OR operator, and NOT operator.


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It evaluates to True, this is because the == operator performs coercion meaning that it
// converts the operand to a common type before comparing them. The [] is coerced to the boolean value false,
// and then compared to the boolean vlaue.

// Your code here