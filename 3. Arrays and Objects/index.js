/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

/* 
let first = numbers[0];
let fifth = numbers[4];
let last = numbers[numbers.length - 1];

console.log("First element: " + first + "\n" + "5th element: " + fifth + "\n" + "Last element: " + last);
*/
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
/* 
let minimum = Math.min(...numbers);
let maximum = Math.max(...numbers);
let sum = numbers.reduce((a, b) => a + b);
let avg = sum / numbers.length;

console.log("Minimum value: " + minimum + "\n" + "Maximum value: " + maximum + "\n" + "Average: " + avg);
*/
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, lists are used to store a sequence of values in the same data structure. 
// They can be modified, indexed, sliced, and used in the program.
// In JavaScript, an equivalent version of this data structure is called array.
// Arrays are more powerful than lists but can be harder to work with. Lists are more flexible than arrays, 
// as they can contain different types of data such as strings, numbers, and objects


// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const IT114L = {
    courseCode: "IT114L",
    courseName: "Web Systems and Technologies (Laboratory)",
    units: 3,
    numberOfStudents: 39,
};


// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

/* 
IT114L.professorName = "Job Lipat";

console.log("My Professor: " + IT114L.professorName);
*/

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    {
        courseCode: "CS107",
        courseName: "Information Management",
        instructor: "Prof. Dahlia",
        credits: 2
    },
    {
        courseCode: "IT114",
        courseName: "Web Systems and Technologies",
        instructor: "Prof. Ilao",
        credits: 2
    },
    {
        courseCode: "CS120",
        courseName: "Structures of Programming Languages",
        instructor: "Prof. Aurelia",
        credits: 3
    },
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
/*
let totalUnits = 0;
for (let i=0; i< courses.length;i++){
    totalUnits += courses[i].credits;
}

console.log("Total Units Enrolled this term: " + totalUnits);
*/

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects in Python would be the dictionaries. Both objects in other
// programming language JavaScript and dictionaries in Python are key-value pairs, allowing
// the programmer to associate data with specific names or keys.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
/* 
let spreadNumbers = [...numbers, 99];

console.log(numbers);
console.log("\nNew Number Array:", spreadNumbers);
*/
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
/*
const { courseCode, units } = { ...IT114L };

console.log("Extracted Objects:");
console.log(`Course Code: ${courseCode}`);
console.log(`Units: ${units}`);
 */
