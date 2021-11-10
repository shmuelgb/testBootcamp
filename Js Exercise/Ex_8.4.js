const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

function occurrences (array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        for (let j = 0; j < array[i].length; j++) {
            let currentLetter = array[i].charAt(j);
            if (!obj[`${currentLetter}`])
                obj[`${currentLetter}`] = 0;
            // let counter = obj[`${currentLetter}`] +1;
            obj[`${currentLetter}`]++;
        }
    }
    return obj;
}

console.log(occurrences(array));