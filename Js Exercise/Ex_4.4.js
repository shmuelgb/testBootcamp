function multi (n) {
    let counter = 1;
    let nArr = [];
    while (counter <= n){
        nArr.push(counter)
        counter++;
    }
    for (let i = 0; i < nArr.length; i++){
        let nArr2 = [nArr[i]]
        if (nArr[i] % 7 === 0 && nArr2.includes(7))
        console.log("BOOM-BOOM,");
        
        else if (nArr[i] % 7 === 0)
        console.log("BOOM,");

        else 
        console.log(`${nArr[i]},`);
    }
} 

multi(18);