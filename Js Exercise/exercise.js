const array = [1, 1, 3, 3, 5, 5, 7];
const obj = {};
for (let i = 0; i < array.length; i++) {
  obj[array[i]] === 1 ? obj[array[i]]++ : (obj[array[i]] = 1);
}
const res = Object.entries(obj).find((x) => x[1] === 1);
console.log(res[0]);
