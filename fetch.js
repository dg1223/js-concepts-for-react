const student = [
  {
    name: "Salib Khan",
    age: 32,
    movies: ["king khan", "Dhakar mastan"],
  },
  {
    name: "Sakib Khan",
    age: 33,
    movies: ["kingg khan", "Dhakarr mastan"],
  },
];

const studentJSON = JSON.stringify(student);
const studentObject = JSON.parse(studentJSON);

fetch(url)
  .then((res) => res.JSON())
  .then((data) => console.log(data));

// forEach -> on arrays
// for of -> on array-like objects
// for in -> on objects

// create a new array without a specific item
// remove age from student means create a new array wihtout age
const remaining = student.filter((attribute) => attribute.age !== 32);
