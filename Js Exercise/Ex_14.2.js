var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function extractOnlyValue(array, key) {
  return array.reduce((value, current) => {
    value.push(current[key]);
    return value;
  }, []);
}
console.log(extractOnlyValue(library, "title"));

let str = "hi my NAME is shmuel gabai ans im a stusent at appleseeds";
function countOnlyVowels(str) {
  str = str.toLowerCase().split("");
  return str.reduce((vowles, current) => {
    if (
      current === "a" ||
      current === "e" ||
      current === "o" ||
      current === "u" ||
      current === "i"
    ) {
      if (!vowles[current]) {
        vowles[current] = 0;
      }
      vowles[current]++;
    }
    return vowles;
  }, {});
}
console.log(countOnlyVowels(str));

function addKeyAndValue(array, key, val) {
  return array.reduce((acc, current) => {
    current[key] = val;
    return current;
  });
}
addKeyAndValue(library, "new", "!!!!");
console.log(library);
