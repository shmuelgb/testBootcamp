const food = ["Noodle", "Pasta", "Iace-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Oalives",
"Hamburgers"];

const compare = (array1, array2) =>{
    let same = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j])
            same.push(array1[i]);
        }
    }
    return same.length? same: false;
}
console.log(compare(food, food1));