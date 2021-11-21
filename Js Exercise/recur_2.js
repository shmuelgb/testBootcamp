let arr = ["h", "e", "l", "l", "o"];

function reverse(str) {
  if (str.length === 0) {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverse(arr.join("")));
