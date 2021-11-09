let populations = [9,329, 6, 40];

function percentageOfWorld1 (population) {
    const worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}

function populationPercentages (array) {
    let percentages = [];
    for (let i = 0; i < array.length; i++) {
        percentages.push(percentageOfWorld1(array[i]))
    }
    return percentages;
}
console.log(populationPercentages(populations));