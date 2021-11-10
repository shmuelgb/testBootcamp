let theSunAlsoRises = {
    name: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
    year: 1926,
    genre: 'novel',
    rating: 9.8
};

// let keys = Object.keys(theSunAlsoRises);
// console.log(keys);
// let values = Object.values(theSunAlsoRises);
// console.log(values);

function swap(obj){
    let copy = {};
    for(let key in obj){
        copy[obj[key]] = key;
    }
    return copy;
}

console.log(swap(theSunAlsoRises));

