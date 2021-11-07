
function describeCountry (country, population, capitalCity){
    let describeCountry = `${country} has ${population}
    million people and its capital city is ${capitalCity}`;
    return describeCountry;
}

let israel = describeCountry("Israel", "9", "Jerusalem");
let finland = describeCountry("Finland", "6", "Helsinki");
let us = describeCountry("United States Of America", "329", "Washington, D.C.");

console.log(israel);
console.log(finland);
console.log(us);