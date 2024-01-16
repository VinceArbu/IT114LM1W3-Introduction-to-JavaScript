/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
/* 
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Vince Joseph");
*/

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is defined using the function keyword followed by function name, while
// a function expression is defined using a variable assignment and does not require a function name.


// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
/* 
let calculateArea = function(length, width) {
    return length * width;
};

Area = calculateArea(2,5);
console.log(Area);
*/
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function that is passed as an argument to another function and is
// executed inside the outer function to complete some kind of routine or action. Example:

/*
function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

function displayResult(result) {
  console.log("The result is " + result);
}

add(5, 10, displayResult);
 */

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
/* 
function modifyArray(array, callback) {
    let modifiedArray = array.map(callback);
    return modifiedArray;
}

let numbers = [1, 2, 3, 4, 5];
let incrementByOne = function(number) {
  return number + 1;
};
let modifiedNumbers = modifyArray(numbers, incrementByOne);
console.log(modifiedNumbers);
*/

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
/* 
import { add, PI } from './mathUtils.js'
let twoNumbers = add(12, 1);

console.log("Sum of 2 numbers: ", twoNumbers); 
console.log("PI:", PI);
*/
// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
/* 
import isPalindrome from './isPalindrome.js';

console.log(isPalindrome("nasabayabasan"));
console.log(isPalindrome("radar"));
*/
// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: The require function is used to import modules and the module.exports variable is used to export modules.
// When a module is imported using require, Node.js looks for the module in the node_modules folder. The module.exports
// variable is used to define the public API of the module, which can be accessed by other modules that import it using
// require. On the other hand, the import and export keywords are used in ECMAScript modules, which are a newer module
// system introduced in JavaScript. The import keyword is used to import modules, white the export keyword is used to
// export modules.