const obj1 = {};
console.time('object');
for (let i = 0; i < 1000000; i++) {
    obj1[i] = i;
}
console.timeEnd('object');

console.time('objectFind');
console.log(obj1[555555]);
console.timeEnd('objectFind');


const map1 = new Map;
console.time('map');
for (let i = 0; i < 1000000; i++) {
    map1.set(i,i);
}
console.timeEnd('map');

console.time('mapFind');
console.log(map1.get(555555));
console.timeEnd('mapFind');