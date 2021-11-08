function isALeap (n) {
    let isLeap = "It is indeed a leap year";
    let isNotLeap = "This is not a leap year";
    if (Number.isInteger(n/4)){
        if (Number.isInteger(n/100) && !Number.isInteger(n/ 400))
        return console.log(isNotLeap);
    }
    console.log(isLeap);
}
isALeap(2012);