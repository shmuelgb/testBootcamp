function reverseRecurtion(arr) {
  if (typeof arr === "object") arr = arr.join("");
  if (arr.length === 0) return;
  reverseRecurtion(arr.substring(1, arr.length));
  console.log(arr[0]);
}
let arr = ["h", "e", "l", "l", "o"];
reverseRecurtion(arr);

function reversFor(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reversFor(arr);
