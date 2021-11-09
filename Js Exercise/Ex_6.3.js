function strCharCounter (array) {
    let counterArr = [];
    for (let i = 0; i < array.length; i++) {
        counterArr[i] = array[i].length;
    }
    return console.log(counterArr);;
}

strCharCounter(["boo", "doooo", "hoo","ro"]);