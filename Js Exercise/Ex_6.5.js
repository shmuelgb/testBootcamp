let arr1 = new Array (100);
arr1.fill("(-:");
console.log(arr1);

let arr2 = Array.from({length: 100}, (_, i) => i + 1);
console.log(arr2);

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car.type);

let arr3 = Object.values(car);
console.log(arr3);

let obj = Object.assign({}, arr3);
console.log(obj);

console.log(Array.isArray(arr3));

let arr3Copy1 = arr3.slice(0, arr3.length);
console.log(arr3Copy1);

let arr3Copy2 = arr3;
arr3Copy2.pop();
console.log(arr3Copy1);
