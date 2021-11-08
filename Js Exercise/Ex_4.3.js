let jhon1 = 89;
let jhon2 = 120;
let jhon3 = 103;


let mike1 = 116;
let mike2 = 94;
let mike3 = 123;

function avrage (a,b,c){
    return (a + b + c) / 3;
}

function winner (a,b){
    if (a < b)
    return b;
    else if ( a > b)
    return a;
    else return -1;
}

let jhon = avrage(jhon1, jhon2, jhon3);
let mike = avrage(mike1, mike2, mike3);

// jhon = 1;
// mike = 1;

if (winner(jhon, mike) === -1){
    console.log("It's a draw!");
}
else if (winner(jhon, mike) === mike){
    console.log(`Mike is the winner! He scored ${mike}`);
}
else {
    console.log(`Jhon is the winner! He scored ${jhon}`);
}

