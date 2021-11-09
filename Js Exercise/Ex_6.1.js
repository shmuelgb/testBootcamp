let arr1 = [1,7,3,0,-5,7,3,9];
let arr2 = [1,7,3,-5,7,3,9];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

function arrayLength (array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter++;
    }
    return counter;
}
console.log(`The Array's length is ${arrayLength(arr1)}`);

function arraySum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(`The Array's sum is ${arraySum(arr1)}`);

function arrayMulti (array) {
    let multiplication = 1;
    for (let i = 0; i < array.length; i++) {
        multiplication = multiplication * array[i];
    }
    return multiplication;
}
console.log(`The Array's multiplication is ${arrayMulti(arr1)}`);
console.log(`The Array's multiplication is ${arrayMulti(arr2)}`);