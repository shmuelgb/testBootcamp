let mycountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrow',
    population: 9,
    neighbours: ['Egypt', 'Syria', 'Labanon', 'Jorden'],
    describe() {
        console.log(`${this.country} has ${this.population} milion people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland() {
        return (this.neighbours.length === 0);
    }
};
mycountry.describe();
console.log(mycountry.checkIsland());