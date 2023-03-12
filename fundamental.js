/*
6 fundamentals of programming
*/

// 1. How to declate a variable using let and const
const fathersName = "Arnold";
let season = "rainy";
season = "winter";

// 2. Six (6) basic conditions: > < === !== <= >=
// multiple conditions: && ||

// 3. Array
// index
// length, push
const numbers = [12, 34, 45, 56, 7];
numbers[0] = 56;

// 4. loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(35, 78);

// 6. Object
// three (3) ways to access property by name
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar mastan"],
};

const myVar = "age";

console.log(student.age); // directly by property
console.log(student["age"]); // access via property name string
console.log(student[myVar]); // access via property name in a variable
