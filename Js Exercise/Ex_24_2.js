function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}
let p1 = new Pokemon("picatchoo1", "somthing", ["lightning", "fire"]);
let p2 = new Pokemon("squichoo2", "somthing2", ["speed", "strong"]);
let p3 = new Pokemon("siazoo3", "somthing3", ["out of ideas", "cold"]);

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name}`;
};
console.log(p1.callPokemon());

Pokemon.prototype.attack = function (attackNum) {
  return `pokemon ${this.name} used ${this.attackList[attackNum]}`;
};
console.log(p1.attack(1));
