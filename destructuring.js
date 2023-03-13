// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0]
// const x = numbers[1]

// const [x, y] = [42, 65]

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(90, 34);

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar mastan"],
};

const [firstMovie, secondMovie] = student.movies;

console.log(x, y);
console.log(boxify);

// object destructuring
// const { name, age } = { name: "alu", age: 14 };
const employee = { id: 12, name: "alu", salary: 34000, age: 14 };
const { name, age } = { id: 12, name: "alu", salary: 34000, age: 14 };
const { salary, id } = employee;
