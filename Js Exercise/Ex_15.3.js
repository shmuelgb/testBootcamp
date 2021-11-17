function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//problem: indexes starts at 0. found it while debugging and saw that it returned NaN which means we tryng to use math operator on a undefined. why would arr[index] be undefined? bechase wer'e tryng to reach non existing index
