const sam = {
    name: 'Shmuel Gabai'
}
const ef = {
    name: 'Efrat Gabai'
}
const dad = {
    name: 'Ben-Tzion Gabai'
}

const personsMap = new Map();
personsMap.set(sam, '315448423')
personsMap.set(ef, '316333913')
personsMap.set(dad, '51167112')
for (let person of personsMap) {
    console.log(person[0].name, person[1]);
}
