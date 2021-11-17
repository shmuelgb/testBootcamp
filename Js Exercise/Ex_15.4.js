function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
// problem: when sum was declared it wasn't given any value, so its undefined. undefined + number = Nan. found it while debigging and saw that on the first iteration sum becomes Nan.
