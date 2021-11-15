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


function populationPercentages2 (array) {
    let percentages = [];
    let i = 0;
    while (i < populations.length) {
        percentages.push(percentageOfWorld1(array[i]))
        i++;
    }
    return percentages;
}
console.log(populationPercentages2(populations));

// for this case i like the For loop better, bechase i'm working with numbers and i need the i varuble anyway in order to control iteretions, so it does not make sence to handle them seperetly and not inside the For loop format. besides, it makes it easier to forget to put a stop to the loop.
