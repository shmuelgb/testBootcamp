function getSum(arr1, arr2) {
  let sum = 0; //!const
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]); //!missing a ','
//didn't need debuging tool. found the coma with my eyes, and the const bachse its throw an error 'cant reassign const'.
