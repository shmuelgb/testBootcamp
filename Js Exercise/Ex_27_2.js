const strArr = ["sam", "hello", "my", "name", "is"];
const mixedArr = ["a-mixed", "sam", "hello", "my", 5, "name", "is"];

function makeAllCaps(wordsArr) {
  const arr = [];
  wordsArr.forEach((word) => {
    if (typeof word !== "string") return -1;
    arr.push(word.toUpperCase());
  });
  return arr;
}

function sortWords(wordsArr) {
  wordsArr.sort();
  return wordsArr;
}

function checkValid(arr) {
  return arr.every((word) => {
    return typeof word === "string";
  });
}

function promise(fn, arr) {
  return new Promise((resolve, reject) => {
    if (checkValid(arr)) resolve(fn(arr));
    else reject("invalid input");
  });
}

promise(makeAllCaps, strArr)
  .then((resolve) => {
    return promise(sortWords, resolve);
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });

promise(sortWords, strArr)
  .then((resolve) => {
    return promise(makeAllCaps, resolve);
  })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
console.log("written last, logs first");
