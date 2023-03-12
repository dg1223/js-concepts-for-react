const numbers = [12, 34, 45, 56, 7];

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar mastan"],
};

// 1. Template string
const about = `My name is ${student.name}; My age: ${student.age}; I got ${numbers[2]}. I also like ${student.movies[0]}`;

console.log(about);

// 2. Arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 === 0;
const addThreeNums = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. spread operator
const newNumbers = numbers; // refers to the same memory space
const newNumbers2 = [...numbers]; // different locaiton in memory
// create a new array from an older array and add an elemnent
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumbers);
console.log(newNumbers2);
console.log(currentNumbers);
