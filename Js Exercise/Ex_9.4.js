const steps = (n) => {
    let space = ` `;
    let hash = `#`;
    for (let i = 1; i <=n; i++){
        console.log(`'${hash.repeat(i)}${space.repeat(n-i)}'`);
    }
}
steps(4);

const steps2 = (n) => {
    let step;
    for (let i = 1; i <=n; i++){
        step ='';
        for (let j = 1; j <=n; j++){
            if (j <= i)
                step +='#';
            else
            step +=' ';
        }
        console.log(`'${step}'`);
    }
}
steps2(6);