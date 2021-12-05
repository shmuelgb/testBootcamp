const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "5",
];
function MyArray(array) {
  this.array = array;
}
let arr1 = new MyArray(words);
console.log(arr1);

MyArray.prototype.filter = function (fn) {
  const result = [];
  for (let i = 0; i < this.array.length; i++) {
    if (fn(this.array[i])) result.push(this.array[i]);
  }
  return result;
};
function smallerThan7(str) {
  return str.length < 7;
}
console.log(arr1.filter(smallerThan7));

MyArray.prototype.find = function (fn) {
  for (let i = 0; i < this.array.length; i++) {
    if (fn(this.array[i])) return this.array[i];
  }
  return -1;
};
function isANumber(n) {
  return typeof n === "number";
}
console.log(arr1.find(isANumber));
