function tellFortune (jobTitle, location, partnerName, numberOfChildren) {
    let tellFortune = `You will be a ${jobTitle} in ${location} and married to
    ${partnerName} with ${numberOfChildren} children`;
    return tellFortune;
}
console.log(tellFortune("programer", "jerusalem", "Efrat", "0.5"));
