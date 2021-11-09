const israel = {
    language: "Hebrow",
    isIsland: false,
    population: 9,
    country: "israel"
};
function countryToLiveIn (language, isIsland, population, country) {
    let isYour = `You should live in ${country}`;
    let isNotYour = `${country} does not meet your criteria`;

    if (language === israel.language &&
        isIsland === israel.isIsland &&
        population > israel.population){
            return console.log(isYour);
        }
        return console.log(isNotYour);
}

countryToLiveIn("Hebrow", false, 10, "israel");
