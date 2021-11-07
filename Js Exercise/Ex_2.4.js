function todayIs () {
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthArr = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let current = new Date();
    let day = daysArr[current.getDay()];

    let date = current.getDate();
    let month = monthArr[current.getMonth()];
    let year = current.getFullYear();

    return `Today is ${day} the ${date} of ${month}, ${year}`;
}


console.log(todayIs());
