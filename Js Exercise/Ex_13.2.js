const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const foodDescending = foods.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
console.log(foods);
const foodAscending = foods.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
console.log(foods);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const foodUpperDescending = foodsWithUpperCase.sort(
  (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
);
console.log(foodsWithUpperCase);
const foodUpperAscending = foodsWithUpperCase.sort(
  (a, b) => b.charCodeAt(0) - a.charCodeAt(0)
);
console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
// const wordDescending = words.sort((a, b) => a.length - b.length);
// console.log(words);
const wordlongest = words.sort((a, b) => b.length - a.length);
console.log(words);
