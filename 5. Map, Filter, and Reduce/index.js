/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
/* 
const squares = numbers.map(number => number ** 2);
console.log(squares);
*/
// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
/* 
const evenNum = numbers.filter(number => number % 2 === 0);
console.log(evenNum);
*/
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
/* 
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`The sum of all numbers: ${sum}.`);
*/
// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
/* 
const upperCase = words.map(word => word.toUpperCase());
console.log(upperCase);
*/
// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
/*
const filteredWords = words.filter(word => word.length > 4);
console.log(filteredWords);
 */
// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
/* 
const concatenatedWords = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(concatenatedWords);
*/
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: These methods are three higher-order functions in JavaScript that operate on arrays.
// map() creates a new array with the results of calling a provided function on every element in the original array.
// filter() creates a new array with all elements that pass the test implemented by the provided function.
// reduce() executes a reducer function on each element of the array, resulting in a single output value.