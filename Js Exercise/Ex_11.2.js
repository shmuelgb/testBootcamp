let numbers = [11,22,33,44,55,66,77,88,99,100];
let mix = [33, "Noodle", 22, "Pasta", "Iace-cream", 58, "Meat",
"Cucumber", 27, "Olives", 25];
let str = 'hello my name is shmuel gabai';

const doubleValues = numbers.map(n => {
    return n*2;
});
console.log(doubleValues);

function onlyEvenValues(array){
    let evenArray = [];
    array.forEach(n => {
        if (n % 2 === 0){
            evenArray.push(n);
        }
    })
    return evenArray
}
console.log(onlyEvenValues(numbers));

function showFirstAndLast (array) {
    let outputArr = [];
    array.forEach(element => {
        if (typeof element === 'string'){
            outputArr.push(element);
        }
    });
    return [outputArr[0], outputArr[outputArr.length-1]]
}
console.log(showFirstAndLast(mix));

function vowelCount(str) {
    let obj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    let strArr = str.toLowerCase().split('');
    strArr.forEach(letter => {
        switch (letter) {
            case 'a':
                obj.a++;
                break;
            case 'e':
                obj.e++;
                break;
            case 'i':
                obj.i++;
                break;
            case 'o':
                obj.o++;
                break;
            case 'u':
                obj.u++;
                break;
        }
    });
    return obj;
}
console.log(vowelCount(str));

function capitalize(str) {
    let strArr = str.split(' ');
    strArr = strArr.map(word => {return word.toUpperCase()});
    return strArr.join(' ');
}
console.log(capitalize(str));

function shiftLetters(str) {
    let output = [];
    let strArr = str.split(' ');
    strArr.forEach(word => {
        word = word.split('')
        const wordsArray = word.map(letter => {
            return String.fromCharCode(letter.charCodeAt(0)-1)
        })
        output.push(wordsArray.join(''));
    });
    return output.join(' ');
}
console.log(shiftLetters(str));

function swapCase(str) {
    let output = str.split(' ');
    let counter = 0;
    output.forEach(word => {
        if (counter % 2 === 0){
            word = capitalize(word);
            counter++;
        }
    });
    return output;
}
console.log(swapCase(str));