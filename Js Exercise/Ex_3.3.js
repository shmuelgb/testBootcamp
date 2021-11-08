const worldPopulation = 7900;


function percentageOfWorld1 (population) {
    return (population / worldPopulation) * 100;
}

let israelPopul = percentageOfWorld1(9);
let usPopul= percentageOfWorld1(329);
let finlandPopul = percentageOfWorld1(6);

console.log(israelPopul);
console.log(usPopul);
console.log(finlandPopul);

const percentageOfWorld2 = (population) => (
    (population / worldPopulation) * 100
);

let israelPopul2 = percentageOfWorld2(9);
let usPopul2= percentageOfWorld2(329);
let finlandPopul2 = percentageOfWorld2(6);

console.log(israelPopul2);
console.log(usPopul2);
console.log(finlandPopul2);