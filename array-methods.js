const products = [
  { name: "laptop", price: 32000, brand: "Lenovo", colour: "silver" },
  { name: "phone", price: 7000, brand: "iphone", colour: "golden" },
  { name: "watch", price: 3000, brand: "casio", colour: "yellow" },
  { name: "sunglass", price: 300, brand: "rayban", colour: "black" },
  { name: "camera", price: 9000, brand: "canon", colour: "grey" },
];

// map: take a series of items from an array and store them in another array
const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);

// forEach: same as above but without returning anything
products.forEach((product) => console.log(product.colour));

products.forEach((product) => {});

// filter: same as map but only for the ones that match a condition
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

const specificName = products.filter((product) => product.name.includes("n"));
console.log(specificName);

// find: same as filter but return only the first match
const special = products.find((product) => product.name.includes("n"));
console.log(special);
