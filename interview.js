function plusMinus(arr) {
  let pos = 0;
  let zero = 0;
  let neg = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 && neg++;
    arr[i] > 0 && pos++;
    arr[i] === 0 && zero++;
  }
  const output = [];
  console.log({ pos, neg, zero });
  output.push(pos / length);
  output.push(zero / length);
  output.push(neg / length);
  return output;
}

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) max += arr[i];
    if (i !== arr.length - 1) min += arr[i];
  }
  console.log({ min, max });
}
// console.log(miniMaxSum([1, 2, 3]));

// function timeConversion(s) {
//   let hours = parseInt(s.slice(0, 2));
//   const timeCase = s[s.length - 2];
//   console.log({ timeCase, hours });
//   ///
//   if (timeCase === "A" && hours === 12) {
//     hours = "00";
//   } else if (timeCase === "P" && hours !== 12) {
//     hours += 12;
//   }
//   if (hours < 9 && hours !== "00") hours = "0" + hours;
//   s = s.slice(2, s.length - 2);
//   return hours + s;
// // }
// const time = "12:45:54PM";
// console.log(timeConversion(time));
// Given an array of integers, find the minimum sum which is obtained from summing each two integer's product

// Notes
// Array/list will only contain positives numbers.
// Array/list will always have even size.
// Input >> Output Examples
// 1- minSum([5,4,2,3]) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// 2- minSum([12,6,10,26,3,24]) ==> return (342)
//Explanation ::
// 26*3 + 24*6 + 12*10 = 342

// function lonelyinteger(a) {
//   if (a.length === 1) return a[0];
//   const obj = {};
//   for (let i = 0; i < a.length; i++) {
//     if (!obj[a[i]]) obj[a[i]] = 0;
//     obj[a[i]] += 1;
//   }
//   console.log({ obj });
//   let keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     if (obj[keys[i]] === 1) return parseInt(keys[i]);
//   }
// }
// const arr = [0, 0, 1, 2, 1];
// console.log(lonelyinteger(arr));

// function diagonalDifference(arr) {
//   let rtl = 0;
//   let ltr = 0;
// }

// function diagonalDifference(arr) {
//   let rtl = 0;
//   let ltr = 0;
//   //   const limit = Math.ceil(arr.length / 2) + 1;
//   for (let i = 0; i < arr.length; i++) {
//     rtl += arr[i][i];
//     ltr += arr[i][arr.length - (i + 1)];
//     console.table({ i, rtl, ltr });
//   }
//   return Math.abs(rtl - ltr);
// }
// const arr = [
//   [11, 2, 4, 2],
//   [4, 5, 6, 2],
//   [10, 8, -12, 2],
//   [10, 8, -12, 2],
// ];
// console.log(diagonalDifference(arr));

// const checkPattern = (pattern, str) => {
//   pattern = pattern.split("");
//   str = str.split(" ");
//   if (pattern.length !== str.length) return false;
//   const obj = {};
//   const obj2 = {};
//   for (let i = 0; i < str.length; i++) {
//     console.log({ i, pattern: pattern[i], str: str[i] });
//     if (!obj[pattern[i]]) {
//       if (Object.values(obj).indexOf(str[i]) === -1) return false;
//       obj[pattern[i]] = str[i];
//     } else if (str[i] !== obj[pattern[i]]) return false;
//   }
//   return true;
// };
// const pattern = "aabbc";
// const str = "cat cat dog dog dog";
// console.log(checkPattern(pattern, str));

// //!Cluoser:
// const func = (a) => {
//   return (func2 = (b) => {
//     return a + b;
//   });
// };
// const add3 = func(3);
// console.log(add3(2));
// const foo = () => console.log("foo");
// foo();
// const a = {
//   name: "a",
//   fn: function () {
//     console.log(this.name);
//   },
// };
// const name = "b";
// a.fn();

//! Reverse String
// const reverseStr = (str) => {
//   let output = "";
//   str = str.split("");
//   for (let i = str.length - 1; i >= 0; i--) {
//     output = output + str[i];
//   }
//   for (let i = 0; i < str.length; i++) {
//     output = str[i] + output;
//   }
//   return output;
// // }
// const reverseStr = (str) => {
//   let output = "";
//   //   str = str.split("");
//   const requrtion = (str) => {
//     if (!str[0]) return;
//     console.log(str);
//     return requrtion(str.slice(1));
//   };
//   return requrtion();
// };
console.log(reverseStr("hello"));
