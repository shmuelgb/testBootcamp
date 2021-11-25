function binarSearch(arr, n) {
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === n) {
    return mid + 1;
  } else if (arr[mid] < n) {
    return binarSearch(arr.slice(mid, arr.length), n) + mid;
  } else if (arr[mid] > n) {
    return binarSearch(arr.slice(0, mid), n);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];
console.log(binarSearch(arr, 6));
