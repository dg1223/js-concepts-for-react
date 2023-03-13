// number to string
const num1 = 52;
const numStr = num1 + "";

// string to number
const input = "56";
const inputNum = +input;

let isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");
isActive ? showUser() : hideUser();

// use && if the left side is true then the right side will be executed
isActive && showUser();

// use || if the left side is false then the right side will be excuted
isActive || hideUser;

// toggle boolean
isActive = !isActive;
