function isString (str, func) {
    if (typeof str === 'string'){
        return function (str) {
            console.log(str);
        }(str);
    }
}
isString('hello');

firstWordUpperCase = (str, func) => {
    let strArr = str.split(' ');
    strArr[0] = strArr[0].toUpperCase();
    str = strArr.join(' ');
    return func (str);
}
dashLogger = (str) => {
    let strArr = str.split(' ');
    str = strArr.join('-');
    console.log(str);
}
let hello = 'hello my name is shmuel';
firstWordUpperCase(hello, dashLogger);

function mult (str) {
    console.log(`*********${str}*********`);
}
firstWordUpperCase(hello, mult);

function strCounter (str, func) {
    func(str.length);
    console.log(str);
    return func(str.length);
}
function aster (n) {
    console.log('*'.repeat(n));
}
strCounter(hello, aster);