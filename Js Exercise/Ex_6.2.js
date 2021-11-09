const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.shift(1);
people.pop();
people.unshift("Matt");
people.push("Shmuel");
console.log(people);

for (let i = 0; i < 2; i++) {
    console.log(people[i]);
}

let peopleCopy = people.slice(-2)
console.log(peopleCopy);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people.splice(2,1, 'Elizabeth');
console.log(people);
