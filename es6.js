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
